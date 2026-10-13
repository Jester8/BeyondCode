/* Beyond Code 2027: shared behaviour for every page.
   Libraries: GSAP + ScrollTrigger (motion), Lenis (smooth scroll), Vanilla Tilt (3D card tilt). */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lenis = null;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* Mark the current page in the navigation */
  var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.navlinks a, #mobile-menu a, footer nav a').forEach(function (a) {
    var href = (a.getAttribute('href') || '').split('#')[0].toLowerCase();
    if (href && href === here) a.setAttribute('aria-current', 'page');
  });

  /* Mobile menu */
  var menuBtn = document.getElementById('menu-btn');
  var menu = document.getElementById('mobile-menu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () {
      var open = menu.classList.toggle('hidden') === false;
      menuBtn.setAttribute('aria-expanded', String(open));
    });
  }

  /* Image slots: when a generated 3D image loads, hide the glass tile fallback */
  function markLoaded(img) {
    if (img.id === 'hero-img') {
      var fb = document.querySelector('.fallback-cursor');
      if (fb) fb.style.display = 'none';
    } else {
      var host = img.closest('.slot');
      if (host) host.classList.add('has-img');
    }
  }
  document.querySelectorAll('img[data-slot]').forEach(function (img) {
    if (img.complete && img.naturalWidth > 0) markLoaded(img);
    else img.addEventListener('load', function () { markLoaded(img); });
  });

  /* Speaker slider: continuous looping scroll, arrows, dots, pause, and a popup for each card */
  var dialog = null, dialogOpener = null;
  function speakerDialog() {
    if (dialog) return dialog;
    dialog = document.createElement('dialog');
    dialog.className = 'speaker-dialog';
    dialog.setAttribute('aria-labelledby', 'speaker-dialog-name');
    dialog.innerHTML =
      '<div class="relative h-72 bg-plum" data-d-photo></div>' +
      '<button type="button" data-d-close aria-label="Close" class="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-mist/40 bg-night/80 text-white"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>' +
      '<div class="flex flex-col gap-3 p-7">' +
      '<p class="text-sm font-extrabold uppercase tracking-[0.14em] text-mint" data-d-session></p>' +
      '<h3 id="speaker-dialog-name" class="text-3xl font-extrabold tracking-tight text-white" data-d-name></h3>' +
      '<p class="text-lg font-semibold text-mist" data-d-role></p>' +
      '<p class="text-base leading-relaxed text-haze" data-d-bio></p></div>';
    dialog.style.position = 'fixed';
    document.body.appendChild(dialog);
    dialog.addEventListener('click', function (e) { if (e.target === dialog || e.target.closest('[data-d-close]')) dialog.close(); });
    dialog.addEventListener('close', function () {
      document.documentElement.style.overflow = '';
      if (lenis) lenis.start();
      if (dialogOpener) dialogOpener.focus({ preventScroll: true });
    });
    return dialog;
  }
  function openSpeaker(card) {
    var d = speakerDialog(), q = function (k) { return d.querySelector('[data-d-' + k + ']'); };
    q('name').textContent = card.dataset.name;
    q('role').textContent = card.dataset.role;
    q('bio').textContent = card.dataset.bio;
    q('session').textContent = card.dataset.session;
    q('photo').innerHTML = card.dataset.img
      ? '<img src="' + card.dataset.img + '" alt="' + card.dataset.name + '" class="h-full w-full object-cover">'
      : '<div class="grid h-full place-items-center text-8xl font-extrabold text-mist" aria-hidden="true">?</div>';
    dialogOpener = card;
    document.documentElement.style.overflow = 'hidden';
    if (lenis) lenis.stop();
    d.showModal();
  }

  document.querySelectorAll('[data-carousel]').forEach(function (root) {
    var track = root.querySelector('.carousel');
    if (!track) return;
    var slides = [].slice.call(track.children);
    var count = slides.length;
    /* Extra copies make the loop seamless, enough that the track always scrolls past one full set */
    function addCopy() {
      slides.forEach(function (sl) {
        var c = sl.cloneNode(true);
        c.setAttribute('aria-hidden', 'true');
        c.querySelectorAll('[tabindex], a').forEach(function (el) { el.setAttribute('tabindex', '-1'); });
        track.appendChild(c);
      });
    }
    function fill() {
      var guard = 0;
      while (guard++ < 6 && track.scrollWidth < track.children[count].offsetLeft - track.children[0].offsetLeft + track.clientWidth + 40) addCopy();
    }
    addCopy();
    fill();
    window.addEventListener('resize', fill);
    var dots = [].slice.call(root.querySelectorAll('[data-dot]'));
    var prev = root.querySelector('[data-prev]');
    var next = root.querySelector('[data-next]');
    var toggle = root.querySelector('[data-toggle]');
    var pos = 0, prevLeft = 0, last = 0, hover = false, touching = false, focused = false, userPaused = false, holdUntil = 0, raf = 0;
    var SPEED = 40; /* pixels per second */

    function loopWidth() { return track.children[count].offsetLeft - track.children[0].offsetLeft; }
    function slideStep() { return track.children[1].offsetLeft - track.children[0].offsetLeft; }
    function wrap() {
      var w = loopWidth();
      if (!w) return;
      if (track.scrollLeft >= w) track.scrollLeft -= w;
      else if (track.scrollLeft <= 0 && prevLeft > 0) track.scrollLeft = w - 1; /* scrolled back past the start */
      prevLeft = track.scrollLeft;
    }
    function activeIndex() { return Math.round(track.scrollLeft / slideStep()) % count; }
    function paint() { var a = activeIndex(); dots.forEach(function (d, k) { d.setAttribute('aria-current', k === a ? 'true' : 'false'); }); }
    function running() { return !(reduce || userPaused || hover || touching || focused || document.hidden || performance.now() < holdUntil); }

    function tick(t) {
      var dt = Math.min((t - last) / 1000, 0.1); last = t;
      if (Math.abs(track.scrollLeft - pos) > 2) pos = track.scrollLeft; /* moved by user, arrows or dots */
      if (running()) {
        pos += SPEED * dt;
        var w = loopWidth();
        if (w && pos >= w) pos -= w;
        track.scrollLeft = pos;
      }
      wrap();
      paint();
      raf = requestAnimationFrame(tick);
    }
    function hold(ms) { holdUntil = performance.now() + ms; }
    function glide(left) { hold(1200); track.scrollTo({ left: left, behavior: reduce ? 'auto' : 'smooth' }); }

    root.addEventListener('mouseenter', function () { hover = true; });
    root.addEventListener('mouseleave', function () { hover = false; });
    root.addEventListener('focusin', function () { focused = true; });
    root.addEventListener('focusout', function () { focused = false; });
    root.addEventListener('touchstart', function () { touching = true; }, { passive: true });
    root.addEventListener('touchend', function () { touching = false; hold(2000); }, { passive: true });

    if (prev) prev.addEventListener('click', function () { var x = track.scrollLeft; if (x < slideStep()) { track.scrollLeft = x + loopWidth(); x = track.scrollLeft; } glide(x - slideStep()); });
    if (next) next.addEventListener('click', function () { glide(track.scrollLeft + slideStep()); });
    dots.forEach(function (d, k) {
      d.addEventListener('click', function () {
        var w = loopWidth(), base = Math.floor(track.scrollLeft / w) * w;
        glide(base + k * slideStep());
      });
    });
    if (toggle) {
      if (reduce) { toggle.style.display = 'none'; }
      toggle.addEventListener('click', function () {
        userPaused = !userPaused;
        toggle.setAttribute('aria-pressed', String(userPaused));
        toggle.querySelector('[data-label]').textContent = userPaused ? 'Play' : 'Pause';
      });
    }

    track.addEventListener('click', function (e) { var c = e.target.closest('[data-speaker]'); if (c) openSpeaker(c); });
    track.addEventListener('keydown', function (e) {
      var c = e.target.closest('[data-speaker]');
      if (c && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openSpeaker(c); }
    });

    paint();
    last = performance.now();
    raf = requestAnimationFrame(tick);
  });

  /* Scroll to top arrow in the footer */
  var footer = document.querySelector('footer > div');
  if (footer) {
    var top = document.createElement('button');
    top.type = 'button';
    top.setAttribute('aria-label', 'Scroll to top');
    top.className = 'to-top grid h-12 w-12 shrink-0 place-items-center rounded-full border border-grape text-mint';
    top.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>';
    top.addEventListener('click', function () {
      if (lenis) lenis.scrollTo(0, { duration: 1.4 });
      else window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    });
    footer.appendChild(top);
  }

  if (reduce || !window.gsap) return;

  gsap.registerPlugin(ScrollTrigger);

  /* Lenis smooth scroll wired into ScrollTrigger */
  if (window.Lenis) {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (id.length > 1) {
          var target = document.querySelector(id);
          if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -90, duration: 1.4 }); }
        }
      });
    });
  }

  /* Page intro */
  var intro = gsap.timeline({ defaults: { ease: 'power4.out' } });
  intro.from('.nav-in', { y: -30, opacity: 0, duration: 0.9 });
  if (document.querySelector('.hero-line')) {
    intro.from('.hero-line > span', { yPercent: 115, duration: 1.2, stagger: 0.14 }, '-=0.5');
  }
  if (document.querySelector('.hero-fade')) {
    intro.from('.hero-fade', { y: 28, opacity: 0, duration: 0.9, stagger: 0.1 }, '-=0.7');
  }
  if (document.getElementById('hero-cursor')) {
    intro.from('#hero-cursor', { y: 60, rotate: -10, opacity: 0, scale: 0.88, duration: 1.3 }, '-=1.2');
  }
  if (document.querySelector('.float-item')) {
    intro.from('.float-item', { scale: 0.5, opacity: 0, duration: 1.1, stagger: 0.1, ease: 'back.out(1.7)' }, '-=1.0');
  }

  /* Idle motion on the home hero */
  if (document.querySelector('.orbit')) {
    gsap.to('.orbit', { rotate: 360, duration: 60, ease: 'none', repeat: -1, transformOrigin: '50% 50%' });
    gsap.to('.orbit-rev', { rotate: -360, duration: 80, ease: 'none', repeat: -1, transformOrigin: '50% 50%' });
  }
  gsap.utils.toArray('.float-in').forEach(function (el, i) {
    gsap.to(el, { y: i % 2 ? 14 : -14, rotate: i % 2 ? -4 : 4, duration: 2.6 + i * 0.35, ease: 'sine.inOut', yoyo: true, repeat: -1 });
  });
  if (document.getElementById('hero-cursor')) {
    gsap.to('#hero-cursor', { y: -8, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.6 });
  }

  /* Mouse parallax on hero icons */
  var items = gsap.utils.toArray('[data-depth]');
  if (items.length && finePointer) {
    window.addEventListener('mousemove', function (e) {
      var nx = e.clientX / window.innerWidth - 0.5;
      var ny = e.clientY / window.innerHeight - 0.5;
      items.forEach(function (el) {
        var d = parseFloat(el.dataset.depth);
        gsap.to(el, { x: nx * d * 44, y: ny * d * 44, duration: 0.9, ease: 'power3.out', overwrite: 'auto' });
      });
    });
  }

  /* Marquee */
  if (document.querySelector('.marquee-track')) {
    gsap.to('.marquee-track', { xPercent: -50, duration: 28, ease: 'none', repeat: -1 });
  }

  /* Scroll reveals */
  gsap.utils.toArray('[data-reveal]').forEach(function (el) {
    gsap.from(el, { y: 44, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
  });
  gsap.utils.toArray('[data-stagger]').forEach(function (group) {
    gsap.from(group.children, { y: 56, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: group, start: 'top 86%', once: true } });
  });

  /* Count up numbers */
  gsap.utils.toArray('[data-count]').forEach(function (el) {
    var end = parseInt(el.dataset.count, 10);
    var obj = { v: 0 };
    el.textContent = '0';
    gsap.to(obj, { v: end, duration: 1.8, ease: 'power2.out', onUpdate: function () { el.textContent = Math.round(obj.v); }, scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
  });

  /* Programme timeline: the line fills as you scroll, rows slide in */
  if (document.getElementById('timeline')) {
    gsap.fromTo('#tl-fill', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '#timeline', start: 'top 70%', end: 'bottom 70%', scrub: 0.6 } });
    gsap.utils.toArray('.tl-item').forEach(function (el) {
      gsap.from(el, { x: 40, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
    });
  }

  /* 3D tilt on glass cards (mouse devices only) */
  if (finePointer && window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'), { max: 7, speed: 500, glare: true, 'max-glare': 0.16, perspective: 1000 });
  }
})();
