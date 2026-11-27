import Image from 'next/image';
import Link from 'next/link';
import { Container, EventCta, PageIntro } from '@/components/site';

export const metadata = {
  title: 'Meet the Team',
  description: 'Meet the people bringing Beyond Code 2027 together.',
};

type TeamMember = {
  name: string;
  role: string;
  category: string;
  image?: string;
  href?: string;
  mark?: string;
  accent: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Olusanya Samuel',
    role: 'Convener, Beyond Code',
    category: 'Convener',
    image: '/assets/sam-web.jpg',
    href: '/speakers/olusanya-samuel',
    accent: 'bg-[#6536D8]',
  },
  {
    name: 'Abimbola Babatunde',
    role: 'Operations Lead',
    category: 'Operations',
    image: '/assets/abimbola-babatunde.png',
    href: '/team/abimbola-babatunde',
    accent: 'bg-[#FFB7D5]',
  },
  {
    name: 'Aboderin Daniel',
    role: 'Partnerships Lead',
    category: 'Partnerships',
    mark: '01',
    accent: 'bg-[#FF6547]',
  },
  {
    name: 'Meet the team soon',
    role: 'The people bringing Beyond Code 2027 together.',
    category: 'Coming soon',
    mark: '02',
    accent: 'bg-[#C7C9F5]',
  },
  {
    name: 'More team members soon',
    role: 'Stay tuned for the next introduction.',
    category: 'Coming soon',
    mark: '03',
    accent: 'bg-[#94CD01]',
  },
  {
    name: 'New faces, soon',
    role: 'More details will be shared shortly.',
    category: 'Coming soon',
    mark: '04',
    accent: 'bg-[#F4AD36]',
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  const card = (
    <article className="group overflow-hidden border border-white/10 bg-white/[0.04] transition-transform duration-300 hover:-translate-y-1">
      <div className={`relative aspect-[0.84] overflow-hidden ${member.accent}`}>
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 767px) 86vw, (max-width: 1023px) 44vw, 30vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <span className="absolute -right-5 -top-10 select-none text-[15rem] font-extrabold leading-none tracking-[-0.12em] text-ink/10 sm:text-[18rem]">
              {member.mark}
            </span>
            <div className="absolute inset-x-7 bottom-8">
              <span className="mb-3 block h-1 w-12 bg-ink/60" />
              <p className="max-w-[8ch] text-4xl font-extrabold uppercase leading-[0.86] tracking-[-0.06em] text-ink sm:text-5xl">
                Coming soon
              </p>
            </div>
          </div>
        )}
        <span className="absolute right-4 top-4 bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-ink [clip-path:polygon(7%_0,100%_0,93%_50%,100%_100%,7%_100%,0_50%)] sm:text-xs">
          {member.category}
        </span>
      </div>
      <div className="h-36 shrink-0 overflow-hidden p-5">
        <h3 className="line-clamp-2 text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl">
          {member.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/60">
          {member.role}
        </p>
      </div>
    </article>
  );

  return member.href ? (
    <Link
      href={member.href}
      aria-label={`View profile of ${member.name}`}
      className="block w-[min(76vw,280px)] shrink-0 focus-visible:outline-white"
    >
      {card}
    </Link>
  ) : (
    <div className="w-[min(76vw,280px)] shrink-0">{card}</div>
  );
}

export default function TeamPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="The people behind Beyond Code"
        title="Meet the team."
        description="Bringing the tech community together takes a team who care about what happens beyond the code."
      />

      <section className="overflow-hidden bg-ink py-16 text-white sm:py-24">
        <Container>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-lime">
            The people behind Beyond Code
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl">
            Meet the team bringing the room together.
          </h2>
          <p className="sr-only">
            Beyond Code team: {teamMembers.map((member) => member.name).join(', ')}.
          </p>
          <div
            aria-label="Beyond Code team"
            role="region"
            className="team-marquee mt-10"
          >
            <div className="team-marquee-track" aria-hidden="true">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="flex shrink-0 items-stretch gap-5 px-2"
                >
                  {teamMembers.map((member) => (
                    <TeamCard key={`${copy}-${member.name}`} member={member} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <EventCta />
    </main>
  );
}
