<script setup lang="ts">
import { ref, computed } from 'vue'
import { ticketTiers, EVENT_DATES_LABEL, EVENT_LOCATION } from '../data/mockData'
import type { TicketTier } from '../types'

useHead({
  title: 'Billetterie & Réservation — AYIF Bénin 2026',
  meta: [
    {
      name: 'description',
      content: 'Réservez votre pass officiel pour l’Africa Youth Investment Forum (AYIF) Cotonou 2026. Pass Jeune Entrepreneur, Délégué Business, VIP et Investisseur.'
    }
  ]
})

// Devise active
const currency = ref<'XOF' | 'USD'>('XOF')

// Pass sélectionné (par défaut le plus populaire)
const selectedTicketId = ref<string>('delegue-standard')
const quantity = ref<number>(1)

const selectedTicket = computed<TicketTier>(() => {
  return (ticketTiers.find(t => t.id === selectedTicketId.value) || ticketTiers[0]) as TicketTier
})

// Calcul du montant
const unitPrice = computed(() => {
  return currency.value === 'XOF' ? selectedTicket.value.priceXOF : selectedTicket.value.priceUSD
})

const subtotal = computed(() => {
  return unitPrice.value * quantity.value
})

const formattedPrice = (price: number, curr: 'XOF' | 'USD') => {
  if (curr === 'XOF') {
    return `${price.toLocaleString('fr-FR')} FCFA`
  }
  return `$${price.toLocaleString('en-US')}`
}

// Formulaire participant
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: 'Bénin',
  organization: '',
  role: '',
  interests: ['investment', 'b2b'],
  paymentMethod: 'card' as 'card' | 'momo' | 'bank',
  agreeTerms: true
})

const countries = [
  'Bénin', 'Nigeria', 'Sénégal', 'Côte d’Ivoire', 'Ghana', 'Togo',
  'Burkina Faso', 'Niger', 'Cameroun', 'Mali', 'Guinée', 'Rwanda',
  'Kenya', 'Afrique du Sud', 'France', 'États-Unis', 'Autre'
]

// Statut de soumission & Confirmation
const isSubmitting = ref(false)
const isConfirmed = ref(false)
const bookingReference = ref('')

