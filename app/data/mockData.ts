import type { 
  NavLink, 
  Stat, 
  Pillar, 
  Speaker, 
  Session, 
  GeneralProgramDay,
  FooterColumn, 
  TicketTier, 
  PartnerPackage,
  BlogPost,
  ForumEdition
} from '../types'

/* ==========================================================================
   AYIF BENIN 2026 — DONNÉES CENTRALISÉES (MOCK DATA)
   ========================================================================== */

export const EVENT_TARGET_DATE = '2026-12-03T08:30:00+01:00'
export const EVENT_LOCATION = 'Palais des Congrès, Cotonou, Bénin'
export const EVENT_DATES_LABEL = '03 au 05 Décembre 2026'

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
    featured: true,
    editionYear: 2025
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
    featured: true,
    editionYear: 2025
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
    featured: true,
    editionYear: 2025
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
    featured: true,
    editionYear: 2025
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
    featured: true,
    editionYear: 2025
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
    featured: true,
    editionYear: 2025
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
    featured: false,
    editionYear: 2025
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
    featured: false,
    editionYear: 2025
  }
]

export const generalProgram: GeneralProgramDay[] = [
  {
    dayNumber: 1,
    dayId: 'day1',
    dateLabel: 'Jeudi 03 Décembre 2026',
    actionWord: 'RASSEMBLER',
    dayTitle: 'L’Afrique se réunit',
    theme: 'JOUR 1 — RASSEMBLER : L’Afrique se réunit',
    description: 'La première journée est consacrée à l’accueil des participants, visite du village d’exhibition, à l’ouverture officielle et à la création de liens entre les acteurs de l’écosystème. La cérémonie mettra à l’honneur les pays africains, avec les drapeaux et les hymnes nationaux du Bénin et du Nigéria.',
    bulletPoints: [
      'Panel : leadership, gouvernance et entrepreneuriat des jeunes en Afrique ;',
      'Petit-déjeuner et réseautage entre entrepreneurs, investisseurs, institutions et partenaires ;',
      'Panel : intégration régionale et corridors transfrontaliers Bénin–Nigéria ;',
      'Visite de la Zone industrielle de Glo-Djigbé (GDIZ).'
    ],
    objective: 'créer une communauté, favoriser les premiers contacts et faire émerger des pistes de collaboration.'
  },
  {
    dayNumber: 2,
    dayId: 'day2',
    dateLabel: 'Vendredi 04 Décembre 2026',
    actionWord: 'ACCÉLÉRER',
    dayTitle: 'La Clinique entrepreneuriale AYIF',
    theme: 'JOUR 2 — ACCÉLÉRER : La Clinique entrepreneuriale AYIF',
    description: 'Cette journée pratique accompagne les entrepreneurs dans l’analyse de leurs défis commerciaux et la recherche de solutions applicables. Les participants sont invités à venir avec leur entreprise, leurs documents, leurs chiffres et leurs produits.',
    bulletPoints: [
      'Panel : Innovation, Écosystèmes Technologiques & Investissements ;',
      'Diagnostic d’entreprise et séances de conseil ;',
      'Présentation de produits et d’entreprises ;',
      'Cliniques d’experts et recommandations pratiques ;',
      'Préparation au financement et à l’investissement ;',
      'Exportation, accès aux marchés et commerce transfrontalier ;',
      'Échanges entre pairs et réseautage ciblé ;',
      'Session Spéciale sur les méthodes africaines de levée de fond.'
    ],
    objective: 'accompagner les entrepreneurs dans l’analyse de leurs défis commerciaux et accélérer la recherche de solutions concrètes et finançables.'
  },
  {
    dayNumber: 3,
    dayId: 'day3',
    dateLabel: 'Samedi 05 Décembre 2026',
    actionWord: 'TRANSFORMER',
    dayTitle: 'Des opportunités à l’action',
    theme: 'JOUR 3 — TRANSFORMER : Des opportunités à l’action',
    description: 'La troisième journée associe immersion dans l’économie productive, découverte culturelle et célébration des contributions à l’écosystème entrepreneurial africain.',
    bulletPoints: [
      'Visite d’une plantation d’ananas et de l’usine de transformation Des Fruits Tillous ;',
      'Sortie touristique et immersion culturelle à Ouidah ;',
      'Dîner de gala AYIF ;',
      'Cérémonie de remise des AYIF Awards et reconnaissance des partenaires ;',
      'Rencontres B2B, B2G et échanges de haut niveau autour des investissements et partenariats.'
    ],
    objective: 'consolider les relations nouées pendant le Forum et encourager leur prolongement sous forme de collaborations, de partenariats commerciaux et d’opportunités d’investissement.'
  }
]

