export type JournalEntry = {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  gallery: string[];
  detail: string[];
};

export const journalEntries: JournalEntry[] = [
  {
    slug: 'the-art-of-ring-craft',
    title: 'THE ART OF RING CRAFT',
    shortDescription:
      'From stone mapping to final polish, discover how a signature ring is brought to life in our atelier.',
    heroImage: '/jewelry/solitaire-ring.jpg',
    gallery: ['/jewelry/solitaire-ring.jpg', '/jewelry/statement-ring.jpg', '/jewelry/gemstones.jpg'],
    detail: [
      'Each ring begins with a proportional map where center stone size, shoulder taper, and finger balance are calculated together.',
      'Our goldsmiths shape the gallery by hand to achieve strength without visual weight, allowing the diamond to appear suspended in light.',
      'Final finishing includes mirror polish, micro-edge refinement, and stone inspection under multiple lighting temperatures before release.',
    ],
  },
  {
    slug: 'discover-bespoke-jewelry',
    title: 'DISCOVER BESPOKE JEWELRY',
    shortDescription:
      'Collaborate with our gem curators and master goldsmiths to compose a private high-jewelry creation.',
    heroImage: '/jewelry/hero-ring.jpg',
    gallery: ['/jewelry/hero-ring.jpg', '/jewelry/bracelet.jpg', '/jewelry/necklace.jpg'],
    detail: [
      'The bespoke journey starts with a private design dialogue where we define silhouette, sentiment, and wear profile.',
      'A curated stone set is presented with clear tone and brilliance matching, then refined into a single coherent composition.',
      'Every bespoke piece is completed with hand-finished details that ensure couture-level comfort and long-term durability.',
    ],
  },
  {
    slug: 'the-making-of-a-diamond-set',
    title: 'THE MAKING OF A DIAMOND SET',
    shortDescription:
      'See how matching, setting, and finishing unite for a flawless couture silhouette.',
    heroImage: '/jewelry/gemstones.jpg',
    gallery: ['/jewelry/gemstones.jpg', '/jewelry/earrings.jpg', '/jewelry/solitaire-ring.jpg'],
    detail: [
      'Stones are grouped by cut precision, tone harmony, and light behavior so sparkle remains consistent across each piece.',
      'Setting depth is tuned to preserve brilliance while maintaining clean spacing and comfortable skin contact.',
      'The completed set is reviewed as one visual system to ensure every element feels balanced from near and far viewing distances.',
    ],
  },
  {
    slug: 'necklace-architecture',
    title: 'NECKLACE ARCHITECTURE',
    shortDescription:
      'Explore balance, curvature, and stone cadence in our high-jewelry necklace compositions.',
    heroImage: '/jewelry/necklace.jpg',
    gallery: ['/jewelry/necklace.jpg', '/jewelry/bracelet.jpg', '/jewelry/earrings.jpg'],
    detail: [
      'Necklace geometry is designed to follow the collar line naturally, preserving brilliance while keeping visual tension refined.',
      'Graduation patterns are tuned so each segment transitions smoothly in scale, creating rhythm rather than repetition.',
      'Hidden articulation points allow graceful movement, helping the piece remain elegant through long wear and motion.',
    ],
  },
  {
    slug: 'earring-light-study',
    title: 'EARRING LIGHT STUDY',
    shortDescription:
      'A closer look at how drop length and facet alignment shape sparkle in motion.',
    heroImage: '/jewelry/earrings.jpg',
    gallery: ['/jewelry/earrings.jpg', '/jewelry/necklace.jpg', '/jewelry/gemstones.jpg'],
    detail: [
      'Drop proportions are selected to frame the face while maintaining clean visual movement with every turn.',
      'Facet orientation is adjusted for directional light pickup, creating controlled flashes instead of random glare.',
      'Pair matching is finalized only after side-by-side dynamic tests to ensure mirrored performance in motion.',
    ],
  },
  {
    slug: 'black-gold-finishing',
    title: 'BLACK GOLD FINISHING',
    shortDescription:
      'Inside the noire finishing process that creates deep contrast and mirror-like highlights.',
    heroImage: '/jewelry/bracelet.jpg',
    gallery: ['/jewelry/bracelet.jpg', '/jewelry/hero-ring.jpg', '/jewelry/statement-ring.jpg'],
    detail: [
      'Our noire finish combines layered surface treatment with selective polishing to create dramatic depth and controlled shine.',
      'Contrast lines are cut and refined to sharpen silhouette perception without sacrificing softness in wear zones.',
      'Final inspection confirms consistency of tone and reflection so the piece reads premium under daylight and evening light alike.',
    ],
  },
];

export const journalEntryBySlug = (slug: string) =>
  journalEntries.find((entry) => entry.slug === slug);
