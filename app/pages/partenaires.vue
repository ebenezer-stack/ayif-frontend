<script setup lang="ts">
import { ref } from 'vue'
import { partnerPackages, sponsorsCategories, EVENT_DATES_LABEL, EVENT_LOCATION } from '../data/mockData'

useHead({
  title: 'Partenaires & Sponsors — AYIF Bénin 2026',
  meta: [
    {
      name: 'description',
      content: 'Associez votre institution ou votre entreprise à l’Africa Youth Investment Forum (AYIF) Cotonou 2026. Découvrez les formules de partenariat Platine, Or et Argent.'
    }
  ]
})

const partnerForm = ref({
  company: '',
  contactName: '',
  email: '',
  phone: '',
  selectedTier: 'or',
  message: '',
  submitted: false
})

const submitPartnerInquiry = () => {
  if (!partnerForm.value.company || !partnerForm.value.contactName || !partnerForm.value.email) {
    alert('Veuillez renseigner votre entreprise, votre nom et votre email.')
    return
  }
  partnerForm.value.submitted = true
}
</script>

<template>
  <div class="partners-page">
    <!-- HERO SECTION -->
    <section class="part-hero navy">
      <div class="wrap">
        <span class="sub-kicker">Alliances &amp; Visibilité Panafricaine</span>
        <h1 class="hero-title">Sponsors &amp; Partenaires Stratégiques</h1>
        <p class="hero-lead">
          Positionnez votre organisation au cœur de l'événement économique majeur de l'année et engagez-vous activement auprès de la prochaine génération de leaders d'entreprises africaines.
        </p>
        <div class="meta-strip">
          <span>{{ EVENT_DATES_LABEL }}</span>
          <span class="dot">·</span>
          <span>{{ EVENT_LOCATION }}</span>
        </div>
      </div>
    </section>

    <!-- LES CATÉGORIES DE PARTENAIRES -->
    <section class="partners-wall-section">
      <div class="wrap">
        <div class="section-head">
          <span class="section-kicker">Écosystème Fédéré</span>
          <h2>Ils soutiennent l’initiative</h2>
          <p class="intro">Une convergence rare entre institutions publiques, banques régionales et géants technologiques.</p>
        </div>

        <!-- 1. Institutionnels -->
        <div class="category-block">
          <h3 class="cat-title">Partenaires Institutionnels &amp; Gouvernementaux</h3>
          <div class="cat-grid">
            <div v-for="inst in sponsorsCategories.institutionnels" :key="inst" class="partner-tile">
              <span>{{ inst }}</span>
            </div>
          </div>
        </div>

        <!-- 2. Investisseurs -->
        <div class="category-block">
          <h3 class="cat-title">Fonds d’Investissement &amp; Capital-Développement</h3>
          <div class="cat-grid">
            <div v-for="inv in sponsorsCategories.investisseurs" :key="inv" class="partner-tile">
              <span>{{ inv }}</span>
            </div>
          </div>
        </div>

        <!-- 3. Tech & Logistique -->
        <div class="category-block">
          <h3 class="cat-title">Partenaires Technologiques &amp; Logistiques</h3>
          <div class="cat-grid">
            <div v-for="tech in sponsorsCategories.technologie" :key="tech" class="partner-tile">
              <span>{{ tech }}</span>
            </div>
          </div>
        </div>

        <!-- 4. Médias -->
        <div id="presse" class="category-block">
          <h3 class="cat-title">Médias &amp; Partenaires de Diffusion</h3>
          <div class="cat-grid">
            <div v-for="med in sponsorsCategories.medias" :key="med" class="partner-tile">
              <span>{{ med }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LES FORMULES DE PARTENARIAT -->
    <section class="packages-section blue">
      <div class="wrap">
        <div class="section-head text-white">
          <span class="cot-kicker">Offres &amp; Sponsoring</span>
          <h2 class="text-white">Packs de Partenariat AYIF 2026</h2>
          <p class="intro-white">Des options de sponsoring calibrées pour maximiser votre impact, votre visibilité et vos retombées B2B.</p>
        </div>

        <div class="packages-grid">
          <div 
            v-for="pkg in partnerPackages" 
            :key="pkg.id" 
            class="pkg-card navy"
          >
            <div class="pkg-top">
              <span v-if="pkg.badge" class="pkg-badge">{{ pkg.badge }}</span>
              <h3>{{ pkg.tier }}</h3>
              <p class="pkg-summary">{{ pkg.summary }}</p>
            </div>

            <div class="pkg-prices">
              <div class="price-xof">{{ pkg.priceXOF }}</div>
              <div class="price-usd">{{ pkg.priceUSD }}</div>
            </div>

            <ul class="pkg-benefits">
              <li v-for="b in pkg.benefits" :key="b">
                <svg class="check-svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="4 10 8 14 16 6"></polyline>
                </svg>
                <span>{{ b }}</span>
              </li>
            </ul>

            <a href="#contact-sponsor" class="btn primary pkg-btn">
              Demander le dossier sponsor
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- FORMULAIRE CONTACT SPONSOR -->
    <section id="contact-sponsor" class="sponsor-form-section">
      <div class="wrap sp-split">
        <div class="sp-text">
          <span class="sub-kicker">Accompagnement Sur Mesure</span>
          <h2>Construisons votre partenariat pour Cotonou 2026</h2>
          <p class="intro">
            Notre équipe de commissariat général est à votre disposition pour élaborer une formule adaptée à vos objectifs stratégiques, qu'il s'agisse de visibilité de marque, d'animation de session ou d'attribution d'un prix d'innovation.
          </p>
          <div class="contact-direct">
            <div class="c-line">
              <strong>Email partenariats :</strong>
              <span>sponsors@ayifbenin2026.org</span>
            </div>
            <div class="c-line">
              <strong>Comité Bénin :</strong>
              <span>Elieson Business Consulting, Cotonou</span>
            </div>
            <div class="c-line">
              <strong>Comité Nigeria :</strong>
              <span>NACCIMA Youth Entrepreneurs, Lagos / Abuja</span>
            </div>
          </div>
        </div>

        <div class="sp-form-card">
          <div v-if="partnerForm.submitted" class="sp-success navy">
            <h3>Demande enregistrée</h3>
            <p>Nous vous remercions pour votre intérêt. Notre responsable des partenariats vous adressera le dossier officiel complet et vous contactera sous 24h.</p>
            <button type="button" class="btn primary" @click="partnerForm.submitted = false">
              Nouvelle demande
            </button>
          </div>

          <form v-else class="partner-form" @submit.prevent="submitPartnerInquiry">
            <h3>Formulaire d’Intérêt Partenariat</h3>
            <div class="f-group">
              <label for="pComp">Nom de l’Entreprise ou Institution *</label>
              <input id="pComp" v-model="partnerForm.company" type="text" required placeholder="Ex: Banque de Développement Régionale" />
            </div>

            <div class="f-group">
              <label for="pName">Nom et Prénom du Contact *</label>
              <input id="pName" v-model="partnerForm.contactName" type="text" required placeholder="Ex: Aïcha Ouédraogo" />
            </div>

            <div class="f-group">
              <label for="pEmail">Email professionnel *</label>
              <input id="pEmail" v-model="partnerForm.email" type="email" required placeholder="direction@groupe.com" />
            </div>

            <div class="f-group">
              <label for="pPhone">Téléphone / WhatsApp</label>
              <input id="pPhone" v-model="partnerForm.phone" type="tel" placeholder="+229 / +234..." />
            </div>

            <div class="f-group">
              <label for="pTier">Formule pressentie</label>
              <select id="pTier" v-model="partnerForm.selectedTier">
                <option value="platine">Partenaire Platine (Exclusivité)</option>
                <option value="or">Partenaire Or</option>
                <option value="argent">Partenaire Argent</option>
                <option value="media">Partenaire Média &amp; Presse</option>
                <option value="autre">Sur mesure / Autre</option>
              </select>
            </div>

            <div class="f-group">
              <label for="pMsg">Précisions ou besoins spécifiques</label>
              <textarea id="pMsg" v-model="partnerForm.message" rows="3" placeholder="Indiquez vos attentes clés (stand d'exposition, panel, naming...)."></textarea>
            </div>

            <button type="submit" class="btn primary sp-submit-btn">
              Recevoir le kit de partenariat complet
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.partners-page {
  background-color: var(--bg-page);
  color: var(--text-page);
}

.part-hero {
  padding-top: 150px;
  padding-bottom: 70px;
  background-color: var(--navy-bg);
  color: var(--navy-text);
  border-bottom: 1px solid var(--navy-line);
}

.sub-kicker {
  display: block;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 12px;
}

.hero-title {
  font-size: var(--fs-h1);
  font-weight: 800;
  line-height: 1.05;
  margin: 0 0 18px;
  color: var(--navy-text);
}

.hero-lead {
  font-size: var(--fs-lead);
  line-height: 1.55;
  color: var(--navy-muted);
  max-width: 760px;
  margin: 0 0 28px;
}

.meta-strip {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--color-accent);
  font-weight: 600;
}

