import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowUpRightIcon } from '@/components/icons';
import {
  Container,
  Eyebrow,
  FeatureCard,
  PageIntro,
  whatsappLink,
} from '@/components/site';

const steps = [
  ['Message us', 'Send a WhatsApp message or an email with your name, role and company.'],
  ['Confirm your ticket', 'We reply with payment details and hold your seat once it is confirmed.'],
  ['Show up ready', 'Arrive for 11:00am, collect your role-coloured badge and head to the Ask Board.'],
];

const questions = [
  ['Who can attend?', 'Anyone who works in or near tech: founders, engineers, product people, sales and marketing, students and investors.'],
  ['What time does it start and end?', 'Doors open for an 11:00am start and the day closes at 3:00pm on Saturday 3 April 2027.'],
  ['Where is it?', 'The venue is still to be confirmed. Everyone who registers hears first.'],
  ['What is the Ask Board?', 'A board where you post one ask and one offer. You will meet people who can help with yours and need yours.'],
  ['What are the role-coloured badges?', 'Your badge colour shows your role, so you can find the right person in seconds.'],
];

export const metadata = {
  title: 'Register',
  description: 'Reserve your seat at Beyond Code 2027.',
};

export default function RegisterPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Register"
        title="Reserve your seat."
        description="Three steps. Bring one ask and one offer, and arrive for 11:00am."
      />

      <section className="py-12 sm:py-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map(([title, copy], index) => (
              <Reveal key={title} delay={index * 80}>
                <FeatureCard number={`0${index + 1}`} title={title}>
                  {copy}
                </FeatureCard>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 rounded-[2rem] bg-ink p-7 text-white sm:p-12">
            <Eyebrow>Pick how you want to reach us</Eyebrow>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to be in the room?
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappLink}
                className="inline-flex min-h-12 items-center rounded-full bg-tangerine px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#e93d2a]"
              >
                Register on WhatsApp
              </a>
              <a
                href="mailto:samuelolu407@gmail.com?subject=Beyond%20Code%202027%20registration"
                className="inline-flex min-h-12 items-center rounded-full border border-white/25 px-6 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Register by email
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-black/[0.06] bg-paper py-14 sm:py-20">
        <Container maxWidth="3xl">
          <Reveal>
            <Eyebrow>Before you come</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Bring one ask and one offer.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-black/60">
              Something you need help with, and something you can give. That is
              the whole entry fee for the Ask Board.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container maxWidth="3xl">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Quick answers.
            </h2>
          </Reveal>
          <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
            {questions.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-ink marker:hidden">
                  {question}
                  <span
                    aria-hidden="true"
                    className="text-xl font-normal text-violet transition duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 pr-8 text-sm leading-relaxed text-black/60">
                  {answer}
                </p>
              </details>
            ))}
          </div>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-violet hover:text-tangerine"
          >
            Learn more about the event <ArrowUpRightIcon />
          </Link>
        </Container>
      </section>
    </main>
  );
}
