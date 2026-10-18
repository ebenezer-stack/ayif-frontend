/* ==========================================================================
   AYIF BENIN 2026 — TYPES TYPESCRIPT GLOBAUX
   ========================================================================== */

export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
  detail?: string
}

export interface Pillar {
  id?: string
  title: string
  text: string
  details?: string
  kpis?: string[]
}

export interface Speaker {
  id: string
  initials: string
  name: string
  role: string
  organization: string
  country: string
  bio: string
  topics: string[]
  featured?: boolean
}

export interface Session {
  id: string
  day: 'day1' | 'day2' | 'day3'
  dayLabel: string
  time: string
  type: 'KEYNOTE' | 'PANEL' | 'STARTUP PITCH' | 'INVESTMENT SESSION' | 'NETWORKING B2B' | 'ATELIER'
  title: string
  description: string
  speakers: string
  place: string
  badgeColor?: string
}

export interface FooterColumn {
  title: string
  links: NavLink[]
}

export interface TicketTier {
  id: string
  name: string
  badge?: string
  priceUSD: number
  priceXOF: number
  description: string
  features: string[]
  popular?: boolean
  available: number
}

export interface PartnerPackage {
  id: string
  tier: string
  priceUSD: string
  priceXOF: string
  badge?: string
  summary: string
  benefits: string[]
}

export interface ReservationForm {
  ticketId: string
  quantity: number
  currency: 'USD' | 'XOF'
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  organization: string
  role: string
  interests: string[]
  paymentMethod: 'card' | 'momo' | 'bank'
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: 'Investissement' | 'Entrepreneuriat' | 'Cotonou 2026' | 'Innovation' | 'Coulisses'
  author: string
  authorRole: string
  date: string        // ISO, ex: 2026-09-14
  readingTime: number // minutes
  cover: 'navy' | 'blue' | 'sky'
  image?: string
  featured?: boolean
  content: { heading?: string; paragraphs: string[]; quote?: string }[]
}

export interface EditionStat {
  value: string
  label: string
  detail?: string
}

export interface EditionSpeaker {
  name: string
  role: string
  organization: string
  country: string
  topic?: string
}

export interface EditionHighlight {
  title: string
  description: string
  outcome?: string
}

export interface EditionGalleryItem {
  title: string
  caption: string
  image: string
}

export interface ForumEdition {
  slug: string
  year: number
  editionNumber: string
  title: string
  tagline: string
  theme: string
  country: string
  city: string
  venue: string
  dates: string
  status: 'past' | 'current' | 'upcoming'
  statusLabel: string
  coverImage: string
  leadParagraph: string
  description: string[]
  stats: EditionStat[]
  highlights: EditionHighlight[]
  keySpeakers: EditionSpeaker[]
  pitchWinners?: { rank: string; startup: string; sector: string; founder: string; prize: string }[]
  keyPartners: string[]
  gallery: EditionGalleryItem[]
  reportTitle?: string
  reportDownloadText?: string
}