.meta-strip .dot {
  opacity: 0.5;
}

/* Wall section */
.partners-wall-section {
  padding: 88px 0;
}

.section-head {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 56px;
}

.section-kicker {
  display: block;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 8px;
}

.section-head h2 {
  font-size: var(--fs-h2);
  font-weight: 700;
  color: var(--text-page);
  margin: 0 0 10px;
}

.category-block {
  margin-bottom: 48px;
}

.cat-title {
  font-family: var(--font-sans);
  font-size: var(--fs-body);
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--ayif-blue);
  text-transform: uppercase;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border-line);
}

.cat-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.partner-tile {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  padding: 24px 16px;
  height: 96px;
  display: grid;
  place-items: center;
  text-align: center;
  border-radius: 4px;
  font-family: var(--font-serif);
  font-size: var(--fs-body);
  font-weight: 600;
  color: var(--text-muted);
  transition: all 0.2s ease;
}

.partner-tile:hover {
  border-color: var(--color-accent);
  color: var(--ayif-blue);
  background-color: var(--bg-page);
}

/* Packages */
.packages-section {
  padding: 96px 0;
  background-color: var(--ayif-blue);
}

.text-white {
  color: var(--ayif-white) !important;
}

.intro-white {
  color: rgba(255, 255, 255, 0.85);
  font-size: var(--fs-body);
}