export const sessions: Session[] = [
  // JOUR 1
  { 
    id: 's1',
    day: 'day1',
    dayLabel: 'Jour 1 — 03 Décembre 2026',
    time: 'Matinée', 
    type: 'KEYNOTE', 
    title: 'Accueil des participants & Cérémonie d’Ouverture Officielle', 
    description: 'Accueil des participants, visite du village d’exhibition et ouverture officielle. Cérémonie mettant à l’honneur les pays africains avec drapeaux et hymnes nationaux du Bénin et du Nigéria.',
    speakers: 'Délégations officielles, NACCIMA & Elieson Consulting', 
    place: 'Palais des Congrès de Cotonou'
  },
  { 
    id: 's2',
    day: 'day1',
    dayLabel: 'Jour 1 — 03 Décembre 2026',
    time: 'Matinée', 
    type: 'PANEL', 
    title: 'Panel : Leadership, gouvernance et entrepreneuriat des jeunes en Afrique', 
    description: 'Créer les fondations d’un leadership transformationnel pour soutenir les bâtisseurs de valeur sur le continent.',
    speakers: 'Dirigeants d’entreprises & Experts institutionnels', 
    place: 'Grand Auditorium Atlantique'
  },
  { 
    id: 's3',
    day: 'day1',
    dayLabel: 'Jour 1 — 03 Décembre 2026',
    time: 'Midi', 
    type: 'NETWORKING B2B', 
    title: 'Petit-déjeuner & Réseautage Écosystème', 
    description: 'Échanges et premiers contacts entre entrepreneurs, investisseurs, institutions financières et partenaires bilatéraux.',
    speakers: 'Participants & Investisseurs', 
    place: 'Espace Networking & Jardins du Palais'
  },
  { 
    id: 's4',
    day: 'day1',
    dayLabel: 'Jour 1 — 03 Décembre 2026',
    time: 'Après-midi', 
    type: 'PANEL', 
    title: 'Panel : Intégration régionale et corridors transfrontaliers Bénin–Nigéria', 
    description: 'Fluidification des échanges commerciaux, franchissement douanier, opportunités de la ZLECAf et synergies de marché.',
    speakers: 'Experts du commerce extérieur & Chambres consulaires', 
    place: 'Grand Auditorium Atlantique'
  },
  { 
    id: 's5',
    day: 'day1',
    dayLabel: 'Jour 1 — 03 Décembre 2026',
    time: 'Fin d’après-midi', 
    type: 'INVESTMENT SESSION', 
    title: 'Visite immersive de la Zone industrielle de Glo-Djigbé (GDIZ)', 
    description: 'Immersion sur le terrain industriel phare du Bénin : transformation textile, agro-industrie et opportunités d’implantation.',
    speakers: 'Direction GDIZ & Délégations internationales', 
    place: 'Zone Économique Spéciale de Glo-Djigbé'
  },

  // JOUR 2
  { 
    id: 's6',
    day: 'day2',
    dayLabel: 'Jour 2 — 04 Décembre 2026',
    time: 'Matinée', 
    type: 'PANEL', 
    title: 'Panel : Innovation, Écosystèmes Technologiques & Investissements', 
    description: 'Comprendre les flux de capitaux dans les technologies émergentes et structurer l’accès aux financements de croissance.',
    speakers: 'Fonds de capital-risque & Fondateurs tech', 
    place: 'Scène Principale'
  },
  { 
    id: 's7',
    day: 'day2',
    dayLabel: 'Jour 2 — 04 Décembre 2026',
    time: 'Journée continue', 
    type: 'ATELIER', 
    title: 'La Clinique entrepreneuriale AYIF : Diagnostic d’entreprise & Conseil', 
    description: 'Séances pratiques de conseil individuel : analyse des bilans, conformité, unit economics, préparation au financement et à l’exportation.',
    speakers: 'Collège d’experts comptables, avocats d’affaires et consultants', 
    place: 'Salons de Conseil Clinique AYIF'
  },
  { 
    id: 's8',
    day: 'day2',
    dayLabel: 'Jour 2 — 04 Décembre 2026',
    time: 'Après-midi', 
    type: 'ATELIER', 
    title: 'Session Spéciale sur les méthodes africaines de levée de fond', 
    description: 'Modèles endogènes, syndication communautaire, tontines d’investissement, dette convertible et instruments adaptés aux réalités du continent.',
    speakers: 'Investisseurs panafricains & Business Angels', 
    place: 'Auditorium Nokoué'
  },

  // JOUR 3
  { 
    id: 's9',
    day: 'day3',
    dayLabel: 'Jour 3 — 05 Décembre 2026',
    time: 'Matinée', 
    type: 'INVESTMENT SESSION', 
    title: 'Immersion productive : Plantation d’ananas & Usine Des Fruits Tillous', 
    description: 'Découverte d’une chaîne complète de valeur agro-industrielle béninoise tournée vers l’exportation internationale.',
    speakers: 'Dirigeants Des Fruits Tillous & Experts agro-industrie', 
    place: 'Site de production & Transformation agro-alimentaire'
  },
  { 
    id: 's10',
    day: 'day3',
    dayLabel: 'Jour 3 — 05 Décembre 2026',
    time: 'Après-midi', 
    type: 'NETWORKING B2B', 
    title: 'Sortie touristique et immersion culturelle à Ouidah & Rencontres B2B/B2G', 
    description: 'Parcours mémoriel et culturel dans la ville historique de Ouidah, suivi d’échanges de haut niveau B2B et B2G.',
    speakers: 'Guides culturels & Décideurs publics-privés', 
    place: 'Ouidah & Espaces B2B dédiés'
  },
  { 
    id: 's11',
    day: 'day3',
    dayLabel: 'Jour 3 — 05 Décembre 2026',
    time: 'Soirée de Clôture', 
    type: 'NETWORKING B2B', 
    title: 'Dîner de Gala AYIF & Cérémonie de remise des AYIF Awards', 
    description: 'Grande soirée de gala réunissant l’ensemble des délégations : distinctions des champions entrepreneuriaux, reconnaissance des partenaires et engagements.',
    speakers: 'Comités NACCIMA & Elieson, Lauréats et Partenaires', 
    place: 'Palais des Congrès — Salon d’Honneur'
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
      'Invitation au Dîner de Gala AYIF & Soirée des Awards (05 Décembre)',
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
      '2 invitations pour le Dîner de Gala AYIF & Remise des Awards (05 Décembre)',
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

export const nigeriaGallery = [
  {
    title: 'Cérémonie Officielle d’Ouverture & Drapeaux',
    caption: 'Honneur aux nations africaines, drapeaux et hymnes nationaux du Bénin et du Nigéria devant 420 délégués réunis à Abuja.',
    image: '/images/editions/abuja-2025-opening.jpg'
  },
  {
    title: 'L’Executive Deal Room en Négociations',
    caption: 'Rencontres d’intermédiation directe confidentielles ayant généré $8,4M d’intentions de financement.',
    image: '/images/editions/abuja-2025-dealroom.jpg'
  },
  {
    title: 'Célébration des Lauréats AYIF Awards 2025',
    caption: 'Remise des trophées aux entrepreneurs lauréats et reconnaissance des partenaires de l’édition inaugurale.',
    image: '/images/editions/abuja-2025-awards.jpg'
  },
  {
    title: 'Plénière Panafricaine à l’AICC',
    caption: 'Sessions ministérielles et débats de haut niveau sur les corridors de libre-échange et l’accès au capital.',
    image: '/images/editions/abuja-2025.jpg'
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
  // NOUVEAUX ARTICLES AYIF 2025
  {
    slug: 'bilan-chiffre-ayif-abuja-2025',
    title: 'Bilan AYIF 2025 à Abuja : 420 délégués, 14 pays et $8,4M d’engagements signés en Deal Room',
    excerpt: 'Retour complet sur l’édition inaugurale d’Abuja qui a posé les bases d’un réseau panafricain indépendant d’investissement et d’alliances commerciales transfrontalières.',
    category: 'Rétrospective 2025',
    author: 'Babatunde Adeleke',
    authorRole: 'Président National, NACCIMA Youth Entrepreneurs',
    date: '25 Novembre 2025',
    readingTime: 6,
    cover: 'navy',
    image: '/images/editions/abuja-2025-opening.jpg',
    featured: true,
    content: [
      {
        heading: 'Un engouement continental au-delà des prévisions',
        paragraphs: [
          'En réunissant plus de 420 délégués accrédités et 18 fonds d’investissement à l’Abuja International Conference Centre, la session inaugurale d’AYIF a démontré la soif de partenariats productifs entre la jeunesse d’affaires nigériane et les délégations d’Afrique francophone.',
          'Pendant trois jours, les échanges ont dépassé le cadre des discours institutionnels pour s’ancrer dans la réalité des bilans comptables, des contrats de distribution régionale et des prises de participation directes.'
        ],
        quote: 'Abuja n’était pas un forum de plus : c’était l’acte de naissance d’une nouvelle diplomatie économique portée par les entrepreneurs de moins de 35 ans.'
      },
      {
        heading: 'La Deal Room fermée : $8,4 millions de financements formalisés',
        paragraphs: [
          'Innovation majeure plébiscitée par les gestionnaires de fonds, les sessions à huis clos d’intermédiation ont permis d’examiner 24 projets hautement qualifiés, aboutissant à des lettres d’intention d’investissement pour un montant cumulé de 8,4 millions de dollars.',
          'Ce succès a ouvert la voie à la décision de faire de Cotonou au Bénin le pays hôte de l’édition 2026 pour concrétiser le corridor UEMOA-CEDEAO.'
        ]
      }
    ]
  },
  {
    slug: 'laureats-pitch-competition-2025',
    title: 'AYIF Pitch Competition 2025 : Comment 3 pépites fintech et agritech ont convaincu le jury',
    excerpt: 'De la chaîne du froid solaire à la télémédecine et au crédit agricole : analyse des modèles économiques des trois lauréats financés lors de la grande finale d’Abuja.',
    category: 'Rétrospective 2025',
    author: 'Amina Bello-Kano',
    authorRole: 'Managing Partner, Northern Star Capital',
    date: '28 Novembre 2025',
    readingTime: 5,
    cover: 'blue',
    image: '/images/editions/abuja-2025-awards.jpg',
    featured: false,
    content: [
      {
        heading: 'Rigueur des Unit Economics et impact mesurable',
        paragraphs: [
          'Sélectionnées parmi plus de 240 candidatures issues de 14 pays, les dix startups finalistes ont affronté un jury composé de spécialistes du capital-risque et de banquiers de développement.',
          'Le premier prix a été attribué à AgroPay Nigeria pour sa plateforme d’affacturage agricole digitalisé, suivi d’AfriCold Logistics (chambre froide solaire modulaire) et KaziHealth Telemed.'
        ],
        quote: 'Ce qui a fait la différence devant le jury, c’est la rentabilité unitaire dès la première transaction et une parfaite maîtrise du cycle de trésorerie en monnaie locale.'
      }
    ]
  },
  {
    slug: 'deal-room-retrospective-2025',
    title: 'Dans les coulisses de la Deal Room AYIF 2025 : Retours d’expérience des investisseurs',
    excerpt: 'Qu’est-ce qui a convaincu les 18 fonds réunis à Abuja de s’engager ? Les enseignements clés sur la structuration juridique et la conformité financière pour les fondateurs.',
    category: 'Rétrospective 2025',
    author: 'Chidi Eze',
    authorRole: 'Président, NACCIMA Youth Entrepreneurs',
    date: '04 Décembre 2025',
    readingTime: 6,
    cover: 'sky',
    image: '/images/editions/abuja-2025-dealroom.jpg',
    featured: false,
    content: [
      {
        heading: 'Une méthodologie d’audition directe et confidentielle',
        paragraphs: [
          'Chaque fondateur disposait de 30 minutes d’audition face à un collège de trois fonds d’investissement sous accord de stricte confidentialité (NDA).',
          'Les investisseurs ont particulièrement salué la clarté des tableaux de capitalisation et la transparence des états financiers présentés.'
        ]
      }
    ]
  },
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
        title: 'Cérémonie d’Ouverture & Hymnes Nationaux',
        caption: 'Honneur aux nations et hymnes nationaux du Nigéria et du Bénin lors de l’ouverture officielle.',
        image: '/images/editions/abuja-2025-opening.jpg'
      },
      {
        title: 'Deal Room & Négociations Directes',
        caption: 'Rencontres confidentielles et structuration de tours de table entre startups et comités d’investissement.',
        image: '/images/editions/abuja-2025-dealroom.jpg'
      },
      {
        title: 'Célébration & Remise des Prix aux AYIF Awards',
        caption: 'Consécration des lauréats du pitch continental et reconnaissance des partenaires d’impact.',
        image: '/images/editions/abuja-2025-awards.jpg'
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
    dates: '03 — 05 Décembre 2026',
    status: 'past',
    statusLabel: 'Édition Terminée',
    coverImage: '/images/editions/cotonou-2026.jpg',
    leadParagraph: 'Deuxième étape majeure de la trajectoire panafricaine, Cotonou 2026 a concrétisé le pont économique stratégique entre le Nigeria et l’espace UEMOA au cœur d’un hub logistique et portuaire en pleine transformation.',
    description: [
      'Fort du succès d’Abuja, l’AYIF s’est installé au Palais des Congrès de Cotonou du 03 au 05 Décembre 2026, réunissant plus de 500 décideurs, 35 fonds d’investissement et de prestigieuses délégations sur trois journées d’impact.',
      'Jour 1 — Rassembler : Accueil des participants, visite du village d’exhibition, ouverture officielle avec honneur aux drapeaux et hymnes nationaux du Bénin et du Nigéria, panels sur le leadership et l’intégration régionale, et visite de la Zone industrielle de Glo-Djigbé (GDIZ).',
      'Jour 2 — Accélérer : La Clinique entrepreneuriale AYIF, où les entrepreneurs sont venus avec leurs entreprises, chiffres et produits pour des diagnostics personnalisés, cliniques d’experts, préparation au financement et une session spéciale sur les méthodes africaines de levée de fonds.',
      'Jour 3 — Transformer : Immersion productive avec la visite de la plantation d’ananas et de l’usine Des Fruits Tillous, sortie touristique et culturelle à Ouidah, Dîner de gala AYIF, remise des AYIF Awards et rencontres B2B/B2G de haut niveau.'
    ],
    stats: [
      { value: '500+', label: 'Délégués réunis', detail: 'Investisseurs, fondateurs, ministres et directeurs généraux' },
      { value: '25+', label: 'Pays représentés', detail: 'Afrique de l’Ouest, Centrale, Australe et diaspora' },
      { value: '$25M+', label: 'Pipeline Deal Room', detail: 'Volume de financements négociés lors des sessions d’intermédiation' },
      { value: '35+', label: 'Fonds & Banques', detail: 'Fonds d’impact, capital-risque, institutions de financement de développement' },
      { value: '3 Jours', label: 'Programme immersif', detail: 'Rassembler, Accélérer (Clinique) et Transformer (Visites & Gala)' },
      { value: '300+', label: 'Créneaux B2B & B2G', detail: 'Rendez-vous individuels et institutionnels d’investissement' }
    ],
    highlights: [
      {
        title: 'Jour 1 : Cérémonie d’Ouverture & Immersion GDIZ',
        description: 'Cérémonie protocolaire célébrant les hymnes et drapeaux du Bénin et du Nigéria, suivie de la visite de la Zone industrielle de Glo-Djigbé.',
        outcome: 'Création d’une communauté engagée et identification d’opportunités d’implantation industrielle.'
      },
      {
        title: 'Jour 2 : La Clinique Entrepreneuriale AYIF & Levées de Fonds',
        description: 'Séances intensives de diagnostic avec documents et chiffres d’entreprises, et session spéciale sur les méthodes africaines de levée de fonds.',
        outcome: 'Plus de 80 diagnostics réalisés et plans d’accélération financière validés.'
      },
      {
        title: 'Jour 3 : Des Fruits Tillous, Ouidah & Dîner de Gala',
        description: 'Visite de l’usine Des Fruits Tillous, immersion culturelle à Ouidah et célébration finale lors du Dîner de Gala AYIF avec remise des AYIF Awards.',
        outcome: 'Consolidation durable des partenariats et signature des accords d’investissement.'
      }
    ],
    keySpeakers: [
      {
        name: 'Comité de Pilotage AYIF',
        role: 'Direction Exécutive',
        organization: 'NACCIMA & Elieson Consulting',
        country: 'Bénin · Nigeria',
        topic: 'Bilan opérationnel et consolidation des corridors d’affaires transfrontaliers'
      }
    ],
    pitchWinners: [
      {
        rank: 'Palmarès 2026',
        startup: 'Lauréats AYIF Awards 2026',
        sector: 'Agro-industrie, Fintech, Logistique & Énergie',
        founder: 'Entrepreneurs récompensés au Dîner de Gala',
        prize: '$500 000 de dotations globales et financements directs'
      }
    ],
    keyPartners: [
      'Ministère de l’Économie et des Finances du Bénin',
      'Chambre de Commerce et d’Industrie du Bénin (CCI Bénin)',
      'NACCIMA Youth Entrepreneurs Nigeria',
      'Ouest Africa Development Bank (BOAD)',
      'Zone Industrielle de Glo-Djigbé (GDIZ)',
      'Des Fruits Tillous',
      'Ecobank Investment Fund',
      'Baobab Ventures'
    ],
    gallery: [
      {
        title: 'Ouverture Officielle & Hymnes Nationaux',
        caption: 'Cérémonie d’ouverture marquant l’alliance économique entre le Bénin et le Nigéria.',
        image: '/images/editions/abuja-2025-opening.jpg'
      },
      {
        title: 'La Clinique Entrepreneuriale AYIF',
        caption: 'Accompagnement pratique et diagnostic des défis commerciaux avec les experts.',
        image: '/images/editions/abuja-2025-dealroom.jpg'
      },
      {
        title: 'Dîner de Gala AYIF & Remise des Awards',
        caption: 'Soirée de consécration et remise des trophées de l’excellence entrepreneuriale.',
        image: '/images/editions/abuja-2025-awards.jpg'
      }
    ],
    reportTitle: 'Dossier Stratégique & Actes Officiels — Cotonou 2026',
    reportDownloadText: 'Télécharger les Actes Complets & Bilan du Forum (PDF, 36 pages · 3.8 Mo)'
  },
  {
    slug: 'prochaine-edition',
    year: 2027,
    editionNumber: '3ème Édition Continentale',
    title: 'AYIF Prochaine Édition · Destination à Définir',
    tagline: 'Et si ton pays devenait le prochain organisateur ?',
    theme: 'Appel international à candidatures : devenez le pays hôte du plus grand forum d’investissement jeunesse d’Afrique',
    country: 'À définir ultérieurement',
    city: 'Candidatures ouvertes',
    venue: 'Centre International retenu avec l’État hôte',
    dates: '2027 (Dates officielles à convenir avec le pays hôte)',
    status: 'upcoming',
    statusLabel: 'Destination à Définir Ultérieurement',
    coverImage: '/images/editions/cotonou-2026.jpg',
    leadParagraph: 'L’Africa Youth Investment Forum prépare sa 3ème grande édition tournante. Le comité international invite les gouvernements, chambres de commerce et institutions régionales à déposer leur candidature pour accueillir le plus grand rassemblement de jeunes investisseurs et créateurs d’Afrique.',
    description: [
      'Après le succès historique d’Abuja au Nigéria (2025) et la consécration de Cotonou au Bénin (2026), l’AYIF poursuit son déploiement continental. La prochaine destination sera choisie à l’issue d’un processus de sélection rigoureux ouvert à tous les pays africains.',
      'Accueillir l’AYIF offre à la nation hôte une visibilité économique mondiale de premier ordre, un afflux massif de capitaux privés et d’investisseurs institutionnels, ainsi qu’une mise en lumière privilégiée de ses champions industriels et technologiques.',
      'Et si votre pays devenait le prochain organisateur ? Les institutions publiques, ministères, chambres consulaires et grands partenaires privés peuvent dès maintenant s’enregistrer pour soutenir ou héberger la prochaine édition.'
    ],
    stats: [
      { value: '1 000+', label: 'Délégués ciblés', detail: 'Investisseurs mondiaux, leaders technologiques et délégations ministérielles' },
      { value: '30+', label: 'Pays africains', detail: 'Une mobilisation transcontinentale interconnectée' },
      { value: '$50M+', label: 'Enveloppe ciblée', detail: 'Capitaux ciblés pour l’industrie, l’innovation et la jeunesse' },
      { value: '50+', label: 'Fonds & Bailleurs', detail: 'Bailleurs multilatéraux et capitaux institutionnels privés' },
      { value: '15', label: 'Finalistes Pitch', detail: 'Compétition axée sur la scalabilité panafricaine' }
    ],
    highlights: [
      {
        title: 'Appel International aux Pays Candidats',
        description: 'Dépôt des dossiers de manifestation d’intérêt auprès du secrétariat permanent de l’AYIF.',
        outcome: 'Sélection officielle du pays hôte par le conseil d’administration.'
      },
      {
        title: 'Packs Partenaires & Sponsors Hôtes',
        description: 'Formules de co-organisation, sponsoring territorial et investissements stratégiques pour la prochaine édition.',
        outcome: 'Enregistrement direct et sécurisation des engagements des partenaires.'
      },
      {
        title: 'Rayonnement Économique Continental',
        description: 'Une plateforme clé en main pour positionner la nation hôte comme carrefour de l’investissement de la jeunesse.',
        outcome: 'Attractivité démultipliée des investissements directs étrangers (IDE).'
      }
    ],
    keySpeakers: [
      {
        name: 'Comité International d’Organisation',
        role: 'Secrétariat Permanent',
        organization: 'Africa Youth Investment Forum',
        country: 'Panafricain',
        topic: 'Critères d’attribution et cahier des charges pour accueillir l’AYIF'
      }
    ],
    pitchWinners: [
      {
        rank: 'Prochaine Édition',
        startup: 'Appel à candidatures à venir',
        sector: 'Tech, Agro-industrie, Énergie & Services',
        founder: 'Modalités d’inscription prochainement publiées',
        prize: '$750 000 de dotation prévisionnelle'
      }
    ],
    keyPartners: [
      'NACCIMA Youth Entrepreneurs',
      'Elieson Business Consulting',
      'Banque Ouest-Africaine de Développement (BOAD)',
      'Union Africaine — Division Jeunesse & Entrepreneuriat',
      'Chambres de Commerce candidates'
    ],
    gallery: [
      {
        title: 'Une Mobilisation Panafricaine Historique',
        caption: 'L’Afrique réunit ses forces vives pour stimuler le capital d’investissement.',
        image: '/images/editions/abuja-2025-opening.jpg'
      },
      {
        title: 'Deal Room & Négociations Directes',
        caption: 'Rencontres de haut niveau entre bailleurs institutionnels et fondateurs de startups.',
        image: '/images/editions/abuja-2025-dealroom.jpg'
      },
      {
        title: 'Cérémonie de Prestige & AYIF Awards',
        caption: 'Reconnaissance des partenaires et célébration des réussites continentales.',
        image: '/images/editions/abuja-2025-awards.jpg'
      }
    ],
    reportTitle: 'Dossier de Candidature Pays Hôte & Partenaire',
    reportDownloadText: 'Télécharger le Cahier des Charges & Formulaire d’Accueil (PDF, 20 pages · 2.4 Mo)'
  }
]

