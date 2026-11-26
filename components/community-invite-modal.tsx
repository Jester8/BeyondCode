'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { ArrowUpRightIcon } from '@/components/icons';

const COMMUNITY_LINK =
  'https://chat.whatsapp.com/G5V3RW0XNik9IA6WVmspR4';
const DISMISSED_KEY = 'beyond-code-community-invite-dismissed';

export function CommunityInviteModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (window.sessionStorage.getItem(DISMISSED_KEY)) return;

    const timer = window.setTimeout(() => {
      dialogRef.current?.showModal();
    }, 10000);

    return () => window.clearTimeout(timer);
  }, []);

  function rememberDismissal() {
    window.sessionStorage.setItem(DISMISSED_KEY, 'true');
  }

  function dismiss() {
    rememberDismissal();
    dialogRef.current?.close();
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="community-invite-title"
      onClose={rememberDismissal}
      onClick={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
      className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-visible rounded-3xl bg-transparent p-0 text-ink backdrop:bg-black/65 backdrop:backdrop-blur-sm"
    >
      <div className="relative max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-3xl bg-white shadow-card">
        <button
          type="button"
          aria-label="Close community invitation"
          autoFocus
          onClick={dismiss}
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-card transition hover:bg-lime focus-visible:outline-violet"
        >
          <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none">
            <path
              d="m5 5 10 10M15 5 5 15"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.8"
            />
          </svg>
        </button>
        <div className="relative aspect-[1.45] w-full overflow-hidden rounded-t-3xl bg-violet">
          <Image
            src="/assets/beyond-code-community.png"
            alt="Beyond Code community artwork"
            fill
            sizes="(max-width: 640px) 90vw, 512px"
            className="object-cover"
          />
        </div>
        <div className="p-6 sm:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-violet">
            Beyond Code community
          </p>
          <h2
            id="community-invite-title"
            className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl"
          >
            Join the community today.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-black/60 sm:text-base">
            Connect with people building, growing and shaping technology.
          </p>
          <a
            href={COMMUNITY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-extrabold text-white transition hover:bg-violet sm:w-auto"
          >
            Join the WhatsApp community <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </dialog>
  );
}
