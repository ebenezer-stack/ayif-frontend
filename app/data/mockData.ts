import type { 
  NavLink, 
  Stat, 
  Pillar, 
  Speaker, 
  Session, 
  FooterColumn, 
  TicketTier, 
  PartnerPackage,
  BlogPost,
  ForumEdition
} from '../types'

/* ==========================================================================
   AYIF BENIN 2026 — DONNÉES CENTRALISÉES (MOCK DATA)
   ========================================================================== */

export const EVENT_TARGET_DATE = '2026-11-12T09:00:00+01:00'
export const EVENT_LOCATION = 'Palais des Congrès, Cotonou, Bénin'
export const EVENT_DATES_LABEL = '12 — 14 Novembre 2026'

export const navLinks: NavLink[] = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Programme', href: '/programme' },
  { label: 'Speakers', href: '/speakers' },
  { label: 'Partenaires', href: '/partenaires' },
  { label: 'Éditions', href: '/editions' },
  { label: 'Blog', href: '/blog' },
  { label: 'Billetterie', href: '/reservation' }
]

export const heroStats: Stat[] = [
  { value: '500+', label: 'Participants attendus', detail: 'Délégués, fondateurs et officiels' },
  { value: '25+', label: 'Pays représentés', detail: 'Afrique de l’Ouest, Centrale et diaspora' },
  { value: '50+', label: 'Speakers de haut vol', detail: 'Décideurs publics, investisseurs et fondateurs' },
  { value: '35+', label: 'Fonds & Investisseurs', detail: 'Capital-risque, capital-développement, banques' }
]

export const pillars: Pillar[] = [
  { 
    id: 'investment',
    title: 'Investment', 
    text: 'Des fonds de capital-risque, des banques de développement et des business angels mobilisés pour financer les projets à fort potentiel de croissance.',
    details: 'Mise en relation directe à travers des sessions de pitch privées, des "Deal Rooms" fermées et des rencontres de négociation bilatérales.',
    kpis: ['35+ investisseurs confirmés', '$15M+ en pipeline estimé', '10 startups sélectionnées pour le pitch']
  },
  { 
    id: 'entrepreneurship',
    title: 'Entrepreneurship', 
    text: 'Des fondateurs chevronnés et de jeunes entrepreneurs qui partagent les réalités du terrain et les stratégies concrètes de scalabilité en Afrique.',
    details: 'Retours d’expérience sans filtre sur la gestion de trésorerie, la conformité fiscale, le recrutement de talents locaux et l’expansion régionale.',
    kpis: ['60+ dirigeants de PME', '3 masterclasses stratégiques', 'Mentorat personnalisé']
  },
  { 
    id: 'innovation',
    title: 'Innovation', 
    text: 'Fintech, agritech, logistique, énergies renouvelables : les technologies de pointe adaptées aux défis structurels du continent africain.',
    details: 'Présentation de solutions novatrices développées par des talents africains pour fluidifier les flux de paiement, moderniser les chaînes de valeur agricoles et décarboner les transports.',
    kpis: ['4 pôles d’innovation', '20 démos en direct', 'Espace d’exposition tech']
  },
  { 
    id: 'networking',
    title: 'Networking & B2B', 
    text: 'Un agenda structuré de rendez-vous B2B planifiés en amont pour concrétiser des accords commerciaux et des partenariats durables.',
    details: 'Une plateforme de mise en relation intelligente permettant aux participants de réserver des créneaux de 20 minutes avec les décideurs de leur choix.',
    kpis: ['300+ rendez-vous B2B planifiés', 'Salons VIP exclusifs', 'Soirée de gala économique']
  }
]

export const themes: string[] = [
  'Capital d’Amorçage & Capital-Risque',
  'Intégration Commerciale & ZLECAf',
  'Infrastructures Logistiques & Portuaires',
  'Agritech & Souveraineté Alimentaire',
  'Fintech & Inclusion Financière',
  'Économie Créative & Propriété Intellectuelle'
]

