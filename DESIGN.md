---
name: AYIF Bénin 2026
description: Charte graphique officielle et système de design de l'Africa Youth Investment Forum
colors:
  primary: "#082B55"
  secondary: "#0757B8"
  accent: "#2EA7F2"
  gold: "#D9A21B"
  white: "#FFFFFF"
  surface: "#F8FAFC"
  surface-dark: "#07203E"
  bg-dark: "#041224"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.25rem, 4.6vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.15
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)"
    fontWeight: 700
    lineHeight: 1.25
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1.2
rounded:
  sm: "6px"
  md: "12px"
  lg: "18px"
  xl: "24px"
  full: "99px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-prestige:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "9px 18px"
  badge-protocol:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.gold}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
---

# Design System — AYIF Bénin 2026

<!-- impeccable:design-schema 1 -->

## Overview

Le design de l'Africa Youth Investment Forum (AYIF Bénin 2026) incarne la souveraineté, la crédibilité institutionnelle et l'ambition économique continentale. L'esthétique est rigoureuse, nette et lisible, associant la distinction éditoriale de la typographie avec empattements à la clarté moderne du sans-serif.

Une règle absolue régit la charte graphique : **aucun dégradé (zero gradients)**. Toutes les surfaces, boutons, fonds et délimitations utilisent des couleurs solides franches, des teintes unies ou des contrastes nets.

## Colors

La palette est stricte et normée :

- **Bleu Nuit (`#082B55` / `var(--ayif-navy)`) :** Couleur principale d'autorité, appliquée aux sections maîtresses, en-têtes officiels, cartes protocolaires et état actif.
- **Bleu Institutionnel (`#0757B8` / `var(--ayif-blue)`) :** Couleur d'action principale pour les boutons, liens primaires et balises clés.
- **Bleu Ciel (`#2EA7F2` / `var(--ayif-sky)`) :** Accents numériques, métriques, chiffres clés et survols.
- **Blanc (`#FFFFFF` / `var(--ayif-white)`) :** Fond de page en mode clair, cartes et typographie sur fond sombre.
- **Or Protocolaire (`#D9A21B` / `var(--ayif-gold)`) :** Utilisé avec parcimonie pour les sceaux, bordures d'honneur, icônes d'accréditation et textes de prestige.
- **Surfaces neutres :** `#F8FAFC` (mode clair) et `#07203E` / `#041224` (mode sombre).

**Interdiction formelle :** `linear-gradient()`, `radial-gradient()`, `conic-gradient()` et les classes d'interpolation de type `bg-gradient-to-*` sont prohibés.

## Typography

- **Titres & Identité :** *Fraunces* (Google Fonts) avec empattements pour conférer autorité, pérennité et solennité diplomatique.
- **Corps & UI :** *Manrope* pour une lisibilité optimale sur écrans mobiles et interfaces denses.
- **Hiérarchie :** Tailles fluidifiées par `clamp()` définies dans `main.css` (`--fs-display`, `--fs-h1`, `--fs-h2`, `--fs-h3`, `--fs-body`, `--fs-stat`).

## Layout

- Grille centrale responsive contrainte par `.wrap` (largeur max 1240px).
- Marges latérales sécurisées sur mobile (clamp de 16px à 32px).
- Rythme vertical aéré avec espacements standardisés (48px à 96px entre les sections majeures).

## Elevation & Depth

- L'élévation s'exprime par le contraste de surfaces solides et des bordures délimitées (`1px solid rgba(8, 43, 85, 0.12)` ou `rgba(217, 162, 27, 0.4)`), complétées par des ombres portées discrètes.
- Pas d'artifices de flous colorés ou de halos radiaux en arrière-plan.

## Shapes

- **Boutons d'action et capsules :** Arrondis complets (`99px` / `rounded-full`).
- **Cartes et conteneurs :** Rayons modérés (`12px` à `24px`).
- **Badges et marqueurs de protocole :** Rayons précis (`4px` à `6px`).

## Components

- **AppHeader :** Barre de navigation solide avec fond bleu nuit uni (`#082B55`), sceau brodé en bordure or, CTA d'action directe sans dégradé.
- **CountdownTimer :** Boîtier monobloc en bleu nuit massif avec bordure or, chiffres en bleu ciel ou or.
- **Cartes de Programme & Intervenants :** Blocs aux contours nets, fonds de scène unis en bleu nuit, sans filtres de dégradé.
- **Registre Partenaires & Sponsors :** Bandeaux protocolaires sur fond neutre solide (`var(--bg-surface)`).

## Do's and Don'ts

### Do's
- Utiliser systématiquement les variables de couleur officielles (`var(--ayif-navy)`, `var(--ayif-blue)`, etc.).
- Conserver des bordures franches et des contrastes nets pour guider le regard.
- Soigner la réactivité mobile et le chargement instantané.

### Don'ts
- **Ne JAMAIS utiliser de dégradés** (`background: linear-gradient(...)`, `radial-gradient(...)`).
- Ne pas introduire de couleurs fluorescentes ou hors charte (pas de violet, rouge ou vert arbitraire).
- Ne pas masquer le contenu derrière des superpositions floues ou des opacités excessives.
