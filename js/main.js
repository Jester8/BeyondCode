/* Beyond Code 2027: shared behaviour for every page.
   Libraries: GSAP + ScrollTrigger (motion), Lenis (smooth scroll), Vanilla Tilt (3D card tilt). */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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

  /* Speaker carousel: swipe on small screens, auto slides, pause control, dots and arrows */
  document.querySelectorAll('[data-carousel]').forEach(function (root) {
    var track = root.querySelector('.carousel');
    if (!track) return;
    var slides = [].slice.call(track.children);
    var dots = [].slice.call(root.querySelectorAll('[data-dot]'));
    var prev = root.querySelector('[data-prev]');
    var next = root.querySelector('[data-next]');
    var toggle = root.querySelector('[data-toggle]');
    var small = window.matchMedia('(max-width: 767px)');
    var idx = 0, timer = null, resumeTimer = null, userPaused = false;

    function offsetOf(i) { return slides[i].offsetLeft - slides[0].offsetLeft; }
    function setActive(i) {
      dots.forEach(function (d, k) { d.setAttribute('aria-current', k === i ? 'true' : 'false'); });
    }
    function go(i) {
      idx = (i + slides.length) % slides.length;
      track.scrollTo({ left: offsetOf(idx), behavior: reduce ? 'auto' : 'smooth' });
      setActive(idx);
    }
    function nearest() {
      var best = 0, min = Infinity;
      slides.forEach(function (s, k) {
        var d = Math.abs(offsetOf(k) - track.scrollLeft);
        if (d < min) { min = d; best = k; }
      });
      return best;
    }
    function stop() { clearInterval(timer); timer = null; }
    function start() {
      stop();
      if (reduce || userPaused || !small.matches) return;
      timer = setInterval(function () { if (!document.hidden) go(idx + 1); }, 3500);
    }
    function resumeSoon() { clearTimeout(resumeTimer); resumeTimer = setTimeout(start, 4500); }

    track.addEventListener('scroll', function () { idx = nearest(); setActive(idx); }, { passive: true });
    ['pointerdown', 'touchstart', 'focusin', 'mouseenter'].forEach(function (ev) {
      root.addEventListener(ev, function () { stop(); clearTimeout(resumeTimer); }, { passive: true });
    });
    ['touchend', 'pointerup', 'focusout', 'mouseleave'].forEach(function (ev) {
      root.addEventListener(ev, resumeSoon, { passive: true });
    });

    dots.forEach(function (d, k) { d.addEventListener('click', function () { go(k); resumeSoon(); }); });
    if (prev) prev.addEventListener('click', function () { go(idx - 1); resumeSoon(); });
    if (next) next.addEventListener('click', function () { go(idx + 1); resumeSoon(); });
    if (toggle) {
      if (reduce) { toggle.style.display = 'none'; }
      toggle.addEventListener('click', function () {
        userPaused = !userPaused;
        toggle.setAttribute('aria-pressed', String(userPaused));
        toggle.querySelector('[data-label]').textContent = userPaused ? 'Play' : 'Pause';
        if (userPaused) stop(); else start();
      });
    }
    small.addEventListener('change', function () {
      if (!small.matches) { track.scrollLeft = 0; idx = 0; setActive(0); }
      start();
    });
    setActive(0);
    start();
  });

  if (reduce || !window.gsap) return;

  gsap.registerPlugin(ScrollTrigger);

  /* Lenis smooth scroll wired into ScrollTrigger */
  var lenis = null;
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