export const speakers: Speaker[] = [
  { 
    id: 'amara-okafor',
    initials: 'AO', 
    name: 'Amara Okafor', 
    role: 'Managing Partner', 
    organization: 'Baobab Ventures', 
    country: 'Nigeria',
    bio: 'Pionnière de l’investissement early-stage en Afrique de l’Ouest, Amara a déployé plus de 45 millions de dollars dans plus de 30 startups technologiques à forte croissance.',
    topics: ['Capital-risque', 'Fintech', 'Gouvernance de startup'],
    featured: true
  },
  { 
    id: 'kossi-agbodjan',
    initials: 'KA', 
    name: 'Kossi Agbodjan', 
    role: 'Chief Executive Officer', 
    organization: 'Sahel Logistics Group', 
    country: 'Bénin',
    bio: 'Entrepreneur chevronné dans les corridors de transport reliant Cotonou au Niger et au Burkina Faso, expert des questions douanières et de corridors de transit.',
    topics: ['Logistique portuaire', 'Commerce transfrontalier', 'ZLECAf'],
    featured: true
  },
  { 
    id: 'fatou-diallo',
    initials: 'FD', 
    name: 'Fatou Diallo', 
    role: 'Directrice des Investissements Privés', 
    organization: 'Ouest Africa Development Bank', 
    country: 'Sénégal',
    bio: 'Plus de 18 ans d’expérience en banque d’affaires et en structuration de financements mixtes pour le tissu des PME industrielles et agroalimentaires ouest-africaines.',
    topics: ['Financement mixte', 'Capital patient', 'Dette souveraine & privée'],
    featured: true
  },
  { 
    id: 'daniel-mensah',
    initials: 'DM', 
    name: 'Daniel Mensah', 
    role: 'Chief Technology Officer', 
    organization: 'Kente Cloud Systems', 
    country: 'Ghana',
    bio: 'Architecte de solutions cloud et systèmes résilients pour banques centrales et opérateurs télécoms, Daniel forme la nouvelle génération d’ingénieurs logiciels africains.',
    topics: ['Infrastructures Cloud', 'Cybersécurité', 'Intelligence Artificielle'],
    featured: true
  },
  { 
    id: 'aissatou-barry',
    initials: 'AB', 
    name: 'Aïssatou Barry', 
    role: 'Conseillère Principale au Commerce Extérieur', 
    organization: 'Ministère de l’Économie et des Finances', 
    country: 'Bénin',
    bio: 'Spécialiste des réformes de l’environnement des affaires, elle pilote les dispositifs d’attractivité des investissements directs étrangers (IDE) à Cotonou.',
    topics: ['Politiques publiques', 'Climat des affaires', 'Partenariats Public-Privé'],
    featured: true
  },
  { 
    id: 'chidi-eze',
    initials: 'CE', 
    name: 'Chidi Eze', 
    role: 'Président', 
    organization: 'NACCIMA Youth Entrepreneurs', 
    country: 'Nigeria',
    bio: 'Leader économique engagé pour l’autonomisation commerciale des jeunes entrepreneurs nigérians et leur expansion sur les marchés francophones de la CEDEAO.',
    topics: ['Jeunesse & Affaires', 'Réseaux patronaux', 'Accords bilatéraux'],
    featured: true
  },
  { 
    id: 'mariam-traore',
    initials: 'MT', 
    name: 'Mariam Traoré', 
    role: 'Fondatrice & Directrice Générale', 
    organization: 'AgriVert Sahel', 
    country: 'Côte d’Ivoire',
    bio: 'Ingénieure agronome devenue entrepreneure à succès, créatrice d’une chaîne logistique solaire qui réduit les pertes post-récoltes de 40%.',
    topics: ['Agritech', 'Énergies renouvelables', 'Entrepreneuriat féminin'],
    featured: false
  },
  { 
    id: 'olivier-hountondji',
    initials: 'OH', 
    name: 'Olivier Hountondji', 
    role: 'Directeur Général', 
    organization: 'Port Autonome de Cotonou Innov', 
    country: 'Bénin',
    bio: 'Expert maritime international, il supervise la modernisation numérique des opérations portuaires et les connexions logistiques terrestres vers le Sahel.',
    topics: ['Économie bleue', 'Logistique portuaire', 'Modernisation douanière'],
    featured: false
  }
]

export const sessions: Session[] = [
  // JOUR 1
  { 
    id: 's1',
    day: 'day1',
    dayLabel: 'Jour 1 — 12 Novembre 2026',
    time: '08:30 — 09:30', 
    type: 'KEYNOTE', 
    title: 'Accueil & Cérémonie d’Ouverture Officielle', 
    description: 'Discours inaugural des autorités béninoises et des délégations patronales. Présentation des enjeux stratégiques de l’édition Cotonou 2026.',
    speakers: 'Aïssatou Barry, Chidi Eze, Représentants institutionnels', 
    place: 'Grand Auditorium Atlantique'
  },
  { 
    id: 's2',
    day: 'day1',
    dayLabel: 'Jour 1 — 12 Novembre 2026',
    time: '10:00 — 11:30', 
    type: 'PANEL', 
    title: 'Plénière : L’Afrique investit en sa jeunesse — De la théorie au déploiement du capital', 
    description: 'Analyse des mécanismes de financement existants et des goulots d’étranglement pour l’accès au capital des entreprises portées par les moins de 35 ans.',
    speakers: 'Fatou Diallo, Amara Okafor, Chidi Eze', 
    place: 'Grand Auditorium Atlantique'
  },
  { 
    id: 's3',
    day: 'day1',
    dayLabel: 'Jour 1 — 12 Novembre 2026',
    time: '14:00 — 16:00', 
    type: 'INVESTMENT SESSION', 
    title: 'Capital Patient & PME à fort impact : Quel modèle de financement adapté ?', 
    description: 'Étude comparative entre capital-risque, dette mezzanine et fonds de garantie pour pérenniser les entreprises manufacturières et agricoles.',
    speakers: 'Fatou Diallo, Mariam Traoré', 
    place: 'Salle Océan'
  },
  { 
    id: 's4',
    day: 'day1',
    dayLabel: 'Jour 1 — 12 Novembre 2026',
    time: '16:30 — 18:30', 
    type: 'NETWORKING B2B', 
    title: 'Session B2B Session 1 : Investisseurs & Fondateurs pré-sélectionnés', 
    description: 'Série de 12 créneaux de 15 minutes en tête-à-tête pour échanger sur les dossiers d’investissement préparés avant le forum.',
    speakers: 'Investisseurs participants & Fondateurs qualifiés', 
    place: 'Espace Deal Room B2B'
  },

  // JOUR 2
  { 
    id: 's5',
    day: 'day2',
    dayLabel: 'Jour 2 — 13 Novembre 2026',
    time: '09:00 — 11:00', 
    type: 'STARTUP PITCH', 
    title: 'AYIF Pitch Competition : 10 startups devant un jury international', 
    description: '10 startups innovantes sélectionnées parmi plus de 300 candidatures présentent leur modèle d’affaires en 5 minutes suivies de 5 minutes de questions.',
    speakers: 'Amara Okafor, Daniel Mensah, Membres du Jury', 
    place: 'Scène Principale Cotonou'
  },
  { 
    id: 's6',
    day: 'day2',
    dayLabel: 'Jour 2 — 13 Novembre 2026',
    time: '11:30 — 13:00', 
    type: 'PANEL', 
    title: 'ZLECAf & Corridors Logistiques : Commercer sans frontières depuis Cotonou', 
    description: 'Exploiter la position stratégique du Port de Cotonou et les accords de libre-échange pour fluidifier les exportations vers le Nigeria et le Sahel.',
    speakers: 'Kossi Agbodjan, Olivier Hountondji, Aïssatou Barry', 
    place: 'Grand Auditorium Atlantique'
  },
  { 
    id: 's7',
    day: 'day2',
    dayLabel: 'Jour 2 — 13 Novembre 2026',
    time: '14:30 — 16:30', 
    type: 'ATELIER', 
    title: 'Atelier Stratégique : Préparer sa levée de fonds en Seed & Série A', 
    description: 'Méthodologie de valorisation, due diligence juridique, pacte d’actionnaires et gestion de la table de capitalisation.',
    speakers: 'Amara Okafor, Avocats d’affaires spécialisés', 
    place: 'Salle Nokoué'
  },
  { 
    id: 's8',
    day: 'day2',
    dayLabel: 'Jour 2 — 13 Novembre 2026',
    time: '19:30 — 22:30', 
    type: 'NETWORKING B2B', 
    title: 'Dîner de Gala Économique & Célébration des Lauréats Pitch', 
    description: 'Soirée de prestige rassemblant 300 personnalités économiques, remise des prix d’investissement et allocutions d’honneur.',
    speakers: 'Invités d’honneur & Lauréats', 
    place: 'Palais des Congrès — Salon d’Honneur'
  },

  // JOUR 3
  { 
    id: 's9',
    day: 'day3',
    dayLabel: 'Jour 3 — 14 Novembre 2026',
    time: '09:30 — 11:30', 
    type: 'PANEL', 
    title: 'Infrastructures Numériques & Fintech : Sécuriser les flux transfrontaliers', 
    description: 'L’interopérabilité bancaire, les plateformes de paiement panafricaines et la protection des données au service des PME.',
    speakers: 'Daniel Mensah, Fatou Diallo', 
    place: 'Grand Auditorium Atlantique'
  },
  { 
    id: 's10',
    day: 'day3',
    dayLabel: 'Jour 3 — 14 Novembre 2026',
    time: '11:45 — 13:00', 
    type: 'KEYNOTE', 
    title: 'Déclaration de Cotonou 2026 & Clôture Officielle', 
    description: 'Synthèse des engagements financiers pris lors du forum, signature des partenariats officiels et annonce de la prochaine édition.',
    speakers: 'Chidi Eze, Comités d’Organisation NACCIMA & Elieson', 
    place: 'Grand Auditorium Atlantique'
  }
]