.cot-kicker {
  display: block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 8px;
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.pkg-card {
  padding: 32px 24px;
  border-radius: 4px;
  border: 1px solid var(--navy-line);
  display: flex;
  flex-direction: column;
}

.pkg-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-gold);
  background-color: rgba(217, 162, 27, 0.12);
  padding: 3px 8px;
  border-radius: 99px;
  margin-bottom: 8px;
}

.pkg-top h3 {
  font-size: var(--fs-h4);
  font-weight: 700;
  margin: 0 0 10px;
  color: var(--navy-text);
}

.pkg-summary {
  font-size: 13px;
  color: var(--navy-muted);
  line-height: 1.45;
  margin: 0 0 20px;
  min-height: 54px;
}

.pkg-prices {
  padding: 16px 0;
  border-top: 1px solid var(--navy-line);
  border-bottom: 1px solid var(--navy-line);
  margin-bottom: 20px;
}

.price-xof {
  font-family: var(--font-serif);
  font-size: var(--fs-h4);
  font-weight: 800;
  color: var(--color-accent);
}

.price-usd {
  font-size: 13px;
  color: var(--navy-muted);
}

.pkg-benefits {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.pkg-benefits li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12px;
  color: var(--navy-muted);
  line-height: 1.4;
}

.check-svg {
  width: 15px;
  height: 15px;
  min-width: 15px;
  color: var(--color-accent);
  margin-top: 1px;
}

.pkg-btn {
  text-align: center;
  font-size: 13px;
  padding: 10px 16px;
}

/* Contact form */
.sponsor-form-section {
  padding: 96px 0;
}

.sp-split {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 56px;
  align-items: start;
}

.sp-text h2 {
  font-size: var(--fs-h2);
  font-weight: 700;
  margin: 0 0 16px;
  color: var(--text-page);
}

.contact-direct {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 1px solid var(--border-line);
  padding-top: 24px;
}

.c-line strong {
  display: block;
  font-size: 13px;
  color: var(--text-page);
}

.c-line span {
  font-size: 14px;
  color: var(--color-accent);
}

.sp-form-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  padding: 40px;
  border-radius: 4px;
}

.partner-form h3 {
  font-size: var(--fs-h3);
  font-weight: 700;
  margin: 0 0 20px;
  color: var(--text-page);
}

.f-group {
  margin-bottom: 18px;
}

.f-group label {
  display: block;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 6px;
  color: var(--text-page);
}

.f-group input,
.f-group select,
.f-group textarea {
  width: 100%;
  padding: 10px 14px;
  font-family: var(--font-sans);
  font-size: 14px;
  border: 1px solid var(--border-line);
  border-radius: 4px;
  background-color: var(--bg-page);
  color: var(--text-page);
}

.f-group input:focus,
.f-group select:focus,
.f-group textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

.sp-submit-btn {
  width: 100%;
  padding: 14px;
  border: none;
  cursor: pointer;
  margin-top: 8px;
}

.sp-success {
  padding: 32px;
  border-radius: 4px;
  text-align: center;
}

.sp-success h3 {
  font-size: var(--fs-h3);
  color: var(--navy-text);
  margin-bottom: 10px;
}

.sp-success p {
  color: var(--navy-muted);
  font-size: var(--fs-body);
  margin-bottom: 24px;
}

@media (max-width: 1024px) {
  .cat-grid,
  .packages-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .sp-split {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}

@media (max-width: 600px) {
  .cat-grid,
  .packages-grid {
    grid-template-columns: 1fr;
  }

  .sp-form-card {
    padding: 24px 18px;
  }
}
</style>
