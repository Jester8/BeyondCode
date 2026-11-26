export type PartnerOpportunity = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tone: 'violet' | 'tangerine' | 'lime' | 'ink' | 'lavender' | 'paper';
  role: string;
  contributions: string[];
  eventDay: string[];
  recognition: string[];
};

export const partnerOpportunities: PartnerOpportunity[] = [
  {
    slug: 'lead-sponsor',
    title: 'Lead sponsor',
    category: 'Sponsorship',
    summary: 'Help bring the whole Beyond Code experience to life.',
    tone: 'violet',
    role: 'Anchor support for the event, its production, and its reach.',
    contributions: [
      'Support the core production and delivery of the event.',
      'Help widen access for the people who will benefit from attending.',
      'Shape a useful, brand-led moment that fits the conference audience.',
    ],
    eventDay: [
      'A short welcome or introduction on the main stage.',
      'A branded presence in the main event space.',
      'A representative available for conversations and introductions.',
    ],
    recognition: [
      'Lead sponsor placement across event communications and venue signage.',
      'A dedicated sponsor profile on the Beyond Code website.',
      'Acknowledgement in the post-event recap and selected event content.',
    ],
  },
  {
    slug: 'technology-partner',
    title: 'Technology partner',
    category: 'Partnership',
    summary: 'Put useful tools and technology in the hands of builders.',
    tone: 'ink',
    role: 'Support practical demonstrations and the live technology experience.',
    contributions: [
      'Provide tools, software, devices, or technical expertise for a session.',
      'Help the live build and demo corner run smoothly.',
      'Offer a useful product experience that attendees can explore.',
    ],
    eventDay: [
      'Support the live build with tools or a technical representative.',
      'Host a focused product demo or hands-on station.',
      'Help resolve event-day technical needs within the agreed scope.',
    ],
    recognition: [
      'Technology partner credit on the event website and selected materials.',
      'Brand presence beside the supported demo or session.',
      'Mention in related event coverage and recap content.',
    ],
  },
  {
    slug: 'community-partner',
    title: 'Community partner',
    category: 'Partnership',
    summary: 'Bring the right people and communities into the room.',
    tone: 'tangerine',
    role: 'Connect Beyond Code with groups that are building and growing in tech.',
    contributions: [
      'Share the event with relevant member and professional communities.',
      'Help surface attendees who would benefit from a place in the room.',
      'Contribute insight about the needs and interests of those communities.',
    ],
    eventDay: [
      'Welcome and connect members attending through the partnership.',
      'Help facilitate introductions around shared interests.',
      'Join the Ask Board and networking experience where useful.',
    ],
    recognition: [
      'Community partner profile and link on the Beyond Code website.',
      'Credit in agreed promotional and event-day materials.',
      'A reserved opportunity to share a relevant community update.',
    ],
  },
  {
    slug: 'experience-partner',
    title: 'Experience partner',
    category: 'Partnership',
    summary: 'Make the small details of the day feel considered.',
    tone: 'lime',
    role: 'Help attendees feel welcome, comfortable, and ready to connect.',
    contributions: [
      'Support a chosen attendee touchpoint such as check-in, refreshments, or badges.',
      'Help create a clear, welcoming flow through the event space.',
      'Bring a thoughtful activation that adds value rather than noise.',
    ],
    eventDay: [
      'Support the agreed attendee experience area.',
      'Provide a point of contact for the activity or service.',
      'Work with the event team to keep the experience consistent.',
    ],
    recognition: [
      '“Experience supported by” credit beside the relevant event touchpoint.',
      'A partner profile on the Beyond Code website.',
      'Acknowledgement in selected event-day and recap materials.',
    ],
  },
  {
    slug: 'media-partner',
    title: 'Media partner',
    category: 'Partnership',
    summary: 'Help thoughtful ideas travel beyond the room.',
    tone: 'lavender',
    role: 'Capture the people, ideas, and useful moments from the day.',
    contributions: [
      'Share event information with relevant audiences before the event.',
      'Provide agreed photo, video, interview, or editorial coverage.',
      'Coordinate with speakers and attendees on respectful event coverage.',
    ],
    eventDay: [
      'Capture selected sessions, portraits, and event atmosphere.',
      'Conduct short interviews with speakers or attendees where appropriate.',
      'Coordinate coverage with the event team and any consent requirements.',
    ],
    recognition: [
      'Media partner credit and a link on the Beyond Code website.',
      'Credit alongside agreed photo, video, or editorial deliverables.',
      'Mention in relevant event announcements and recap content.',
    ],
  },
  {
    slug: 'venue-partner',
    title: 'Venue partner',
    category: 'Partnership',
    summary: 'Give practical conversations a place to happen.',
    tone: 'paper',
    role: 'Provide a comfortable, accessible setting for the conference.',
    contributions: [
      'Provide or support a suitable venue for the event.',
      'Coordinate access to agreed seating, breakout, and networking areas.',
      'Confirm venue requirements such as connectivity and accessibility.',
    ],
    eventDay: [
      'Coordinate venue access and on-site facility support.',
      'Help prepare the main room and supporting event spaces.',
      'Work with the event team on guest arrival and venue logistics.',
    ],
    recognition: [
      'Venue partner credit in event information and communications.',
      'A venue profile and link on the Beyond Code website.',
      'Acknowledgement in agreed signage and recap materials.',
    ],
  },
];