export const ticketTiers: TicketTier[] = [
  {
    id: 'jeune-entrepreneur',
    name: 'Pass Jeune Entrepreneur / Startup',
    badge: 'Spécial Moins de 35 ans',
    priceUSD: 50,
    priceXOF: 30000,
    description: 'Accès complet pour les créateurs d’entreprises, étudiants et porteurs de projets innovants.',
    features: [
      'Accès aux 3 jours de conférences et panels',
      'Accès à l’espace d’exposition et à la zone démo',
      'Participation à la compétition de pitch (auditeur)',
      'Accès à l’application de networking AYIF',
      'Déjeuners et pauses-café inclus'
    ],
    popular: false,
    available: 120
  },
  {
    id: 'delegue-standard',
    name: 'Pass Délégué Business',
    badge: 'Le Plus Populaire',
    priceUSD: 150,
    priceXOF: 95000,
    description: 'Conçu pour les professionnels, cadres de PME, consultants et représentants institutionnels.',
    features: [
      'Tous les avantages du Pass Jeune Entrepreneur',
      'Accès prioritaire aux ateliers méthodologiques',
      'Inscription à la plateforme de matchmaking B2B',
      'Documentation officielle et livre blanc de l’édition',
      'Badge nominatif avec QR Code interactif'
    ],
    popular: true,
    available: 200
  },
  {
    id: 'vip-b2b',
    name: 'Pass VIP & Partenariat',
    badge: 'Réseautage Exclusif',
    priceUSD: 350,
    priceXOF: 220000,
    description: 'Pour les dirigeants d’entreprises, directeurs d’institutions et partenaires stratégiques.',
    features: [
      'Tous les avantages du Pass Délégué Business',
      'Accès aux Salons VIP et espaces de travail privés',
      'Créneaux garantis de mise en relation B2B personnalisée',
      'Invitation au Dîner de Gala Économique du 13 Novembre',
      'Service de conciergerie et navettes aéroport Cotonou'
    ],
    popular: false,
    available: 60
  },
  {
    id: 'investisseur',
    name: 'Pass Investisseur / Fonds',
    badge: 'Deal Room & Projets Qualifiés',
    priceUSD: 600,
    priceXOF: 380000,
    description: 'Réservé aux fonds de capital-risque, banques de développement, business angels et institutions financières.',
    features: [
      'Accès illimité VIP à l’ensemble des événements',
      'Accès exclusif à la Deal Room fermée et aux fiches d’investissement',
      'Droit de vote / membre consultatif lors du Pitch Competition',
      '2 invitations pour le Dîner de Gala Économique',
      'Listing prioritaire dans l’annuaire des investisseurs AYIF'
    ],
    popular: false,
    available: 30
  }
]

export const partnerPackages: PartnerPackage[] = [
  {
    id: 'platine',
    tier: 'Partenaire Platine',
    badge: 'Exclusivité Sectorielle',
    priceUSD: '$20,000',
    priceXOF: '12 500 000 FCFA',
    summary: 'Positionnement de premier plan, association à la cérémonie d’ouverture et visibilité institutionnelle majeure.',
    benefits: [
      'Prise de parole lors de la cérémonie d’ouverture officielle',
      'Stand d’exposition premium de 24m² dans le hall principal',
      '8 Pass VIP & 1 table dédiée au Dîner de Gala',
      'Logo sur tous les supports visuels, bannières et livret officiel',
      'Diffusion d’un spot vidéo avant chaque plénière'
    ]
  },
  {
    id: 'or',
    tier: 'Partenaire Or',
    badge: 'Forte Visibilité',
    priceUSD: '$12,000',
    priceXOF: '7 500 000 FCFA',
    summary: 'Association à un panel thématique clé et exposition ciblée auprès des décideurs économiques.',
    benefits: [
      'Modération ou participation à un panel stratégique',
      'Stand d’exposition de 12m²',
      '5 Pass VIP & invitations au Dîner de Gala',
      'Présence sur le site web et les communiqués de presse',
      'Insertion d’un encart promotionnel dans le dossier participants'
    ]
  },
  {
    id: 'argent',
    tier: 'Partenaire Argent',
    badge: 'Impact B2B',
    priceUSD: '$6,000',
    priceXOF: '3 800 000 FCFA',
    summary: 'Idéal pour les entreprises souhaitant affirmer leur ancrage régional et développer leur réseau B2B.',
    benefits: [
      'Stand modulaire de 9m²',
      '3 Pass VIP & 2 Pass Délégués',
      'Logo sur le mur officiel des sponsors',
      'Mention dans l’application mobile AYIF'
    ]
  },
  {
    id: 'media',
    tier: 'Partenaire Média & Presse',
    badge: 'Couverture Éditoriale',
    priceUSD: 'Partenariat Échange',
    priceXOF: 'Partenariat Échange',
    summary: 'Pour les chaînes d’information, magazines économiques et plateformes médias panafricaines.',
    benefits: [
      'Espace presse réservé et accès aux interviews speakers',
      'Accès complet aux 3 jours de travaux',
      'Logo sur l’ensemble de la communication officielle'
    ]
  }
]

