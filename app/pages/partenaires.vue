<script setup lang="ts">
import { ref } from 'vue'
import { partnerPackages, sponsorsCategories, officialPartners, EVENT_DATES_LABEL, EVENT_LOCATION } from '../data/mockData'

useHead({
  title: 'Partenaires & Sponsors — AYIF Bénin 2026',
  meta: [
    {
      name: 'description',
      content: 'Associez votre institution ou votre entreprise à l’Africa Youth Investment Forum (AYIF) Cotonou 2026. Découvrez le comité d’organisation, l’écosystème de partenaires et les formules de sponsoring.'
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

// Formulaire Candidature Pays Hôte & Enregistrement Partenaire
const hostCountryForm = ref({
  country: '',
  organization: '',
  contactName: '',
  email: '',
  phone: '',
  roleCategory: 'ministere',
  proposedCity: '',
  paymentMethod: 'virement',
  message: '',
  submitted: false
})

const submitHostCountry = () => {
  if (!hostCountryForm.value.country || !hostCountryForm.value.organization || !hostCountryForm.value.contactName || !hostCountryForm.value.email) {
    alert('Veuillez renseigner les champs obligatoires (Pays, Organisation, Responsable, Email).')
    return
  }
  hostCountryForm.value.submitted = true
}
</script>

<template>
  <div class="partners-page">
    <!-- =====================================================================
         1. HERO SECTION SOUVERAIN (FOND BLEU NAVY AVEC MOTIF GÉOMÉTRIQUE)
         ===================================================================== -->
    <section class="part-hero navy">
      <div class="wrap">
        <div class="kicker-group" v-reveal>
          <span class="kicker-gem" aria-hidden="true">◆</span>
          <span class="sub-kicker">Alliances &amp; Visibilité Panafricaine</span>
        </div>
        <h1 class="hero-title" v-reveal="{ effect: 'up', delay: 80 }">
          Sponsors &amp; Partenaires Stratégiques
        </h1>
        <p class="hero-lead" v-reveal="{ effect: 'up', delay: 120 }">
          Positionnez votre organisation au cœur de l'événement économique majeur de l'année et engagez-vous activement auprès de la prochaine génération de leaders d'entreprises africaines.
        </p>
        <div class="meta-strip" v-reveal="{ effect: 'up', delay: 160 }">
          <span class="meta-capsule">{{ EVENT_DATES_LABEL }}</span>
          <span class="meta-capsule">{{ EVENT_LOCATION }}</span>
          <span class="meta-capsule gold">Palais des Congrès de Cotonou</span>
        </div>
      </div>
    </section>

    <!-- =====================================================================
         2. COMITÉ D'ORGANISATION OFFICIEL 2026 (FOND CLAIR PATTERN, SANS BORDER-LEFT, SANS POINT)
         ===================================================================== -->
    <section class="official-delegation-section">
      <div class="wrap">
        <div class="section-head" v-reveal>
          <div class="kicker-group center">
            <span class="kicker-gem" aria-hidden="true">◆</span>
            <span class="section-kicker">GOUVERNANCE &amp; PILOTAGE CONJOINT</span>
          </div>
          <h2 class="section-title">Comité d’Organisation Officiel d’AYIF 2026</h2>
          <p class="section-intro">
            Les femmes et les hommes des délégations du Bénin et du Nigéria mobilisés pour coordonner les commissions stratégiques, accueillir les partenaires et garantir le succès du forum à Cotonou.
          </p>

          <!-- BANDEAU REGISTRE PROTOCOLAIRE ÉPURÉ : ZÉRO BORDER-LEFT, ZÉRO POINT -->
          <div class="protocol-registry-strip">
            <span class="registry-badge-title">CYCLE D'ACCRÉDITATION OFFICIEL</span>
            <p class="registry-notice">
              Les accords bilatéraux, fonds partenaires et bailleurs multilatéraux sont homologués et officialisés au fur et à mesure par le comité de pilotage.
            </p>
          </div>
        </div>

        <!-- GRILLE SPATIEUSE À 2 COLONNES DES MEMBRES DU COMITÉ D'ORGANISATION -->
        <div class="delegation-executive-grid" v-reveal="{ effect: 'up', delay: 100 }">
          <article
            v-for="partner in officialPartners"
            :key="partner.id"
            class="delegation-prestige-plate"
          >
            <div class="del-avatar-frame">
              <img
                :src="partner.image"
                :alt="partner.name"
                loading="lazy"
                class="del-avatar"
              />
            </div>
            <div class="del-info-col">
              <div class="del-badges-row">
                <span class="del-tier-badge">{{ partner.tierBadge }}</span>
                <span class="del-country-badge">{{ partner.country }}</span>
              </div>
              <h3 class="del-org-title">{{ partner.organization }}</h3>
              <div class="del-patron-block">
                <span class="del-patron-name">{{ partner.name }}</span>
                <span class="del-patron-role">{{ partner.role }}</span>
              </div>
              <p class="del-desc-text">{{ partner.highlight }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- =====================================================================
         3. ÉCOSYSTÈME DES PARTENAIRES & ALLIANCES (FOND BLEU NAVY AVEC MOTIF GÉOMÉTRIQUE)
         ===================================================================== -->
    <section class="partners-ecosystem-section navy">
      <div class="wrap">
        <div class="section-head text-white" v-reveal>
          <div class="kicker-group center">
            <span class="kicker-gem gold" aria-hidden="true">◆</span>
            <span class="section-kicker gold">Écosystème Fédéré &amp; Alliances</span>
          </div>
          <h2 class="section-title text-white">Ils soutiennent l’initiative</h2>
          <p class="section-intro text-white-muted">
            Une convergence rare entre institutions publiques souveraines, banques régionales de développement et champions industriels africains.
          </p>
        </div>

        <div class="ecosystem-categories-stack">
          <!-- 1. Institutionnels -->
          <div class="category-block" v-reveal>
            <div class="cat-header">
              <span class="cat-gem" aria-hidden="true">✦</span>
              <h3 class="cat-title">Partenaires Institutionnels &amp; Gouvernementaux</h3>
            </div>
            <div class="cat-grid">
              <div v-for="inst in sponsorsCategories.institutionnels" :key="inst" class="partner-tile-navy">
                <span>{{ inst }}</span>
              </div>
            </div>
          </div>

          <!-- 2. Investisseurs -->
          <div class="category-block" v-reveal="{ effect: 'up', delay: 60 }">
            <div class="cat-header">
              <span class="cat-gem" aria-hidden="true">✦</span>
              <h3 class="cat-title">Fonds d’Investissement &amp; Capital-Développement</h3>
            </div>
            <div class="cat-grid">
              <div v-for="inv in sponsorsCategories.investisseurs" :key="inv" class="partner-tile-navy">
                <span>{{ inv }}</span>
              </div>
            </div>
          </div>

          <!-- 3. Tech & Logistique -->
          <div class="category-block" v-reveal="{ effect: 'up', delay: 80 }">
            <div class="cat-header">
              <span class="cat-gem" aria-hidden="true">✦</span>
              <h3 class="cat-title">Partenaires Technologiques &amp; Logistiques</h3>
            </div>
            <div class="cat-grid">
              <div v-for="tech in sponsorsCategories.technologie" :key="tech" class="partner-tile-navy">
                <span>{{ tech }}</span>
              </div>
            </div>
          </div>

          <!-- 4. Médias -->
          <div id="presse" class="category-block" v-reveal="{ effect: 'up', delay: 100 }">
            <div class="cat-header">
              <span class="cat-gem" aria-hidden="true">✦</span>
              <h3 class="cat-title">Médias &amp; Partenaires de Diffusion</h3>
            </div>
            <div class="cat-grid">
              <div v-for="med in sponsorsCategories.medias" :key="med" class="partner-tile-navy">
                <span>{{ med }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================================
         4. FORMULES & PACKS DE PARTENARIAT (FOND CLAIR PATTERN, SANS BORDURES BOÎTIÈRES)
         ===================================================================== -->
    <section class="packages-section light">
      <div class="wrap">
        <div class="section-head" v-reveal>
          <div class="kicker-group center">
            <span class="kicker-gem" aria-hidden="true">◆</span>
            <span class="section-kicker">Offres &amp; Sponsoring Stratégique</span>
          </div>
          <h2 class="section-title">Pack Partenariats AYIF : Construisons votre partenariat pour l’Afrique</h2>
          <p class="section-intro">
            Des options de sponsoring calibrées pour maximiser votre impact, votre visibilité continentale et vos retombées B2B.
          </p>
        </div>

        <div class="packages-grid" v-reveal="{ effect: 'up', delay: 80 }">
          <div 
            v-for="pkg in partnerPackages" 
            :key="pkg.id" 
            class="pkg-card"
          >
            <div class="pkg-top">
              <span v-if="pkg.badge" class="pkg-badge">{{ pkg.badge }}</span>
              <h3 class="pkg-tier-title">{{ pkg.tier }}</h3>
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

            <a href="#contact-sponsor" class="btn-pkg-gold">
              Demander le dossier sponsor
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================================
         5. FORMULAIRE CONTACT SPONSORING (FOND BLEU NAVY AVEC MOTIF GÉOMÉTRIQUE)
         ===================================================================== -->
    <section id="contact-sponsor" class="sponsor-form-section navy">
      <div class="wrap sp-split">
        <div class="sp-text" v-reveal>
          <div class="kicker-group">
            <span class="kicker-gem gold" aria-hidden="true">◆</span>
            <span class="sub-kicker gold">Accompagnement Sur Mesure</span>
          </div>
          <h2 class="sp-form-title">Construisons votre partenariat pour Cotonou 2026</h2>
          <p class="sp-intro">
            Notre équipe de commissariat général est à votre entière disposition pour élaborer une formule adaptée à vos objectifs stratégiques : visibilité de marque, animation de panel officiel, attribution d'un prix d'innovation ou salon d'exposition VIP.
          </p>
          <div class="contact-direct-cards">
            <div class="c-line-card">
              <span class="c-kicker">Email officiel</span>
              <span class="c-val">sponsors@ayifbenin2026.org</span>
            </div>
            <div class="c-line-card">
              <span class="c-kicker">Comité d'Organisation Bénin</span>
              <span class="c-val">Elieson Business Consulting, Cotonou</span>
            </div>
            <div class="c-line-card">
              <span class="c-kicker">Comité d'Organisation Nigéria</span>
              <span class="c-val">NACCIMA Youth Entrepreneurs, Lagos / Abuja</span>
            </div>
          </div>
        </div>

        <div class="sp-form-col" v-reveal="{ effect: 'up', delay: 100 }">
          <div class="sp-form-card">
            <div v-if="partnerForm.submitted" class="sp-success">
              <div class="success-gem-badge" aria-hidden="true">◆</div>
              <h3 class="success-heading">Demande de Partenariat Enregistrée</h3>
              <p class="success-desc">
                Nous vous remercions pour votre intérêt stratégique. Notre responsable des partenariats et des délégations vous adressera le dossier officiel complet sous 24 heures ouvrées.
              </p>
              <button type="button" class="btn-form-reset" @click="partnerForm.submitted = false">
                Nouvelle demande
              </button>
            </div>

            <form v-else class="partner-form" @submit.prevent="submitPartnerInquiry">
              <h3 class="form-title">Formulaire d’Intérêt Partenariat</h3>
              
              <div class="f-group">
                <label for="pComp">Nom de l’Entreprise ou Institution *</label>
                <input id="pComp" v-model="partnerForm.company" type="text" required placeholder="Ex: Banque Régionale de Développement" class="pure-input" />
              </div>

              <div class="f-group">
                <label for="pName">Nom et Prénom du Contact *</label>
                <input id="pName" v-model="partnerForm.contactName" type="text" required placeholder="Ex: Dr. Aïcha Ouédraogo" class="pure-input" />
              </div>

              <div class="f-group">
                <label for="pEmail">Email professionnel *</label>
                <input id="pEmail" v-model="partnerForm.email" type="email" required placeholder="direction@groupe.com" class="pure-input" />
              </div>

              <div class="f-group">
                <label for="pPhone">Téléphone / WhatsApp</label>
                <input id="pPhone" v-model="partnerForm.phone" type="tel" placeholder="+229 / +234..." class="pure-input" />
              </div>

              <div class="f-group">
                <label for="pTier">Formule pressentie</label>
                <select id="pTier" v-model="partnerForm.selectedTier" class="pure-select">
                  <option value="platine">Partenaire Platine (Exclusivité Majeure)</option>
                  <option value="or">Partenaire Or</option>
                  <option value="argent">Partenaire Argent</option>
                  <option value="media">Partenaire Média &amp; Presse</option>
                  <option value="autre">Sur mesure / Autre</option>
                </select>
              </div>

              <div class="f-group">
                <label for="pMsg">Précisions ou besoins spécifiques</label>
                <textarea id="pMsg" v-model="partnerForm.message" rows="3" placeholder="Indiquez vos attentes clés (stand d'exposition, panel, naming, deal room...)." class="pure-textarea"></textarea>
              </div>

              <button type="submit" class="btn-partner-submit">
                Recevoir le kit de partenariat complet
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- =====================================================================
         6. CANDIDATURE PAYS HÔTE & ORGANISATEUR (FOND CLAIR PATTERN, SANS POINT)
         ===================================================================== -->
    <section id="devenir-organisateur" class="host-country-section light">
      <div class="wrap">
        <div class="host-split">
          <div class="host-info-col" v-reveal>
            <div class="kicker-group">
              <span class="kicker-gem" aria-hidden="true">◆</span>
              <span class="sub-kicker">Prochaine Édition Continentale</span>
            </div>
            <h2 class="host-section-title">Et si ton pays devenait le prochain organisateur ?</h2>
            <p class="host-intro">
              L'Africa Youth Investment Forum voyage à travers les grandes capitales économiques africaines. Après Abuja (Nigéria 2025) et Cotonou (Bénin 2026), le comité international ouvre l'appel aux candidatures officielles pour la 3ème édition.
            </p>
            
            <div class="host-perks-list">
              <div class="perk-item">
                <span class="perk-gem" aria-hidden="true">✦</span>
                <div>
                  <strong>Rayonnement Panafricain Direct</strong>
                  <p>Attirez plus de 800 investisseurs, ministres, bailleurs et fondateurs de plus de 30 pays africains et de la diaspora dans votre capitale.</p>
                </div>
              </div>
              <div class="perk-item">
                <span class="perk-gem" aria-hidden="true">✦</span>
                <div>
                  <strong>Dynamisation de l’Économie Nationale</strong>
                  <p>Mettez en avant vos zones économiques spéciales, vos corridors logistiques et votre jeunesse entrepreneuriale à l'échelle continentale.</p>
                </div>
              </div>
              <div class="perk-item">
                <span class="perk-gem" aria-hidden="true">✦</span>
                <div>
                  <strong>Accompagnement Opérationnel Structuré</strong>
                  <p>Bénéficiez du commissariat général expérimenté d'AYIF pour la programmation, la Deal Room et la logistique protocolaire.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="host-form-col" v-reveal="{ effect: 'up', delay: 100 }">
            <div class="host-form-card">
              <div v-if="hostCountryForm.submitted" class="host-success-box">
                <span class="success-kicker">Candidature &amp; Enregistrement Reçus</span>
                <h3>Dossier Officiel Enregistré</h3>
                <p>
                  Votre proposition pour faire de <strong>{{ hostCountryForm.country }}</strong> le pays hôte ou partenaire officiel a bien été transmise au secrétariat permanent de l'AYIF. Notre commissariat général vous adressera le cahier des charges officiel sous 48h ouvrées.
                </p>
                <div class="payment-ack">
                  <strong>Modalité de règlement sélectionnée :</strong>
                  <p class="pay-choice">{{ hostCountryForm.paymentMethod === 'virement' ? 'Virement bancaire institutionnel (RIB/IBAN transmis par email)' : hostCountryForm.paymentMethod === 'facture' ? 'Facture officielle proforma avec bon de commande étatique' : 'Paiement sécurisé par carte bancaire / Mobile Money' }}</p>
                </div>
                <button type="button" class="btn-host-reset" @click="hostCountryForm.submitted = false">
                  Soumettre une autre demande
                </button>
              </div>

              <form v-else class="host-registration-form" @submit.prevent="submitHostCountry">
                <div class="form-header">
                  <h3>Enregistrement Pays Hôte &amp; Partenaire</h3>
                  <p>Déposez votre candidature pour accueillir l’AYIF ou devenez sponsor institutionnel fondateur.</p>
                </div>

                <div class="f-row">
                  <div class="f-group">
                    <label for="hCountry">Pays Candidat *</label>
                    <input id="hCountry" v-model="hostCountryForm.country" type="text" required placeholder="Ex: Sénégal, Côte d'Ivoire, Rwanda, Cameroun..." class="pure-input-light" />
                  </div>
                  <div class="f-group">
                    <label for="hCity">Ville / Capitale Pressentie</label>
                    <input id="hCity" v-model="hostCountryForm.proposedCity" type="text" placeholder="Ex: Dakar, Abidjan, Kigali, Douala..." class="pure-input-light" />
                  </div>
                </div>

                <div class="f-group">
                  <label for="hOrg">Organisation / Ministère / Chambre de Commerce *</label>
                  <input id="hOrg" v-model="hostCountryForm.organization" type="text" required placeholder="Ex: Ministère du Commerce et de l'Industrie / Patronat" class="pure-input-light" />
                </div>

                <div class="f-row">
                  <div class="f-group">
                    <label for="hContact">Nom et Titre du Responsable *</label>
                    <input id="hContact" v-model="hostCountryForm.contactName" type="text" required placeholder="Ex: S.E. ou M./Mme..." class="pure-input-light" />
                  </div>
                  <div class="f-group">
                    <label for="hRole">Type de Structure</label>
                    <select id="hRole" v-model="hostCountryForm.roleCategory" class="pure-select-light">
                      <option value="ministere">Gouvernement / Ministère</option>
                      <option value="chambre_commerce">Chambre de Commerce &amp; d'Industrie</option>
                      <option value="patronat">Patronat / Confédération Patronale</option>
                      <option value="sponsor_majeur">Groupe Privé / Sponsor Institutionnel</option>
                    </select>
                  </div>
                </div>

                <div class="f-row">
                  <div class="f-group">
                    <label for="hEmail">Email officiel *</label>
                    <input id="hEmail" v-model="hostCountryForm.email" type="email" required placeholder="cabinet@ministere.gouv..." class="pure-input-light" />
                  </div>
                  <div class="f-group">
                    <label for="hPhone">Téléphone / WhatsApp</label>
                    <input id="hPhone" v-model="hostCountryForm.phone" type="tel" placeholder="+..." class="pure-input-light" />
                  </div>
                </div>

                <!-- OPTION DE PAIEMENT / FRAIS DE DOSSIER ET PARTENARIAT -->
                <div class="f-group">
                  <label for="hPay">Modalité de Règlement &amp; Frais de Partenariat *</label>
                  <select id="hPay" v-model="hostCountryForm.paymentMethod" class="pure-select-light">
                    <option value="virement">Virement bancaire institutionnel (Sur compte séquestre AYIF)</option>
                    <option value="facture">Facture officielle proforma avec bon de commande étatique</option>
                    <option value="carte">Carte bancaire internationale / Mobile Money sécurisé</option>
                  </select>
                </div>

                <div class="f-group">
                  <label for="hMsg">Notes préliminaires ou atouts du pays candidat</label>
                  <textarea id="hMsg" v-model="hostCountryForm.message" rows="2" placeholder="Infrastructures d'accueil, salles de conférence, soutiens institutionnels..." class="pure-textarea-light"></textarea>
                </div>

                <button type="submit" class="btn-host-submit">
                  Valider la candidature &amp; Accéder aux modalités
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ==========================================================================
   PAGE PARTENAIRES & SPONSORS — ARCHITECTURE ÉDITORIALE HAUTE-COUTURE
   ALTERNANCE FOND BLEU SOUVERAIN / FOND CLAIR PATTERN CONTINU
   ZÉRO DÉGRADÉ · ZÉRO BORDURE TRONQUANTE (TOP/LEFT/BOTTOM) · ZÉRO ÉMOJI · ZÉRO POINT
   ========================================================================== */
.partners-page {
  --page-pattern: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cpath d='M28 0 L56 28 L28 56 L0 28 Z M28 12 L44 28 L28 44 L12 28 Z M28 23 L33 28 L28 33 L23 28 Z M0 12 L12 0 M44 0 L56 12 M0 44 L12 56 M44 56 L56 44 M0 23 L5 28 L0 33 M56 23 L51 28 L56 33 M23 0 L28 5 L33 0 M23 56 L28 51 L33 56' fill='none' stroke='%23082B55' stroke-width='1.1' stroke-opacity='0.08'/%3E%3C/svg%3E");
  --navy-pattern: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cpath d='M28 0 L56 28 L28 56 L0 28 Z M28 12 L44 28 L28 44 L12 28 Z M28 23 L33 28 L28 33 L23 28 Z M0 12 L12 0 M44 0 L56 12 M0 44 L12 56 M44 56 L56 44 M0 23 L5 28 L0 33 M56 23 L51 28 L56 33 M23 0 L28 5 L33 0 M23 56 L28 51 L33 56' fill='none' stroke='%232EA7F2' stroke-width='1.1' stroke-opacity='0.085'/%3E%3C/svg%3E");
  background-color: var(--bg-page);
  background-image: var(--page-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: var(--text-page);
  border: none;
}

/* Kicker Group Commun */
.kicker-group {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.kicker-group.center {
  justify-content: center;
}

.kicker-gem {
  color: var(--color-gold, #d9a21b);
  font-size: 11px;
}

.sub-kicker,
.section-kicker {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent, #2ea7f2);
}

.sub-kicker.gold,
.section-kicker.gold {
  color: var(--color-gold, #d9a21b);
}

.section-head {
  text-align: center;
  max-width: 820px;
  margin: 0 auto 56px;
}

.section-title {
  font-family: var(--font-serif);
  font-size: clamp(1.9rem, 3.2vw, 2.6rem);
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0 0 14px;
}

.section-intro {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0;
}

.text-white {
  color: #ffffff !important;
}

.text-white-muted {
  color: rgba(255, 255, 255, 0.82) !important;
}

/* --------------------------------------------------------------------------
   1. HERO SECTION PARTENAIRES (FOND BLEU NAVY AVEC PATTERN CONTINU)
   -------------------------------------------------------------------------- */
.part-hero {
  padding-top: 154px;
  padding-bottom: 84px;
  background-color: var(--navy-bg, #082b55);
  background-image: var(--navy-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: var(--navy-text, #ffffff);
  border: none;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(2.2rem, 4.2vw, 3.25rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.025em;
  margin: 0 0 20px;
  color: #ffffff;
  max-width: 960px;
}

.hero-lead {
  font-family: var(--font-sans);
  font-size: clamp(1.05rem, 1.8vw, 1.18rem);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.82);
  max-width: 820px;
  margin: 0 0 32px;
}

.meta-strip {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.meta-capsule {
  display: inline-flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  padding: 8px 18px;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 600;
  border: none;
}

.meta-capsule.gold {
  background-color: rgba(217, 162, 27, 0.18);
  color: var(--color-gold, #d9a21b);
}

/* --------------------------------------------------------------------------
   2. SECTION COMITÉ D'ORGANISATION OFFICIEL (FOND CLAIR, SANS BORDER-LEFT, SANS POINT)
   -------------------------------------------------------------------------- */
.official-delegation-section {
  padding: 92px 0 104px;
  background-color: var(--bg-page);
  background-image: var(--page-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  border: none;
}

/* BANDEAU REGISTRE PROTOCOLAIRE : ZÉRO BORDER-LEFT, ZÉRO POINT */
.protocol-registry-strip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: rgba(8, 43, 85, 0.04);
  border: none;
  border-radius: 14px;
  padding: 12px 24px;
  margin-top: 24px;
  flex-wrap: wrap;
  text-align: left;
}

.registry-badge-title {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold, #d9a21b);
  background-color: rgba(217, 162, 27, 0.14);
  padding: 6px 14px;
  border-radius: 999px;
  border: none;
}

.registry-notice {
  font-family: var(--font-sans);
  font-size: 13.5px;
  color: var(--text-muted);
  font-weight: 600;
  line-height: 1.5;
  margin: 0;
}

/* Grille des membres du Comité d'Organisation */
.delegation-executive-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  width: 100%;
}

.delegation-prestige-plate {
  background-color: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: 26px 28px;
  display: flex;
  align-items: flex-start;
  gap: 22px;
  box-shadow: 0 8px 26px rgba(8, 43, 85, 0.04);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border: none;
}

.delegation-prestige-plate:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(8, 43, 85, 0.08);
}

.del-avatar-frame {
  width: 104px;
  height: 128px;
  border-radius: 14px;
  overflow: hidden;
  flex-shrink: 0;
  background-color: var(--navy-bg, #082b55);
}

.del-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.4s ease;
}

.delegation-prestige-plate:hover .del-avatar {
  transform: scale(1.05);
}

.del-info-col {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 0;
}

.del-badges-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.del-tier-badge {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background-color: rgba(217, 162, 27, 0.14);
  color: var(--color-gold, #d9a21b);
  padding: 4px 10px;
  border-radius: 999px;
  border: none;
}

.del-country-badge {
  font-family: var(--font-sans);
  font-size: 11px;
  color: var(--text-muted);
  font-weight: 700;
  background-color: rgba(8, 43, 85, 0.04);
  padding: 4px 10px;
  border-radius: 999px;
  border: none;
}

.del-org-title {
  font-family: var(--font-sans);
  font-size: 16.5px;
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.35;
  margin: 0 0 8px;
  word-break: break-word;
}

.del-patron-block {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: rgba(8, 43, 85, 0.03);
  margin-bottom: 10px;
  border: none;
}

.del-patron-name {
  font-family: var(--font-serif);
  font-size: 14.5px;
  font-weight: 700;
  color: var(--text-page);
  line-height: 1.25;
}

.del-patron-role {
  font-family: var(--font-sans);
  font-size: 12px;
  color: var(--color-accent, #2ea7f2);
  font-weight: 600;
  line-height: 1.35;
}

.del-desc-text {
  font-family: var(--font-sans);
  font-size: 12.5px;
  line-height: 1.55;
  color: var(--text-muted);
  margin: 0;
}

/* --------------------------------------------------------------------------
   3. SECTION ÉCOSYSTÈME DES PARTENAIRES (FOND BLEU NAVY AVEC MOTIF GÉOMÉTRIQUE)
   -------------------------------------------------------------------------- */
.partners-ecosystem-section.navy {
  padding: 104px 0;
  background-color: var(--navy-bg, #082b55);
  background-image: var(--navy-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: #ffffff;
  border: none;
}

.ecosystem-categories-stack {
  display: flex;
  flex-direction: column;
  gap: 56px;
}

.category-block {
  display: flex;
  flex-direction: column;
}

.cat-header {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 20px;
}

.cat-gem {
  color: var(--color-gold, #d9a21b);
  font-size: 12px;
}

.cat-title {
  font-family: var(--font-serif);
  font-size: 1.45rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.015em;
  margin: 0;
}

.cat-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.partner-tile-navy {
  background-color: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
  padding: 26px 20px;
  min-height: 104px;
  display: grid;
  place-items: center;
  text-align: center;
  border-radius: 14px;
  font-family: var(--font-serif);
  font-size: 15.5px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  border: none;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.15);
  transition: transform 0.25s ease, background-color 0.25s ease;
}

.partner-tile-navy:hover {
  background-color: rgba(255, 255, 255, 0.12);
  transform: translateY(-3px);
  color: var(--color-gold, #d9a21b);
}

/* --------------------------------------------------------------------------
   4. SECTION FORMULES & PACKS (FOND CLAIR AVEC MOTIF GÉOMÉTRIQUE)
   -------------------------------------------------------------------------- */
.packages-section.light {
  padding: 104px 0;
  background-color: var(--bg-page);
  background-image: var(--page-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  border: none;
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.pkg-card {
  padding: 36px 28px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(8px);
  box-shadow: 0 10px 32px rgba(8, 43, 85, 0.05);
  display: flex;
  flex-direction: column;
  border: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.pkg-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 44px rgba(8, 43, 85, 0.1);
}

.pkg-badge {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 10.5px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-gold, #d9a21b);
  background-color: rgba(217, 162, 27, 0.14);
  padding: 4px 10px;
  border-radius: 999px;
  margin-bottom: 12px;
  border: none;
}

.pkg-tier-title {
  font-family: var(--font-serif);
  font-size: 1.55rem;
  font-weight: 700;
  margin: 0 0 10px;
  color: var(--text-page);
  line-height: 1.2;
}

.pkg-summary {
  font-family: var(--font-sans);
  font-size: 13.5px;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0 0 20px;
  min-height: 58px;
}

.pkg-prices {
  padding: 16px 0;
  margin-bottom: 24px;
  border: none;
  background-color: rgba(8, 43, 85, 0.03);
  border-radius: 12px;
  text-align: center;
}

.price-xof {
  font-family: var(--font-serif);
  font-size: 1.45rem;
  font-weight: 800;
  color: var(--color-accent, #2ea7f2);
  line-height: 1.15;
}

.price-usd {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-muted);
  margin-top: 4px;
}

.pkg-benefits {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.pkg-benefits li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-family: var(--font-sans);
  font-size: 13px;
  color: var(--text-page);
  line-height: 1.45;
}

.check-svg {
  width: 16px;
  height: 16px;
  min-width: 16px;
  color: var(--color-gold, #d9a21b);
  margin-top: 1px;
}

.btn-pkg-gold {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--navy-bg, #082b55);
  color: var(--color-gold, #d9a21b);
  padding: 14px 20px;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 800;
  text-decoration: none;
  border: none;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.btn-pkg-gold:hover {
  background-color: #051d3b;
  transform: translateY(-2px);
}

/* --------------------------------------------------------------------------
   5. SECTION CONTACT SPONSORING (FOND BLEU NAVY AVEC MOTIF GÉOMÉTRIQUE)
   -------------------------------------------------------------------------- */
.sponsor-form-section.navy {
  padding: 104px 0;
  background-color: var(--navy-bg, #082b55);
  background-image: var(--navy-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: #ffffff;
  border: none;
}

.sp-split {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 64px;
  align-items: start;
}

.sp-form-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 3.2vw, 2.75rem);
  font-weight: 700;
  margin: 0 0 16px;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.sp-intro {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 32px;
}

.contact-direct-cards {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.c-line-card {
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  padding: 16px 20px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: none;
}

.c-kicker {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-gold, #d9a21b);
}

.c-val {
  font-family: var(--font-sans);
  font-size: 14.5px;
  font-weight: 600;
  color: #ffffff;
}

/* Formulaire Épuré Translucide */
.sp-form-card {
  background-color: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(14px);
  padding: 44px 48px;
  border-radius: 24px;
  border: none;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.28);
}

.form-title {
  font-family: var(--font-serif);
  font-size: 1.45rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 20px;
}

.f-group {
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.f-group label {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
}

.pure-input,
.pure-select,
.pure-textarea {
  width: 100%;
  padding: 14px 18px;
  font-family: var(--font-sans);
  font-size: 14.5px;
  border: none;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  outline: none;
  box-sizing: border-box;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.pure-select option {
  background-color: var(--navy-bg, #082b55);
  color: #ffffff;
}

.pure-input::placeholder,
.pure-textarea::placeholder {
  color: rgba(255, 255, 255, 0.45);
}

.pure-input:focus,
.pure-select:focus,
.pure-textarea:focus {
  background-color: rgba(255, 255, 255, 0.14);
  box-shadow: 0 0 0 2px var(--color-gold, #d9a21b);
}

.btn-partner-submit {
  width: 100%;
  padding: 16px;
  border-radius: 999px;
  background-color: var(--color-gold, #d9a21b);
  color: var(--navy-bg, #082b55);
  font-family: var(--font-sans);
  font-size: 14.5px;
  font-weight: 800;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.btn-partner-submit:hover {
  background-color: #c49114;
  transform: translateY(-2px);
}

.sp-success {
  padding: 32px 10px;
  text-align: center;
}

.success-gem-badge {
  width: 52px;
  height: 52px;
  border-radius: 999px;
  background-color: rgba(217, 162, 27, 0.18);
  color: var(--color-gold, #d9a21b);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px;
  font-size: 18px;
}

.success-heading {
  font-family: var(--font-serif);
  font-size: 1.65rem;
  color: #ffffff;
  margin: 0 0 12px;
}

.success-desc {
  font-family: var(--font-sans);
  color: rgba(255, 255, 255, 0.85);
  font-size: 15px;
  line-height: 1.6;
  margin: 0 0 28px;
}

.btn-form-reset {
  background-color: var(--color-gold, #d9a21b);
  color: var(--navy-bg, #082b55);
  padding: 14px 28px;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 800;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.btn-form-reset:hover {
  transform: translateY(-2px);
}

/* --------------------------------------------------------------------------
   6. SECTION PAYS HÔTE & ENREGISTREMENT (FOND CLAIR PATTERN, SANS POINT)
   -------------------------------------------------------------------------- */
.host-country-section.light {
  padding: 104px 0;
  background-color: var(--bg-page);
  background-image: var(--page-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  border: none;
}

.host-split {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 64px;
  align-items: flex-start;
}

.host-section-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 3.2vw, 2.75rem);
  font-weight: 700;
  color: var(--text-page);
  margin: 0 0 16px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.host-intro {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0 0 32px;
}

.host-perks-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.perk-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

/* Typographic gem replaces colored bullet dot */
.perk-gem {
  color: var(--color-gold, #d9a21b);
  font-size: 12px;
  margin-top: 4px;
  flex-shrink: 0;
}

.perk-item strong {
  display: block;
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 700;
  color: var(--text-page);
  margin-bottom: 4px;
}

.perk-item p {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 13.5px;
  color: var(--text-muted);
  line-height: 1.55;
}

/* Formulaire Pays Hôte en Carte Vitreuse Blanche */
.host-form-card {
  background-color: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 44px 44px;
  box-shadow: 0 12px 36px rgba(8, 43, 85, 0.06);
  border: none;
}

.host-registration-form .form-header {
  margin-bottom: 24px;
  border: none;
}

.host-registration-form .form-header h3 {
  font-family: var(--font-serif);
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--text-page);
  margin: 0 0 6px;
}

.host-registration-form .form-header p {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 13.5px;
  color: var(--text-muted);
}

.f-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.pure-input-light,
.pure-select-light,
.pure-textarea-light {
  width: 100%;
  padding: 13px 16px;
  font-family: var(--font-sans);
  font-size: 14px;
  border: none;
  border-radius: 12px;
  background-color: rgba(8, 43, 85, 0.04);
  color: var(--text-page);
  outline: none;
  box-sizing: border-box;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.pure-input-light:focus,
.pure-select-light:focus,
.pure-textarea-light:focus {
  background-color: #ffffff;
  box-shadow: 0 0 0 2px var(--color-accent, #2ea7f2);
}

.btn-host-submit {
  width: 100%;
  padding: 16px;
  border-radius: 999px;
  background-color: var(--navy-bg, #082b55);
  color: var(--color-gold, #d9a21b);
  font-family: var(--font-sans);
  font-size: 14.5px;
  font-weight: 800;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.btn-host-submit:hover {
  background-color: #051d3b;
  transform: translateY(-2px);
}

.host-success-box {
  padding: 32px 10px;
  text-align: center;
}

.success-kicker {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gold, #d9a21b);
  background-color: rgba(217, 162, 27, 0.14);
  padding: 4px 12px;
  border-radius: 999px;
  margin-bottom: 14px;
  border: none;
}

.host-success-box h3 {
  font-family: var(--font-serif);
  font-size: 1.65rem;
  color: var(--text-page);
  margin: 0 0 12px;
}

.host-success-box p {
  font-family: var(--font-sans);
  color: var(--text-muted);
  font-size: 14.5px;
  line-height: 1.55;
  margin: 0 0 20px;
}

.payment-ack {
  background-color: rgba(8, 43, 85, 0.04);
  padding: 16px 20px;
  border-radius: 12px;
  margin-bottom: 24px;
  text-align: left;
  border: none;
}

.payment-ack strong {
  display: block;
  font-family: var(--font-sans);
  font-size: 11.5px;
  text-transform: uppercase;
  color: var(--text-muted);
  letter-spacing: 0.08em;
  margin-bottom: 4px;
}

.pay-choice {
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 700;
  color: var(--color-accent, #2ea7f2);
  margin: 0;
}

.btn-host-reset {
  background-color: var(--navy-bg, #082b55);
  color: var(--color-gold, #d9a21b);
  padding: 14px 26px;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 800;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.btn-host-reset:hover {
  transform: translateY(-2px);
}

/* --------------------------------------------------------------------------
   7. RESPONSIVE DESIGN FLUIDE
   -------------------------------------------------------------------------- */
@media (max-width: 1024px) {
  .delegation-executive-grid,
  .sp-split,
  .host-split {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .cat-grid,
  .packages-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 680px) {
  .cat-grid,
  .packages-grid {
    grid-template-columns: 1fr;
  }

  .f-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .delegation-prestige-plate {
    flex-direction: column;
    align-items: stretch;
  }

  .del-avatar-frame {
    width: 100%;
    height: 180px;
  }

  .sp-form-card,
  .host-form-card {
    padding: 32px 20px;
  }
}
</style>
