# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Grand public, jeunesse africaine et jeunes professionnels :** Participants principaux cherchant à assister aux conférences, s'inspirer, développer leurs compétences et comprendre les enjeux économiques et d'investissement en Afrique.
- **Porteurs de projets et jeunes entrepreneurs :** En quête de visibilité, de mentorat, de partages d'expérience et d'accès aux opportunités de financement.
- **Intervenants (speakers), investisseurs et partenaires :** Personnalités publiques, dirigeants d'entreprises et fonds participant aux panels, masterclasses et salons d'échanges spécifiques (Deal Room).

## Product Purpose

Fournir le portail web officiel de l'**Africa Youth Investment Forum (AYIF Bénin 2026)** (Palais des Congrès de Cotonou, 03 au 05 décembre 2026).
La plateforme a pour objectif de valoriser la vision du forum, de présenter son programme et ses intervenants, et de convertir les visiteurs en participants confirmés à travers la billetterie et les inscriptions.

## Positioning

Le carrefour panafricain qui démystifie l'investissement et ouvre les portes de l'écosystème entrepreneurial continental au grand public et à la jeunesse, en reliant les espaces économiques francophones et anglophones autour de solutions concrètes (ZLECAf, capital patient, innovation locale).

## Operating Context

- Consultation grand public principalement sur smartphones (connexions mobiles variées en Afrique de l'Ouest, Centrale et diaspora) et sur ordinateurs de bureau.
- Temps fort pré-événement : découverte du contenu, exploration du programme et achat/réservation des billets.
- Temps fort durant l'événement : repérage des sessions en direct, des salles au Palais des Congrès et des intervenants.

## Capabilities and Constraints

- **Stack technique :** Nuxt 4 (Vue 3), Tailwind CSS, TypeScript, Nuxt UI, Pinia, nuxt/image, @nuxtjs/i18n.
- **Fonctionnalités en place :**
  - Page d'accueil dynamique avec compteur, statistiques clés et piliers du forum.
  - Page « À propos » explicitant la genèse, la mission et les 4 piliers stratégiques.
  - Programme complet ventilé par journées, thématiques et créneaux horaires.
  - Annuaire des intervenants (speakers) avec biographies et filtres.
  - Grille des forfaits de partenariat et sponsors.
  - Module de billetterie et inscription (pass Standard, VIP, Deal Room).
  - Présentation des éditions précédentes et blog d'actualités.
- **Contraintes :** Performance de chargement optimisée pour réseaux mobiles à bande passante restreinte, clarté des CTA de réservation.

## Brand Commitments

- **Nom officiel :** Africa Youth Investment Forum (AYIF).
- **Édition 2026 :** Bénin 2026, Cotonou, Palais des Congrès (03 au 05 Décembre 2026).
- **Tonalité de marque :** Inspirante, panafricaine, crédible, institutionnelle et orientée action.
- **Règle visuelle stricte :** Couleurs unies et franches selon la charte (Bleu nuit `#082B55`, Bleu `#0757B8`, Bleu ciel `#2EA7F2`, Blanc `#FFFFFF`, Or `#D9A21B`), **aucun dégradé** dans l'ensemble de l'interface.

## Evidence on Hand

- Données de référence structurées dans `app/data/mockData.ts` (intervenants, dates, tarifs, packages partenaires, sessions).
- Maquettes et composants fonctionnels existants dans `app/components/` et `app/pages/`.

## Product Principles

1. **Priorité à la clarté et à la fluidité grand public :** L'accès aux informations pratiques (dates, lieu, agenda, billets) doit être immédiat sans jargon inutile.
2. **Expérience mobile irréprochable :** Performances de rendu véloces et ergonomie pensée pour les écrans tactiles et réseaux mobiles.
3. **Crédibilité et statut panafricain :** Un niveau de finition élevé qui reflète la dimension institutionnelle et internationale de l'événement.