export const nigeriaStats: Stat[] = [
  { value: '420', label: 'Participants', detail: 'À Abuja pour la première édition' },
  { value: '14', label: 'Pays représentés', detail: 'CEDEAO et Afrique Centrale' },
  { value: '$8M+', label: 'Deals négociés', detail: 'Discussions enclenchées lors des sessions B2B' }
]

export const nigeriaHighlights = [
  {
    title: 'Une première historique à Abuja',
    description: 'En 2025, la capitale fédérale du Nigeria a accueilli la session inaugurale d’AYIF sous l’égide de NACCIMA Youth Entrepreneurs, posant les fondations d’un réseau panafricain d’investissement.'
  },
  {
    title: '10 Startups finalistes financées',
    description: 'La compétition de pitch a permis à 3 lauréats de mobiliser un total de 450 000 dollars de financements directs auprès de syndicats de business angels nigérians et ghanéens.'
  },
  {
    title: 'Passerelle vers le monde francophone',
    description: 'Le succès d’Abuja a conduit les organisateurs à choisir Cotonou pour 2026, matérialisant l’intégration économique entre la première puissance d’Afrique de l’Ouest et l’espace UEMOA.'
  }
]

export const sponsorsCategories = {
  institutionnels: [
    'Ministère de l’Économie et des Finances du Bénin',
    'Chambre de Commerce et d’Industrie du Bénin (CCI Bénin)',
    'NACCIMA Nigeria',
    'Ouest Africa Development Bank (BOAD)'
  ],
  investisseurs: [
    'Baobab Ventures',
    'Sahel Capital Partners',
    'Ecobank Investment Fund',
    'African Venture Network'
  ],
  technologie: [
    'Kente Cloud Systems',
    'Sahel Logistics Group',
    'FinTech West Africa',
    'Cotonou Digital Hub'
  ],
  medias: [
    'Afrik Business Media',
    'Radio Atlantique',
    'West Africa Financial Times',
    'Bénin Éco Magazine'
  ]
}

export const sponsors: string[] = [
  'Ministère de l’Économie du Bénin',
  'Ouest Africa Development Bank',
  'NACCIMA Youth Entrepreneurs',
  'Baobab Ventures',
  'Kente Cloud Systems',
  'Sahel Logistics',
  'Chambre de Commerce du Bénin',
  'Afrik Business Media'
]