const handleReservation = () => {
  if (!form.value.firstName || !form.value.lastName || !form.value.email || !form.value.phone) {
    alert('Veuillez renseigner les champs obligatoires (Nom, Prénom, Email, Téléphone).')
    return
  }

  isSubmitting.value = true
  setTimeout(() => {
    bookingReference.value = `AYIF26-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
    isSubmitting.value = false
    isConfirmed.value = true
    if (import.meta.client) {
      window.scrollTo({ top: 100, behavior: 'smooth' })
    }
  }, 600)
}

const resetBooking = () => {
  isConfirmed.value = false
  bookingReference.value = ''
  form.value.firstName = ''
  form.value.lastName = ''
  form.value.email = ''
  form.value.phone = ''
  form.value.organization = ''
  form.value.role = ''
}

// FAQ
const faqList = [
  {
    q: 'Comment obtenir un visa pour assister au forum à Cotonou ?',
    a: 'Le Bénin dispose d’une procédure d’e-Visa entièrement dématérialisée et simplifiée (delivrée sous 48h sur le portail officiel de l’immigration béninoise). Dès validation de votre inscription, une lettre d’invitation officielle AYIF vous sera transmise pour faciliter vos démarches.'
  },
  {
    q: 'Puis-je transférer mon pass à un confrère en cas d’empêchement ?',
    a: 'Oui, les pass sont cessibles jusqu’à 10 jours ouvrés avant l’ouverture du forum (avant le 20 Novembre 2026). Il suffit d’adresser une demande avec la référence de votre réservation au comité d’accréditation.'
  },
  {
    q: 'Quels sont les repas et services inclus avec mon pass ?',
    a: 'Tous les pass incluent les pauses-café et les déjeuners de networking officiels durant les 3 journées de l’événement (03 au 05 Décembre 2026). Les Pass VIP et Investisseurs incluent en supplément le Dîner de Gala AYIF & remise des Awards du 05 Décembre 2026, les visites de terrain (GDIZ, Des Fruits Tillous, Ouidah) et les navettes VIP aéroport.'
  },
  {
    q: 'Comment s’effectue la sélection pour les rendez-vous d’affaires B2B ?',
    a: 'À partir du 15 Octobre 2026, chaque titulaire d’un pass reçoit un accès privilégié à la plateforme de matchmaking B2B de l’AYIF pour consulter la liste des délégations et planifier ses créneaux de 20 minutes.'
  }
]
const openFaq = ref<number | null>(0)
const toggleFaq = (idx: number) => {
  openFaq.value = openFaq.value === idx ? null : idx
}
</script>

<template>
  <div class="reservation-page">
    <!-- HERO HEADER -->
    <section class="res-hero navy">
      <div class="wrap">
        <div class="res-kicker-wrap">
          <span class="res-kicker">Billetterie &amp; Accréditations</span>
          <span class="res-pill">{{ EVENT_DATES_LABEL }}</span>
        </div>
        <h1 class="res-title">Réserver mon Pass AYIF 2026</h1>
        <p class="res-lead">
          Sélectionnez la formule adaptée à votre profil et rejoignez l’écosystème d’investissement le plus dynamique d’Afrique au Palais des Congrès de Cotonou.
        </p>

        <!-- Sélecteur de Devise -->
        <div class="currency-switch-bar">
          <span class="curr-label">Devise d'affichage :</span>
          <div class="curr-toggle">
            <button 
              type="button" 
              class="curr-btn" 
              :class="{ active: currency === 'XOF' }"
              @click="currency = 'XOF'"
            >
              FCFA (XOF)
            </button>
            <button 
              type="button" 
              class="curr-btn" 
              :class="{ active: currency === 'USD' }"
              @click="currency = 'USD'"
            >
              USD ($)
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ÉCRAN DE CONFIRMATION SI SUCCÈS -->
    <section v-if="isConfirmed" class="confirmed-section">
      <div class="wrap">
        <div class="badge-card navy">
          <div class="badge-status">
            <span class="badge-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="badge-svg" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
            <span class="badge-status-text">Réservation confirmée avec succès</span>
          </div>

          <div class="badge-header">
            <h2>Votre Pass Officiel AYIF Bénin 2026</h2>
            <p class="ref-code">Référence d'accréditation : <strong>{{ bookingReference }}</strong></p>
          </div>

          <div class="ticket-visual">
            <div class="tv-left">
              <span class="tv-tag">{{ selectedTicket.name }}</span>
              <h3>{{ form.firstName }} {{ form.lastName }}</h3>
              <p class="tv-meta">{{ form.role || 'Délégué' }} · {{ form.organization || 'Entreprise' }}</p>
              <div class="tv-info-grid">
                <div>
                  <small>Dates</small>
                  <strong>{{ EVENT_DATES_LABEL }}</strong>
                </div>
                <div>
                  <small>Lieu</small>
                  <strong>Palais des Congrès, Cotonou</strong>
                </div>
                <div>
                  <small>Pays</small>
                  <strong>{{ form.country }}</strong>
                </div>
                <div>
                  <small>Nombre de places</small>
                  <strong>{{ quantity }} place(s)</strong>
                </div>
              </div>
            </div>

            <div class="tv-right">
              <!-- Mock QR Code SVG -->
              <div class="qr-placeholder" aria-label="QR Code d'accès">
                <svg viewBox="0 0 100 100" class="qr-svg" fill="currentColor">
                  <!-- Pattern géométrique simulant un QR code sans image externe -->
                  <rect x="5" y="5" width="26" height="26" fill="none" stroke="currentColor" stroke-width="4" />
                  <rect x="12" y="12" width="12" height="12" fill="currentColor" />
                  <rect x="69" y="5" width="26" height="26" fill="none" stroke="currentColor" stroke-width="4" />
                  <rect x="76" y="12" width="12" height="12" fill="currentColor" />
                  <rect x="5" y="69" width="26" height="26" fill="none" stroke="currentColor" stroke-width="4" />
                  <rect x="12" y="76" width="12" height="12" fill="currentColor" />
                  <rect x="38" y="10" width="8" height="8" fill="currentColor" />
                  <rect x="50" y="18" width="8" height="8" fill="currentColor" />
                  <rect x="42" y="32" width="16" height="8" fill="currentColor" />
                  <rect x="10" y="44" width="8" height="16" fill="currentColor" />
                  <rect x="26" y="52" width="8" height="8" fill="currentColor" />
                  <rect x="44" y="50" width="12" height="12" fill="currentColor" />
                  <rect x="68" y="42" width="10" height="8" fill="currentColor" />
                  <rect x="82" y="52" width="8" height="14" fill="currentColor" />
                  <rect x="60" y="70" width="8" height="18" fill="currentColor" />
                  <rect x="76" y="76" width="14" height="8" fill="currentColor" />
                </svg>
                <span class="qr-label">{{ bookingReference }}</span>
              </div>
            </div>
          </div>

          <div class="badge-actions">
            <button type="button" class="btn primary" @click="resetBooking">
              Effectuer une autre réservation
            </button>
            <NuxtLink to="/programme" class="btn ghost-light">
              Consulter mon agenda de sessions
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESSUS DE RÉSERVATION PRINCIPAL -->
    <section v-else class="res-body">
      <div class="wrap">
        <!-- ÉTAPE 1 : CHOIX DU PASS -->
        <div class="step-header">
          <span class="step-num">Étape 1</span>
          <h2>Sélectionnez votre formule</h2>
          <p class="step-desc">Tous les pass donnent accès aux plénières, à l'espace d'exposition et aux déjeuners officiels.</p>
        </div>

        <div class="tiers-grid">
          <div 
            v-for="t in ticketTiers" 
            :key="t.id"
            class="tier-card"
            :class="{ 
              selected: selectedTicketId === t.id,
              popular: t.popular 
            }"
            @click="selectedTicketId = t.id"
          >
            <div class="tier-top">
              <span v-if="t.badge" class="tier-badge">{{ t.badge }}</span>
              <h3 class="tier-name">{{ t.name }}</h3>
              <p class="tier-desc">{{ t.description }}</p>
            </div>

            <div class="tier-price-box">
              <span class="tier-price">
                {{ formattedPrice(currency === 'XOF' ? t.priceXOF : t.priceUSD, currency) }}
              </span>
              <span class="tier-period">/ participant</span>
            </div>

            <ul class="tier-features">
              <li v-for="feat in t.features" :key="feat">
                <svg class="feat-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="4 10 8 14 16 6"></polyline>
                </svg>
                <span>{{ feat }}</span>
              </li>
            </ul>

            <button 
              type="button" 
              class="tier-select-btn"
              :class="{ 'btn-selected': selectedTicketId === t.id }"
            >
              {{ selectedTicketId === t.id ? 'Formule sélectionnée' : 'Choisir cette formule' }}
            </button>
          </div>
        </div>

        <!-- ÉTAPE 2 : FORMULAIRE & RÉCAPITULATIF -->
        <div class="checkout-split">
          <!-- FORMULAIRE -->
          <div class="checkout-form-side">
            <div class="step-header">
              <span class="step-num">Étape 2</span>
              <h2>Coordonnées du participant</h2>
              <p class="step-desc">Renseignez les informations de la personne accréditée pour l'émission du badge nominatif.</p>
            </div>

            <form class="booking-form" @submit.prevent="handleReservation">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">Prénom *</label>
                  <input 
                    id="firstName" 
                    v-model="form.firstName" 
                    type="text" 
                    required 
                    placeholder="Ex: Jean"
                  />
                </div>
                <div class="form-group">
                  <label for="lastName">Nom de famille *</label>
                  <input 
                    id="lastName" 
                    v-model="form.lastName" 
                    type="text" 
                    required 
                    placeholder="Ex: Dossou"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email">Adresse email professionnelle *</label>
                  <input 
                    id="email" 
                    v-model="form.email" 
                    type="email" 
                    required 
                    placeholder="jean.dossou@entreprise.com"
                  />
                </div>
                <div class="form-group">
                  <label for="phone">Numéro WhatsApp / Téléphone *</label>
                  <input 
                    id="phone" 
                    v-model="form.phone" 
                    type="tel" 
                    required 
                    placeholder="+229 97 00 00 00"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="organization">Entreprise / Organisation *</label>
                  <input 
                    id="organization" 
                    v-model="form.organization" 
                    type="text" 
                    required 
                    placeholder="Ex: Sahel FinTech"
                  />
                </div>
                <div class="form-group">
                  <label for="role">Fonction / Titre *</label>
                  <input 
                    id="role" 
                    v-model="form.role" 
                    type="text" 
                    required 
                    placeholder="Ex: Directeur Général / Fondateur"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="country">Pays d'origine ou de résidence *</label>
                <select id="country" v-model="form.country">
                  <option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
                </select>
              </div>

              <!-- Objectifs & Attentes B2B -->
              <div class="form-group">
                <label class="group-label">Vos priorités lors de l'AYIF 2026 :</label>
                <div class="checkbox-grid">
                  <label class="check-item">
                    <input v-model="form.interests" type="checkbox" value="investment" />
                    <span>Rencontrer des fonds / Lever du capital</span>
                  </label>
                  <label class="check-item">
                    <input v-model="form.interests" type="checkbox" value="b2b" />
                    <span>Nouer des partenariats commerciaux B2B</span>
                  </label>
                  <label class="check-item">
                    <input v-model="form.interests" type="checkbox" value="expansion" />
                    <span>Développer mes activités au Bénin et en zone CEDEAO</span>
                  </label>
                  <label class="check-item">
                    <input v-model="form.interests" type="checkbox" value="tech" />
                    <span>Découvrir des solutions innovantes et agritech</span>
                  </label>
                </div>
              </div>

              <!-- Moyen de Paiement -->
              <div class="form-group">
                <label class="group-label">Moyen de règlement préféré :</label>
                <div class="payment-methods">
                  <label class="pay-option" :class="{ active: form.paymentMethod === 'card' }">
                    <div class="pay-top-row">
                      <input v-model="form.paymentMethod" type="radio" value="card" />
                      <svg class="pay-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                        <line x1="2" y1="10" x2="22" y2="10"></line>
                      </svg>
                      <span class="pay-title">Carte Bancaire (Visa / Mastercard)</span>
                    </div>
                    <span class="pay-sub">Règlement en ligne sécurisé avec reçu instantané</span>
                  </label>

                  <label class="pay-option" :class="{ active: form.paymentMethod === 'momo' }">
                    <div class="pay-top-row">
                      <input v-model="form.paymentMethod" type="radio" value="momo" />
                      <svg class="pay-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <rect x="6" y="2" width="12" height="20" rx="2"></rect>
                        <line x1="12" y1="18" x2="12.01" y2="18"></line>
                      </svg>
                      <span class="pay-title">Mobile Money (Bénin &amp; UEMOA)</span>
                    </div>
                    <span class="pay-sub">MTN Moov Bénin, Wave, Orange Money</span>
                  </label>

                  <label class="pay-option" :class="{ active: form.paymentMethod === 'bank' }">
                    <div class="pay-top-row">
                      <input v-model="form.paymentMethod" type="radio" value="bank" />
                      <svg class="pay-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z"></path>
                      </svg>
                      <span class="pay-title">Virement Bancaire Institutionnel</span>
                    </div>
                    <span class="pay-sub">Facture proforma transmise sous 24h</span>
                  </label>
                </div>
              </div>

              <div class="terms-wrap">
                <label class="check-item">
                  <input v-model="form.agreeTerms" type="checkbox" required />
                  <span>J’accepte les conditions générales de participation et la politique de confidentialité de l’AYIF 2026.</span>
                </label>
              </div>

              <button 
                type="submit" 
                class="btn primary submit-booking-btn" 
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Traitement de votre commande...' : `Confirmer et réserver (${formattedPrice(subtotal, currency)})` }}
              </button>
            </form>
          </div>

          <!-- RÉCAPITULATIF DE COMMANDE -->
          <div class="checkout-summary-side">
            <div class="summary-card navy">
              <h3 class="sum-title">Récapitulatif de commande</h3>

              <div class="sum-item-box">
                <div class="sum-item-head">
                  <span class="sum-badge">{{ selectedTicket.badge || 'Formule Choisie' }}</span>
                  <h4 class="sum-name">{{ selectedTicket.name }}</h4>
                </div>

                <div class="sum-qty-selector">
                  <span class="qty-label">Nombre de pass :</span>
                  <div class="qty-controls">
                    <button 
                      type="button" 
                      class="qty-btn" 
                      :disabled="quantity <= 1"
                      aria-label="Diminuer le nombre de pass"
                      @click="quantity > 1 ? quantity-- : null"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="qty-svg" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                    <span class="qty-val">{{ quantity }}</span>
                    <button 
                      type="button" 
                      class="qty-btn" 
                      :disabled="quantity >= 10"
                      aria-label="Augmenter le nombre de pass"
                      @click="quantity < 10 ? quantity++ : null"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="qty-svg" aria-hidden="true">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="sum-price-row">
                  <span>Prix unitaire :</span>
                  <strong>{{ formattedPrice(unitPrice, currency) }}</strong>
                </div>
              </div>

              <div class="sum-breakdown">
                <div class="row">
                  <span>Sous-total ({{ quantity }} pass)</span>
                  <span>{{ formattedPrice(subtotal, currency) }}</span>
                </div>
                <div class="row">
                  <span>TVA &amp; Droits d'accréditation</span>
                  <span class="free-text">Inclus</span>
                </div>
                <div class="row">
                  <span>Dossier officiel &amp; Networking</span>
                  <span class="free-text">Inclus</span>
                </div>
                <div class="row total-row">
                  <span>Montant Total</span>
                  <span class="total-amount">{{ formattedPrice(subtotal, currency) }}</span>
                </div>
              </div>

              <div class="sum-guarantees">
                <div class="guar-item">
                  <span class="guar-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="guar-svg">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </span>
                  <span>Paiement sécurisé et crypté SSL 256 bits</span>
                </div>
                <div class="guar-item">
                  <span class="guar-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="guar-svg">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                  </span>
                  <span>Lettre d'invitation officielle envoyée sous 24h</span>
                </div>
                <div class="guar-item">
                  <span class="guar-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="guar-svg">
                      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                      <path d="M3 3v5h5"></path>
                      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                      <path d="M16 16h5v5"></path>
                    </svg>
                  </span>
                  <span>Pass cessible et modifiable sans frais jusqu'au 20 Novembre 2026</span>
                </div>
              </div>

              <div class="sum-venue">
                <strong>Lieu de retrait du badge :</strong>
                <p>Guichet d'enregistrement AYIF, Hall Principal du Palais des Congrès de Cotonou dès le 02 Décembre 2026 à 14h00.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION FAQ -->
    <section class="res-faq-section">
      <div class="wrap">
        <div class="faq-head">
          <span class="faq-kicker">Questions Fréquentes</span>
          <h2>Informations Pratiques &amp; Billetterie</h2>
          <p class="intro">Tout ce que vous devez savoir pour préparer votre venue à Cotonou.</p>
        </div>

        <div class="faq-accordion">
          <div 
            v-for="(item, idx) in faqList" 
            :key="item.q" 
            class="faq-card"
            :class="{ active: openFaq === idx }"
          >
            <button 
              type="button" 
              class="faq-btn" 
              :aria-expanded="openFaq === idx"
              @click="toggleFaq(idx)"
            >
              <span>{{ item.q }}</span>
              <span class="faq-icon" aria-hidden="true">
                <svg v-if="openFaq !== idx" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="faq-svg">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="faq-svg">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </span>
            </button>
            <div v-show="openFaq === idx" class="faq-content">
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.reservation-page {
  background-color: var(--bg-page);
  background-image: var(--bg-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: var(--text-page);
}

.res-hero {
  padding-top: 150px;
  padding-bottom: 70px;
  background-color: var(--navy-bg);
  color: var(--navy-text);
  border-bottom: 1px solid var(--navy-line);
}

.res-kicker-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}

.res-kicker {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
}

.res-pill {
  font-size: 12px;
  font-weight: 700;
  color: var(--color-accent);
  background-color: rgba(46, 167, 242, 0.1);
  border: 1px solid rgba(46, 167, 242, 0.3);
  padding: 3px 10px;
  border-radius: 99px;
}

.res-title {
  font-size: var(--fs-h1);
  font-weight: 800;
  line-height: 1.05;
  margin: 0 0 16px;
  color: var(--navy-text);
}

.res-lead {
  max-width: 680px;
  font-size: var(--fs-lead);
  line-height: 1.5;
  color: var(--navy-muted);
  margin: 0 0 36px;
}

.currency-switch-bar {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-top: 24px;
  border-top: 1px solid var(--navy-line);
}

.curr-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--navy-muted);
}

.curr-toggle {
  display: inline-flex;
  border: 1px solid var(--navy-line);
  border-radius: 99px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.05);
}

.curr-btn {
  background: none;
  border: none;
  color: var(--navy-muted);
  padding: 8px 18px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.curr-btn.active {
  background-color: var(--ayif-blue);
  color: var(--ayif-white);
}

/* Section Body & Étapes */
.res-body {
  padding: 72px 0 96px;
}

.step-header {
  margin-bottom: 36px;
}

.step-num {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent);
  background-color: rgba(46, 167, 242, 0.1);
  padding: 3px 10px;
  border-radius: 4px;
  margin-bottom: 8px;
}

.step-header h2 {
  font-size: var(--fs-h2);
  font-weight: 700;
  margin: 0 0 8px;
  color: var(--text-page);
}

.step-desc {
  margin: 0;
  font-size: var(--fs-body);
  color: var(--text-muted);
}

/* Grille des Pass */
.tiers-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 72px;
}

.tier-card {
  background-color: var(--bg-surface);
  border: 2px solid var(--border-line);
  border-radius: 6px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.tier-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent);
}

.tier-card.selected {
  border-color: var(--ayif-blue);
  background-color: var(--bg-surface);
  box-shadow: 0 0 0 1px var(--ayif-blue);
}

.tier-card.popular {
  border-color: var(--color-accent);
}

.tier-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-accent);
  background-color: rgba(46, 167, 242, 0.12);
  padding: 3px 8px;
  border-radius: 99px;
  margin-bottom: 12px;
}

.tier-name {
  font-family: var(--font-serif);
  font-size: var(--fs-h4);
  font-weight: 700;
  margin: 0 0 10px;
  color: var(--text-page);
  line-height: 1.25;
}

.tier-desc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.45;
  margin: 0 0 20px;
  min-height: 54px;
}

.tier-price-box {
  padding: 16px 0;
  border-top: 1px solid var(--border-line);
  border-bottom: 1px solid var(--border-line);
  margin-bottom: 20px;
}

.tier-price {
  display: block;
  font-family: var(--font-serif);
  font-size: var(--fs-h3);
  font-weight: 800;
  color: var(--ayif-blue);
  line-height: 1;
}

.tier-period {
  font-size: 12px;
  color: var(--text-muted);
}

.tier-features {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.tier-features li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  color: var(--text-page);
  line-height: 1.4;
}

.feat-icon {
  width: 16px;
  height: 16px;
  min-width: 16px;
  color: var(--color-accent);
  margin-top: 2px;
}

.tier-select-btn {
  width: 100%;
  padding: 12px 16px;
  border-radius: 99px;
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 14px;
  border: 1px solid var(--ayif-blue);
  background-color: transparent;
  color: var(--ayif-blue);
  cursor: pointer;
  transition: all 0.2s ease;
}

.tier-card:hover .tier-select-btn {
  background-color: var(--ayif-blue);
  color: var(--ayif-white);
}

.tier-select-btn.btn-selected {
  background-color: var(--ayif-blue);
  color: var(--ayif-white);
}

/* Layout Checkout Split */
.checkout-split {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 48px;
  align-items: start;
}

.checkout-form-side {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  padding: 40px;
  border-radius: 6px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 22px;
}

.form-group label {
  display: block;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-page);
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="tel"],
.form-group select {
  width: 100%;
  padding: 12px 14px;
  font-family: var(--font-sans);
  font-size: 14px;
  border: 1px solid var(--border-line);
  border-radius: 4px;
  background-color: var(--bg-page);
  color: var(--text-page);
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--color-accent);
}

.group-label {
  display: block;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-page);
}

.checkbox-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.check-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  color: var(--text-muted);
  cursor: pointer;
}

.check-item input {
  margin-top: 3px;
}

.payment-methods {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.pay-option {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-line);
  padding: 14px 18px;
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--bg-page);
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.pay-option.active {
  border-color: var(--ayif-blue);
  background-color: rgba(7, 87, 184, 0.05);
}

.pay-top-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.pay-svg {
  width: 18px;
  height: 18px;
  min-width: 18px;
  color: var(--color-accent);
}

.pay-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-page);
}

.pay-sub {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 4px;
  padding-left: 28px;
}

.terms-wrap {
  margin: 28px 0;
  padding-top: 20px;
  border-top: 1px solid var(--border-line);
}

.submit-booking-btn {
  width: 100%;
  padding: 16px;
  font-size: var(--fs-body);
  border: none;
  cursor: pointer;
}

/* Récapitulatif Commande Side */
.summary-card {
  padding: 36px 30px;
  border-radius: 6px;
  border: 1px solid var(--navy-line);
  position: sticky;
  top: 100px;
}

.sum-title {
  font-family: var(--font-serif);
  font-size: var(--fs-h3);
  font-weight: 700;
  margin: 0 0 24px;
  color: var(--navy-text);
  border-bottom: 1px solid var(--navy-line);
  padding-bottom: 14px;
}

.sum-item-box {
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--navy-line);
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 24px;
}

.sum-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-gold);
}

.sum-name {
  font-family: var(--font-serif);
  font-size: var(--fs-lead);
  font-weight: 700;
  margin: 4px 0 16px;
  color: var(--navy-text);
}

.sum-qty-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.qty-label {
  font-size: 13px;
  color: var(--navy-muted);
}

.qty-controls {
  display: flex;
  align-items: center;
  border: 1px solid var(--navy-line);
  border-radius: 4px;
}

.qty-btn {
  background: none;
  border: none;
  color: var(--navy-text);
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: opacity 0.2s ease, color 0.2s ease;
}

.qty-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.qty-svg {
  width: 13px;
  height: 13px;
}

.qty-val {
  padding: 0 8px;
  font-size: 14px;
  font-weight: 700;
  color: var(--navy-text);
}

.sum-price-row {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: var(--navy-muted);
  border-top: 1px solid var(--navy-line);
  padding-top: 10px;
}

.sum-price-row strong {
  color: var(--color-accent);
}

.sum-breakdown {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid var(--navy-line);
  padding-bottom: 20px;
  margin-bottom: 24px;
}

.sum-breakdown .row {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: var(--navy-muted);
}

.free-text {
  color: var(--color-accent);
  font-weight: 600;
}

.total-row {
  font-size: var(--fs-lead) !important;
  font-weight: 700;
  color: var(--navy-text) !important;
  padding-top: 12px;
  border-top: 1px dashed var(--navy-line);
  margin-top: 6px;
}

.total-amount {
  font-family: var(--font-serif);
  font-size: var(--fs-h3);
  color: var(--color-accent) !important;
}

.sum-guarantees {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.guar-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 12px;
  color: var(--navy-muted);
  line-height: 1.4;
}

.guar-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.guar-svg {
  width: 17px;
  height: 17px;
  min-width: 17px;
  color: var(--color-accent);
  margin-top: 1px;
}

.sum-venue {
  background-color: rgba(255, 255, 255, 0.03);
  padding: 14px;
  border-radius: 4px;
  font-size: 12px;
  color: var(--navy-muted);
}

.sum-venue strong {
  display: block;
  color: var(--color-gold);
  margin-bottom: 4px;
}

.sum-venue p {
  margin: 0;
  line-height: 1.4;
}

/* Modal de Confirmation */
.confirmed-section {
  padding: 80px 0 120px;
}

.badge-card {
  max-width: 820px;
  margin: 0 auto;
  padding: 48px;
  border-radius: 6px;
  border: 1px solid var(--navy-line);
}

.badge-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 14px;
  background-color: rgba(46, 167, 242, 0.12);
  border: 1px solid rgba(46, 167, 242, 0.35);
  border-radius: 99px;
  margin-bottom: 20px;
}

.badge-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
}

.badge-svg {
  width: 14px;
  height: 14px;
}

.badge-status-text {
  font-size: 13px;
  font-weight: 700;
  color: var(--color-accent);
}

.badge-header h2 {
  font-size: var(--fs-h2);
  font-weight: 700;
  margin: 0 0 6px;
  color: var(--navy-text);
}

.ref-code {
  font-size: var(--fs-body);
  color: var(--navy-muted);
  margin: 0 0 32px;
}

.ref-code strong {
  color: var(--color-gold);
  letter-spacing: 0.05em;
}

.ticket-visual {
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 32px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--navy-line);
  padding: 32px;
  border-radius: 4px;
  margin-bottom: 36px;
}

.tv-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 8px;
}

.tv-left h3 {
  font-family: var(--font-serif);
  font-size: var(--fs-h3);
  font-weight: 700;
  margin: 0 0 4px;
  color: var(--navy-text);
}

.tv-meta {
  font-size: 14px;
  color: var(--navy-muted);
  margin: 0 0 24px;
}

.tv-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.tv-info-grid small {
  display: block;
  font-size: 11px;
  text-transform: uppercase;
  color: var(--navy-muted);
}

.tv-info-grid strong {
  font-size: 14px;
  color: var(--navy-text);
}

.tv-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 1px dashed var(--navy-line);
  padding-left: 24px;
}

.qr-placeholder {
  width: 140px;
  text-align: center;
}

.qr-svg {
  width: 110px;
  height: 110px;
  color: var(--navy-text);
}

.qr-label {
  display: block;
  font-family: monospace;
  font-size: 11px;
  color: var(--color-gold);
  margin-top: 6px;
}

.badge-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* FAQ Section */
.res-faq-section {
  padding: 88px 0;
  border-top: 1px solid var(--border-line);
  background-color: var(--bg-surface);
}

.faq-head {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 48px;
}

.faq-kicker {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  display: block;
  margin-bottom: 8px;
}

.faq-head h2 {
  font-size: var(--fs-h2);
  font-weight: 700;
  color: var(--text-page);
  margin: 0 0 10px;
}

.faq-accordion {
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-card {
  border: 1px solid var(--border-line);
  background-color: var(--bg-page);
  border-radius: 4px;
  overflow: hidden;
}

.faq-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  background: none;
  border: none;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--fs-body);
  font-weight: 700;
  color: var(--text-page);
  cursor: pointer;
}

.faq-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
}

.faq-svg {
  width: 16px;
  height: 16px;
}

.faq-content {
  padding: 0 24px 20px;
}

.faq-content p {
  margin: 0;
  font-size: var(--fs-body);
  line-height: 1.6;
  color: var(--text-muted);
}

/* Responsive */
@media (max-width: 1024px) {
  .tiers-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .checkout-split {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 680px) {
  .tiers-grid {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .checkout-form-side {
    padding: 24px 18px;
  }

  .ticket-visual {
    grid-template-columns: 1fr;
  }

  .tv-right {
    border-left: none;
    border-top: 1px dashed var(--navy-line);
    padding-left: 0;
    padding-top: 24px;
  }

  .badge-card {
    padding: 24px 18px;
  }
}
</style>