export const footerCols: FooterColumn[] = [
  {
    title: 'Le Forum',
    links: [
      { label: 'À propos de l’AYIF', href: '/a-propos' },
      { label: 'Pourquoi Cotonou 2026', href: '/a-propos#cotonou' },
      { label: 'Programme Détaillé', href: '/programme' },
      { label: 'Intervenants & Experts', href: '/speakers' }
    ]
  },
  {
    title: 'Participer',
    links: [
      { label: 'Réserver un pass', href: '/reservation' },
      { label: 'Devenir Partenaire / Sponsor', href: '/partenaires' },
      { label: 'Appel aux Startups (Pitch)', href: '/programme#pitch' },
      { label: 'Espace Presse', href: '/partenaires#presse' }
    ]
  },
  {
    title: 'Ressources & Réseau',
    links: [
      { label: 'Actualités & Analyses', href: '/blog' },
      { label: 'Toutes les Éditions', href: '/editions' },
      { label: 'Organisateurs & Mentions', href: '/a-propos#organisateurs' },
      { label: 'Conditions & FAQ', href: '/reservation#faq' }
    ]
  }
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'capital-patient-afrique-2026',
    title: 'Capital Patient : Pourquoi les PME africaines ont besoin d’un nouveau modèle d’investissement',
    excerpt: 'Face aux limites du capital-risque classique à horizon 5 ans, découvrez pourquoi les instruments de dette mezzanine et de capital patient s’imposent comme la clé de voûte des champions industriels africains.',
    category: 'Investissement',
    author: 'Fatou Diallo',
    authorRole: 'Directrice des Investissements Privés, Ouest Africa Development Bank',
    date: '14 Octobre 2026',
    readingTime: 6,
    cover: 'navy',
    image: '/images/blog/capital-patient.jpg',
    featured: true,
    content: [
      {
        heading: 'L’inadéquation du modèle de capital-risque hyper-croissance',
        paragraphs: [
          'Depuis une décennie, les écosystèmes entrepreneuriaux d’Afrique subsaharienne ont importé massivement la grille d’analyse de la Silicon Valley : croissance exponentielle du chiffre d’affaires, quête effrénée de valorisations stratosphériques et horizon de sortie rigide à 5 ans.',
          'Pourtant, dans des économies où les infrastructures physiques, la chaîne logistique et les contraintes de devises dictent le rythme de l’activité, ce calendrier se révèle souvent destructeur de valeur pour les entreprises productives.'
        ],
        quote: 'La véritable valeur économique en Afrique ne se construit pas en 36 mois : elle exige un capital endurant, aligné sur les réalités de nos filières réelles.'
      },
      {
        heading: 'Vers une diversification des véhicules financiers',
        paragraphs: [
          'Le capital patient n’est pas une charité : c’est un investissement structuré avec des rendements indexés sur la performance d’exploitation réelle plutôt que sur une revente hypothétique à un tiers.',
          'À Cotonou en novembre 2026, l’AYIF consacrera une plénière et deux ateliers spécialisés à la modélisation de ces instruments alternatifs (royalties, obligations convertibles à coupon différé, fonds de garantie souverains).'
        ]
      }
    ]
  },
  {
    slug: 'pourquoi-cotonou-porte-entree-afrique-ouest',
    title: 'Pourquoi Cotonou s’impose comme la porte d’entrée stratégique des affaires en Afrique de l’Ouest',
    excerpt: 'Corridors vers le Sahel, modernisation portuaire historique et proximité immédiate du Nigeria : analyse des atouts macroéconomiques qui font du Bénin un hub incontournable.',
    category: 'Cotonou 2026',
    author: 'Kossi Agbodjan',
    authorRole: 'CEO, Sahel Logistics Group',
    date: '08 Octobre 2026',
    readingTime: 5,
    cover: 'blue',
    image: '/images/blog/cotonou-port.jpg',
    featured: false,
    content: [
      {
        heading: 'Un corridor de transit vers plus de 300 millions de consommateurs',
        paragraphs: [
          'À seulement 120 kilomètres de Lagos, mégapole de 22 millions d’habitants et première place financière ouest-africaine, Cotonou bénéficie d’un positionnement géographique sans équivalent.',
          'Le Port Autonome de Cotonou traite aujourd’hui le transit de marchandises vitales pour le Niger, le Burkina Faso et le Mali, consolidant un corridor logistique à très haute valeur ajoutée.'
        ]
      },
      {
        heading: 'Stabilité monétaire et digitalisation des formalités',
        paragraphs: [
          'Avec la mise en place du guichet unique de création d’entreprise en ligne en 2 heures et l’obtention de l’e-Visa sous 48 heures, le Bénin démontre sa volonté politique de lever tous les obstacles à l’investissement direct étranger.'
        ]
      }
    ]
  },
  {
    slug: 'guide-reussir-pitch-investisseurs-ayif',
    title: '10 règles d’or pour réussir son pitch devant les investisseurs à l’AYIF 2026',
    excerpt: 'Valorisation, gestion du cash-burn, unit economics et pacte d’actionnaires : ce que les 35 fonds réunis à Cotonou scruteront avec la plus grande attention.',
    category: 'Entrepreneuriat',
    author: 'Amara Okafor',
    authorRole: 'Managing Partner, Baobab Ventures',
    date: '28 Septembre 2026',
    readingTime: 7,
    cover: 'sky',
    image: '/images/blog/startup-pitch.jpg',
    featured: false,
    content: [
      {
        heading: 'Clarté radicale sur vos Unit Economics',
        paragraphs: [
          'Les investisseurs expérimentés n’ont que faire de présentations fleuves remplies de jargon technique. La première question restera toujours : combien vous coûte l’acquisition d’un client, et combien ce client génère-t-il sur sa durée de vie ?',
          'Montrez une maîtrise rigoureuse de votre marge brute et de votre cycle de conversion de trésorerie.'
        ],
        quote: 'Une startup rentable ou proche de l’équilibre opérationnel aura toujours dix fois plus de levier de négociation qu’une entreprise dépendante de sa prochaine injection de liquidités.'
      },
      {
        heading: 'Présenter une équipe complémentaire et résiliente',
        paragraphs: [
          'En Afrique, le risque d’exécution prime sur le risque d’idée. Les jurys de l’AYIF Pitch Competition évalueront en priorité la cohésion de vos co-fondateurs et votre capacité d’adaptation face aux imprévus réglementaires ou monétaires.'
        ]
      }
    ]
  },
  {
    slug: 'zlecaf-fintech-commerce-transfrontalier',
    title: 'ZLECAf et Fintechs : Comment les passerelles numériques font tomber les barrières douanières',
    excerpt: 'L’interopérabilité des systèmes de paiement instantané panafricains révolutionne le commerce transfrontalier entre marchés anglophones et francophones.',
    category: 'Innovation',
    author: 'Daniel Mensah',
    authorRole: 'CTO, Kente Cloud Systems',
    date: '19 Septembre 2026',
    readingTime: 5,
    cover: 'navy',
    image: '/images/blog/fintech-zlecaf.jpg',
    featured: false,
    content: [
      {
        heading: 'La fin du calvaire des conversions de devises',
        paragraphs: [
          'Pendant des décennies, un virement entre Cotonou et Lagos transitait parfois par des banques correspondantes à New York ou Paris, engendrant des délais de plusieurs jours et des frais bancaires prohibitifs.',
          'Grâce au système PAPSS (Pan-African Payment and Settlement System) et aux API fintechs émergentes, les transactions s’opèrent désormais en quelques secondes dans les monnaies locales respectives.'
        ]
      }
    ]
  }
]

export const forumEditions: ForumEdition[] = [
  {
    slug: 'abuja-2025',
    year: 2025,
    editionNumber: '1ère Édition Inaugurale',
    title: 'AYIF Nigeria 2025 · Abuja',
    tagline: 'L’Envol du Capital Jeunesse & l’Intégration Ouest-Africaine',
    theme: 'Connecter le capital institutionnel à la nouvelle vague entrepreneuriale panafricaine',
    country: 'Nigeria',
    city: 'Abuja',
    venue: 'Abuja International Conference Centre (AICC)',
    dates: '20 — 22 Novembre 2025',
    status: 'past',
    statusLabel: 'Édition Terminée',
    coverImage: '/images/editions/abuja-2025.jpg',
    leadParagraph: 'Organisée sous l’égide de NACCIMA Youth Entrepreneurs, la première édition de l’Africa Youth Investment Forum a posé les fondations d’un réseau d’investissement indépendant entre l’Afrique anglophone et francophone.',
    description: [
      'Inaugurée par les hauts représentants du Ministère fédéral de l’Industrie, du Commerce et de l’Investissement du Nigeria, cette édition fondatrice a réuni 420 délégués rigoureusement sélectionnés, 18 fonds d’investissement et des délégations de 14 pays d’Afrique de l’Ouest et Centrale.',
      'Au-delà des conférences plénières, l’innovation majeure d’Abuja a résidé dans son protocole de Deal Room fermée : des sessions confidentielles d’intermédiation directe entre porteurs de projets à fort impact et investisseurs en capital-développement.',
      'Les résolutions adoptées ont scellé la décision d’inscrire l’AYIF dans une logique tournante transfrontalière, faisant de Cotonou au Bénin la destination naturelle pour consolider l’axe Nigeria-UEMOA.'
    ],
    stats: [
      { value: '420', label: 'Participants accrédités', detail: 'Investisseurs, fondateurs et officiels gouvernementaux' },
      { value: '14', label: 'Pays représentés', detail: 'CEDEAO, CEMAC et diaspora d’Europe et d’Amérique du Nord' },
      { value: '$8.4M', label: 'Engagements Deal Room', detail: 'Volume total des intentions d’investissement signées' },
      { value: '18', label: 'Fonds & Bailleurs', detail: 'Fonds de capital-risque, banques de développement et business angels' },
      { value: '10', label: 'Startups en finale pitch', detail: 'Sélectionnées sur plus de 240 dossiers reçus' },
      { value: '3', label: 'Lauréats financés', detail: 'Bénéficiaires de tickets d’amorçage immédiats' }
    ],
    highlights: [
      {
        title: 'Création du Protocole de Deal Room Fermée',
        description: 'Mise en place d’un dispositif confidentiel d’audition directe de 30 minutes par startup, devant un collège de trois fonds d’investissement.',
        outcome: '$8.4M d’intentions de financement formalisées sous NDA.'
      },
      {
        title: 'Accord de Coopération NACCIMA & Chambres Francophones',
        description: 'Signature d’un mémorandum d’entente pour fluidifier l’accès des jeunes entrepreneurs nigérians aux marchés de l’Afrique de l’Ouest francophone.',
        outcome: 'Création d’un bureau de liaison permanent pour les PME innovantes.'
      },
      {
        title: 'Grande Finale de la Pitch Competition 2025',
        description: 'Audition publique de 10 jeunes entreprises à forte intensité technologique devant une salle comble de 400 délégués.',
        outcome: '$450 000 de capitaux mobilisés en séance par les business angels.'
      }
    ],
    keySpeakers: [
      {
        name: 'Babatunde Adeleke',
        role: 'Président National',
        organization: 'NACCIMA Youth Entrepreneurs',
        country: 'Nigeria',
        topic: 'Politiques d’incitation au capital d’amorçage pour les jeunes industriels'
      },
      {
        name: 'Amina Bello-Kano',
        role: 'Managing Partner',
        organization: 'Northern Star Capital',
        country: 'Nigeria',
        topic: 'Structurer un tour de table réussi dans un contexte de volatilité monétaire'
      },
      {
        name: 'Jean-Paul Kamga',
        role: 'Directeur Afrique Centrale',
        organization: 'Central Invest Partners',
        country: 'Cameroun',
        topic: 'Corridors financiers entre la zone CEMAC et l’Afrique de l’Ouest'
      },
      {
        name: 'Chidinma Okonkwo',
        role: 'Vice-Présidente Trade Finance',
        organization: 'Pan-African Trade Bank',
        country: 'Ghana',
        topic: 'Instruments de garantie de crédit pour les startups exportatrices'
      }
    ],
    pitchWinners: [
      {
        rank: '1er Prix (Vainqueur)',
        startup: 'AgroPay Nigeria',
        sector: 'Fintech & Agritech',
        founder: 'Tunde Adebayo',
        prize: '$250 000 (Equity + Accompagnement technique)'
      },
      {
        rank: '2ème Prix',
        startup: 'AfriCold Logistics',
        sector: 'Chaîne du froid solaire & Logistique',
        founder: 'Fatima Garba',
        prize: '$120 000 (Financement mixte)'
      },
      {
        rank: '3ème Prix',
        startup: 'KaziHealth Telemed',
        sector: 'Santé numérique & Téléconsultation',
        founder: 'Emmanuel Osei',
        prize: '$80 000 (Ticket d’amorçage syndiqué)'
      }
    ],
    keyPartners: [
      'NACCIMA Youth Entrepreneurs (Hôte)',
      'Bank of Industry (BoI Nigeria)',
      'Federal Ministry of Industry, Trade and Investment',
      'ECOWAS Youth Council',
      'Lagos Angel Network',
      'West Africa Venture Association'
    ],
    gallery: [
      {
        title: 'Session Plénière d’Ouverture',
        caption: 'Discours inaugural devant les 420 délégués réunis à l’AICC Abuja.',
        image: '/images/editions/abuja-2025.jpg'
      },
      {
        title: 'Deal Room en Négociations Directes',
        caption: 'Rencontres confidentielles entre porteurs de projets et comités d’investissement.',
        image: '/images/blog/capital-patient.jpg'
      },
      {
        title: 'Scène de la Pitch Competition',
        caption: 'Présentation des 10 startups finalistes devant le jury panafricain.',
        image: '/images/blog/startup-pitch.jpg'
      }
    ],
    reportTitle: 'Rapport d’Impact & Livre Blanc Officiel — Abuja 2025',
    reportDownloadText: 'Télécharger le Bilan d’Impact Complet (PDF, 48 pages · 4.2 Mo)'
  },
  {
    slug: 'cotonou-2026',
    year: 2026,
    editionNumber: '2ème Édition Phare',
    title: 'AYIF Bénin 2026 · Cotonou',
    tagline: 'Accélérer le Financement Productif de la Jeunesse Africaine',
    theme: 'Changement d’échelle, synergies francophones-anglophones et mobilisation des capitaux patients',
    country: 'Bénin',
    city: 'Cotonou',
    venue: 'Palais des Congrès de Cotonou',
    dates: '12 — 14 Novembre 2026',
    status: 'current',
    statusLabel: 'Édition Actuelle · Inscriptions Ouvertes',
    coverImage: '/images/editions/cotonou-2026.jpg',
    leadParagraph: 'Deuxième étape majeure de la trajectoire panafricaine, Cotonou 2026 concrétise le pont économique stratégique entre le Nigeria et l’espace UEMOA au cœur d’un hub logistique et portuaire en pleine transformation.',
    description: [
      'Fort du succès retentissant d’Abuja, l’AYIF franchit un cap décisif en s’installant au Palais des Congrès de Cotonou. Cette édition amplifie l’ambition initiale en accueillant plus de 500 décideurs, 35 fonds d’investissement et 50 experts internationaux sur trois journées intensives.',
      'Au programme : des plénières de cadrage macroéconomique, la plus grande Deal Room d’Afrique de l’Ouest dédiée aux jeunes entreprises, un concours de pitch international doté de $500 000, et des sessions de networking B2B ciblées.',
      'L’édition met un accent prioritaire sur la mise en œuvre concrète de la ZLECAf, la numérisation des corridors douaniers, les instruments de dette mezzanine et la transition énergétique durable.'
    ],
    stats: [
      { value: '500+', label: 'Délégués attendus', detail: 'Investisseurs, fondateurs, ministres et directeurs généraux' },
      { value: '25+', label: 'Pays représentés', detail: 'Afrique de l’Ouest, Centrale, Australe et diaspora' },
      { value: '$25M+', label: 'Objectif Deal Room', detail: 'Volume de financements ciblés lors des sessions d’intermédiation' },
      { value: '35+', label: 'Fonds & Banques', detail: 'Fonds d’impact, capital-risque, institutions de financement de développement' },
      { value: '50+', label: 'Speakers internationaux', detail: 'Dirigeants d’entreprises, économistes et innovateurs de premier plan' },
      { value: '300+', label: 'Créneaux B2B qualifiés', detail: 'Rendez-vous individuels pré-programmés sur application mobile' }
    ],
    highlights: [
      {
        title: 'Deal Room Bilatérale Bénin-Nigeria-CEDEAO',
        description: 'Espace hautement sécurisé dédié aux négociations de levées de fonds (Seed, Série A et dette) avec les principaux gestionnaires de fonds du continent.',
        outcome: '300 créneaux de 30 minutes planifiés pour des tours de table ciblés.'
      },
      {
        title: 'Grande Compétition Panafricaine de Pitch',
        description: 'Audition en direct des 10 meilleures startups africaines présélectionnées parmi plus de 300 candidatures sous-régionales.',
        outcome: 'Dotation globale de $500 000 en capitaux d’investissement et mentorat accéléré.'
      },
      {
        title: 'Focus Spécial ZLECAf & Corridors Logistiques',
        description: 'Session ministérielle et ateliers techniques sur les exemptions tarifaires, le transit portuaire Cotonou-Lagos et le paiement transfrontalier PAPSS.',
        outcome: 'Remise d’un plaidoyer conjoint des jeunes industriels aux instances régionales.'
      },
      {
        title: 'Dîner de Gala Économique & Distinction des Champions',
        description: 'Soirée de prestige rassemblant 300 dirigeants pour célébrer les lauréats et signer des partenariats industriels majeurs.',
        outcome: 'Attribution des Trophées AYIF Excellence 2026.'
      }
    ],
    keySpeakers: [
      {
        name: 'Amara Okafor',
        role: 'Managing Partner',
        organization: 'Baobab Ventures',
        country: 'Nigeria',
        topic: 'Ce que les fonds de capital-risque recherchent chez les champions émergents'
      },
      {
        name: 'Daniel Mensah',
        role: 'Directeur Général & CTO',
        organization: 'Kente Cloud Systems',
        country: 'Ghana',
        topic: 'Infrastructures cloud souveraines et interopérabilité des paiements africains'
      },
      {
        name: 'Fatou Diallo',
        role: 'Directrice des Investissements Privés',
        organization: 'Ouest Africa Development Bank',
        country: 'Sénégal',
        topic: 'Le capital patient comme moteur du redéploiement industriel régional'
      },
      {
        name: 'Kossi Agbodjan',
        role: 'CEO',
        organization: 'Sahel Logistics Group',
        country: 'Bénin',
        topic: 'Optimisation de la chaîne logistique portuaire et pénétration des marchés sahéliens'
      }
    ],
    pitchWinners: [
      {
        rank: 'Appel Ouvert',
        startup: 'Sélection des 10 Finalistes en cours',
        sector: 'Fintech, Agri-Logistique, Énergie & Santé',
        founder: 'Candidatures clôturées le 15 Octobre 2026',
        prize: '$500 000 de dotation globale répartie entre les 3 meilleurs projets'
      }
    ],
    keyPartners: [
      'Ministère de l’Économie et des Finances du Bénin',
      'Chambre de Commerce et d’Industrie du Bénin (CCI Bénin)',
      'NACCIMA Youth Entrepreneurs Nigeria',
      'Ouest Africa Development Bank (BOAD)',
      'Ecobank Investment Fund',
      'Baobab Ventures'
    ],
    gallery: [
      {
        title: 'Grand Hall du Palais des Congrès',
        caption: 'Espace principal d’accueil des 500 délégués internationaux à Cotonou.',
        image: '/images/editions/cotonou-2026.jpg'
      },
      {
        title: 'Hub Portuaire et Échange Régional',
        caption: 'Cotonou, carrefour logistique incontournable entre l’Afrique francophone et le Nigeria.',
        image: '/images/blog/cotonou-port.jpg'
      },
      {
        title: 'Ateliers Techniques et Salles de Commission',
        caption: 'Salles dédiées aux négociations d’investissement et masterclasses sectorielles.',
        image: '/images/blog/fintech-zlecaf.jpg'
      }
    ],
    reportTitle: 'Dossier Stratégique & Guide de l’Investisseur — Cotonou 2026',
    reportDownloadText: 'Télécharger le Dossier Officiel & Guide Pratique (PDF, 32 pages · 3.5 Mo)'
  },
  {
    slug: 'dakar-2027',
    year: 2027,
    editionNumber: '3ème Édition Prospective',
    title: 'AYIF Sénégal 2027 · Dakar',
    tagline: 'L’Ère de l’Économie Bleue, des Technologies Vertes & de la Souveraineté Industrielle',
    theme: 'Souveraineté productive, transition énergétique et capital-croissance à l’horizon 2030',
    country: 'Sénégal',
    city: 'Dakar / Diamniadio',
    venue: 'Centre International de Conférences Abdou Diouf (CICAD)',
    dates: 'Novembre 2027 (Dates officielles à venir)',
    status: 'upcoming',
    statusLabel: 'Prochaine Édition en Préparation',
    coverImage: '/images/editions/dakar-2027.jpg',
    leadParagraph: 'Cap sur l’Afrique de l’Ouest atlantique : Dakar 2027 consacrera le rôle pionnier du Sénégal dans l’économie verte, la valorisation des ressources maritimes et les hubs technologiques de nouvelle génération.',
    description: [
      'Pour sa troisième édition, l’Africa Youth Investment Forum s’implantera au prestigieux Centre International de Conférences Abdou Diouf (CICAD) à Diamniadio, pôle urbain et technologique ultra-moderne aux portes de Dakar.',
      'Cette édition prospective abordera les enjeux capitaux des décennies à venir : la transition énergétique, les technologies de valorisation marine, la souveraineté alimentaire et le développement d’infrastructures de cloud computing à faible empreinte carbone.',
      'Un accent sans précédent sera porté sur la mobilisation active des diasporas scientifiques et financières d’Europe et d’Amérique du Nord pour injecter du capital productif de long terme dans les industries locales.'
    ],
    stats: [
      { value: '800+', label: 'Délégués ciblés', detail: 'Investisseurs mondiaux, leaders technologiques et délégations ministérielles' },
      { value: '30+', label: 'Pays africains et mondiaux', detail: 'Une audience transcontinentale connectée' },
      { value: '$50M+', label: 'Enveloppe prévisionnelle', detail: 'Capitaux ciblés pour les industries vertes et logistiques' },
      { value: '50+', label: 'Fonds souverains & institutionnels', detail: 'Bailleurs multilatéraux et capitaux institutionnels privés' },
      { value: '15', label: 'Startups finalistes CleanTech & Agri', detail: 'Compétition axée sur la décarbonation et l’agri-tech' }
    ],
    highlights: [
      {
        title: 'Sommet Panafricain de l’Économie Bleue & Énergie Verte',
        description: 'Focus exclusif sur les technologies de préservation marine, l’aquaculture industrielle et les énergies solaires et éoliennes de nouvelle génération.',
        outcome: 'Création d’un consortium d’investisseurs dédié aux projets à impact écologique.'
      },
      {
        title: 'Pavillon Spécial Diaspora & Investissements Circulaires',
        description: 'Dispositif spécifique d’incitation fiscale et de co-investissement pour mobiliser l’épargne de la diaspora vers des projets productifs au Sénégal.',
        outcome: 'Signature d’accords de co-garantie avec des banques régionales.'
      },
      {
        title: 'Deal Room Diamniadio Tech City',
        description: 'Mise en réseau d’entrepreneurs technologiques d’Afrique de l’Ouest avec des investisseurs en capital-développement de la Silicon Valley, d’Europe et des pays du Golfe.',
        outcome: 'Soutien aux champions technologiques visant une expansion continentale.'
      }
    ],
    keySpeakers: [
      {
        name: 'Ousmane Sarr',
        role: 'Haut Représentant aux Grands Investissements',
        organization: 'Délégation Générale aux Pôles Urbains',
        country: 'Sénégal',
        topic: 'Diamniadio : genèse d’un pôle d’affaires panafricain pour le 21ème siècle'
      },
      {
        name: 'Mariama Thiam',
        role: 'Présidente Fondatrice',
        organization: 'Atlantic Blue Tech Foundation',
        country: 'Sénégal',
        topic: 'Financer la révolution de l’économie maritime et des protéines durables'
      },
      {
        name: 'Cheikh Ndiaye',
        role: 'Directeur Transition Énergétique',
        organization: 'West Africa Green Power',
        country: 'Côte d’Ivoire',
        topic: 'Souveraineté énergétique : intégration des énergies renouvelables dans les réseaux nationaux'
      }
    ],
    pitchWinners: [
      {
        rank: 'Appel 2027',
        startup: 'Ouverture des candidatures au premier trimestre 2027',
        sector: 'CleanTech, Blue Economy, Agro-industrie & IA Industrielle',
        founder: 'Processus d’inscription à venir',
        prize: '$750 000 de dotation totale prévisionnelle'
      }
    ],
    keyPartners: [
      'APIX Sénégal (Agence pour la Promotion des Investissements)',
      'Chambre de Commerce, d’Industrie et d’Agriculture de Dakar',
      'Banque Ouest-Africaine de Développement (BOAD)',
      'Union Africaine — Division Jeunesse & Entrepreneuriat',
      'Consortium des Bailleurs Européens et Africains'
    ],
    gallery: [
      {
        title: 'Auditorium International du CICAD Diamniadio',
        caption: 'Complexe architectural futuriste accueillant les plénières d’AYIF 2027.',
        image: '/images/editions/dakar-2027.jpg'
      },
      {
        title: 'Façade Maritime et Économie Bleue',
        caption: 'Dakar, carrefour atlantique et porte océanique vers les marchés mondiaux.',
        image: '/images/blog/capital-patient.jpg'
      },
      {
        title: 'Hubs Technologiques et Espaces B2B',
        caption: 'Espaces d’intermédiation financière ultra-connectés prévus pour l’édition 2027.',
        image: '/images/blog/startup-pitch.jpg'
      }
    ],
    reportTitle: 'Document d’Orientation Stratégique — Vision Dakar 2027',
    reportDownloadText: 'Télécharger la Note Préliminaire & Opportunités (PDF, 24 pages · 2.8 Mo)'
  }
]

