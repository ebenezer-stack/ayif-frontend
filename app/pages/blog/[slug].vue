<script setup lang="ts">
import { ref, computed } from 'vue'
import { blogPosts } from '../../data/mockData'
import type { BlogPost } from '../../types'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const post = computed<BlogPost | undefined>(() => {
  return blogPosts.find(p => p.slug === slug.value)
})

const relatedPosts = computed<BlogPost[]>(() => {
  return blogPosts.filter(p => p.slug !== slug.value).slice(0, 2)
})

useHead(() => ({
  title: post.value ? `${post.value.title} — Blog AYIF 2026` : 'Article — AYIF',
  meta: [
    {
      name: 'description',
      content: post.value?.excerpt || 'Article du blog de l’Africa Youth Investment Forum.'
    }
  ]
}))

const linkCopied = ref(false)
const copyArticleLink = () => {
  if (import.meta.client && navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href)
    linkCopied.value = true
    setTimeout(() => {
      linkCopied.value = false
    }, 2500)
  }
}
</script>

<template>
  <div class="post-page">
    <!-- ARTICLE NON TROUVÉ -->
    <section v-if="!post" class="not-found-section navy">
      <div class="wrap">
        <h1>Article introuvable</h1>
        <p class="intro light">L'article demandé n'existe pas ou a été déplacé.</p>
        <NuxtLink to="/blog" class="btn primary">
          Retourner au blog
        </NuxtLink>
      </div>
    </section>

    <!-- ARTICLE TROUVÉ -->
    <article v-else class="article-wrapper">
      <!-- HEADER ARTICLE -->
      <header class="post-header navy">
        <div class="wrap post-header-wrap">
          <nav class="breadcrumb" aria-label="Fil d'Ariane">
            <NuxtLink to="/">Accueil</NuxtLink>
            <span class="sep">/</span>
            <NuxtLink to="/blog">Blog</NuxtLink>
            <span class="sep">/</span>
            <span class="current">{{ post.category }}</span>
          </nav>

          <div class="header-meta">
            <span class="category-badge">{{ post.category }}</span>
            <span class="meta-dot">·</span>
            <span>{{ post.date }}</span>
            <span class="meta-dot">·</span>
            <span class="read-duration">{{ post.readingTime }} min de lecture</span>
          </div>

          <h1 class="header-title">{{ post.title }}</h1>
          <p class="header-lead">{{ post.excerpt }}</p>

          <!-- Auteur -->
          <div class="author-card">
            <div class="author-avatar">{{ post.author.split(' ').map(n => n[0]).join('') }}</div>
            <div class="author-info">
              <span class="written-by">Rédigé par</span>
              <strong class="author-name">{{ post.author }}</strong>
              <span class="author-role">{{ post.authorRole }}</span>
            </div>
          </div>
        </div>
      </header>

      <!-- IMAGE DE COUVERTURE PRINCIPALE -->
      <div v-if="post.image" class="post-hero-image-wrap">
        <div class="wrap post-media-wrap">
          <div class="post-media-frame">
            <img :src="post.image" :alt="post.title" class="post-main-photo" />
          </div>
        </div>
      </div>

      <!-- CORPS DE L'ARTICLE -->
      <section class="post-body-section">
        <div class="wrap post-layout">
          <!-- CONTENU PRINCIPAL -->
          <main class="post-content">
            <div v-for="(section, idx) in post.content" :key="idx" class="content-block">
              <h2 v-if="section.heading" class="section-heading">{{ section.heading }}</h2>

              <p v-for="(p, pIdx) in section.paragraphs" :key="pIdx" class="content-p">
                {{ p }}
              </p>

              <blockquote v-if="section.quote" class="article-quote">
                <p>{{ section.quote }}</p>
                <cite>— {{ post.author }}</cite>
              </blockquote>
            </div>

            <!-- BARRE DE PARTAGE ET ACTIONS -->
            <div class="share-bar">
              <div class="share-label">Partager cette analyse :</div>
              <div class="share-buttons">
                <button 
                  type="button" 
                  class="share-btn"
                  @click="copyArticleLink"
                >
                  <span>{{ linkCopied ? 'Lien copié dans le presse-papiers !' : 'Copier le lien' }}</span>
                </button>
              </div>
            </div>

            <!-- PROFIL DE L'AUTEUR DÉTAILLÉ -->
            <div class="author-bio-box">
              <div class="bio-avatar">{{ post.author.split(' ').map(n => n[0]).join('') }}</div>
              <div class="bio-text">
                <h4>À propos de {{ post.author }}</h4>
                <p>{{ post.authorRole }}. Intervenant(e) confirmé(e) lors de l’Africa Youth Investment Forum 2026 à Cotonou.</p>
                <NuxtLink to="/speakers" class="bio-link">
                  Voir son profil d'intervenant →
                </NuxtLink>
              </div>
            </div>
          </main>

          <!-- SIDEBAR SOMMAIRE / ENCART FORUM -->
          <aside class="post-sidebar">
            <div class="sidebar-box navy">
              <span class="side-kicker">Rejoindre l'événement</span>
              <h3>Participez aux échanges en direct à Cotonou</h3>
              <p>
                Du 03 au 05 Décembre 2026, retrouvez les auteurs et investisseurs au Palais des Congrès pour approfondir ces thématiques.
              </p>
              <NuxtLink to="/reservation" class="btn primary side-btn">
                Réserver mon pass
              </NuxtLink>
            </div>

            <div class="sidebar-box nav-box">
              <h4>Navigation rapide</h4>
              <ul class="side-links">
                <li><NuxtLink to="/programme">Programme des 3 jours</NuxtLink></li>
                <li><NuxtLink to="/speakers">Liste des 50+ speakers</NuxtLink></li>
                <li><NuxtLink to="/partenaires">Espace Partenaires</NuxtLink></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <!-- ARTICLES ASSOCIÉS -->
      <section v-if="relatedPosts.length > 0" class="related-section">
        <div class="wrap">
          <div class="related-head">
            <h2>Poursuivre la lecture</h2>
            <NuxtLink to="/blog" class="link-dark">Tous les articles →</NuxtLink>
          </div>

          <div class="related-grid">
            <article 
              v-for="rel in relatedPosts" 
              :key="rel.slug"
              class="related-card"
            >
              <NuxtLink :to="`/blog/${rel.slug}`" class="rel-link">
                <div v-if="rel.image" class="rel-cover">
                  <img :src="rel.image" :alt="rel.title" class="rel-photo" loading="lazy" />
                  <div class="rel-overlay"></div>
                  <span class="rel-tag">{{ rel.category }}</span>
                  <span class="rel-time">{{ rel.readingTime }} min</span>
                </div>
                <div class="rel-body">
                  <span v-if="!rel.image" class="rel-tag">{{ rel.category }}</span>
                  <h3>{{ rel.title }}</h3>
                  <p>{{ rel.excerpt }}</p>
                  <span class="rel-meta">{{ rel.author }} · {{ rel.date }}</span>
                </div>
              </NuxtLink>
            </article>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style scoped>
.post-page {
  background-color: var(--bg-page);
  background-image: var(--bg-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: var(--text-page);
}

.not-found-section {
  padding: 160px 0 100px;
  text-align: center;
}

.post-header {
  padding-top: 150px;
  padding-bottom: 56px;
  background-color: var(--navy-bg);
  color: var(--navy-text);
}

.post-hero-image-wrap {
  background-color: var(--navy-bg);
  padding-bottom: 56px;
  border-bottom: 1px solid var(--navy-line);
}

.post-media-wrap {
  max-width: 960px;
  margin: 0 auto;
}

.post-media-frame {
  width: 100%;
  max-height: 480px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--navy-line);
  background-color: var(--navy-surface);
}

.post-main-photo {
  width: 100%;
  height: 100%;
  max-height: 480px;
  object-fit: cover;
  display: block;
}

.post-header-wrap {
  max-width: 860px;
  margin: 0 auto;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--fs-sm);
  color: var(--navy-muted);
  margin-bottom: 24px;
}

.breadcrumb a {
  color: var(--navy-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb a:hover {
  color: var(--color-accent);
}

.breadcrumb .sep {
  opacity: 0.4;
}

.breadcrumb .current {
  color: var(--color-gold);
}

.header-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--fs-sm);
  color: var(--navy-muted);
  margin-bottom: 18px;
  flex-wrap: wrap;
}

.category-badge {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background-color: rgba(46, 167, 242, 0.15);
  border: 1px solid rgba(46, 167, 242, 0.35);
  color: var(--color-accent);
  padding: 3px 10px;
  border-radius: 99px;
}

.meta-dot {
  opacity: 0.5;
}

.header-title {
  font-size: var(--fs-h1);
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 18px;
  color: var(--navy-text);
}

.header-lead {
  font-size: var(--fs-lead);
  line-height: 1.6;
  color: var(--navy-muted);
  margin: 0 0 32px;
}

.author-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-top: 20px;
  border-top: 1px solid var(--navy-line);
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--ayif-blue);
  color: var(--ayif-white);
  display: grid;
  place-items: center;
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.written-by {
  display: block;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--navy-muted);
}

.author-name {
  display: block;
  color: var(--navy-text);
  font-size: 15px;
}

.author-role {
  display: block;
  font-size: 12px;
  color: var(--color-gold);
}

/* Post Layout */
.post-body-section {
  padding: 72px 0 96px;
}

.post-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 56px;
  align-items: start;
}

.post-content {
  max-width: 720px;
}

.content-block {
  margin-bottom: 40px;
}

.section-heading {
  font-size: var(--fs-h2);
  font-weight: 700;
  margin: 36px 0 16px;
  color: var(--text-page);
  line-height: 1.25;
}

.content-p {
  font-size: var(--fs-body);
  line-height: 1.8;
  color: var(--text-page);
  margin: 0 0 20px;
}

.article-quote {
  margin: 32px 0;
  padding: 24px 28px;
  background-color: var(--bg-surface);
  border-left: 4px solid var(--color-gold);
  border-radius: 2px;
}

.article-quote p {
  font-family: var(--font-serif);
  font-size: var(--fs-lead);
  line-height: 1.6;
  font-style: italic;
  color: var(--text-page);
  margin: 0 0 10px;
}

.article-quote cite {
  font-family: var(--font-sans);
  font-size: var(--fs-sm);
  font-style: normal;
  font-weight: 700;
  color: var(--color-accent);
}

.share-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  border-top: 1px solid var(--border-line);
  border-bottom: 1px solid var(--border-line);
  margin: 48px 0;
  flex-wrap: wrap;
  gap: 16px;
}

.share-label {
  font-size: var(--fs-sm);
  font-weight: 700;
  color: var(--text-muted);
}

.share-btn {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  padding: 8px 18px;
  border-radius: 99px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;
  color: var(--text-page);
  cursor: pointer;
  transition: all 0.2s ease;
}

.share-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.author-bio-box {
  display: flex;
  gap: 20px;
  padding: 28px;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  border-radius: 4px;
}

.bio-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: var(--ayif-blue);
  color: var(--ayif-white);
  display: grid;
  place-items: center;
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 18px;
  flex-shrink: 0;
}

.bio-text h4 {
  margin: 0 0 6px;
  font-size: var(--fs-h4);
  color: var(--text-page);
}

.bio-text p {
  margin: 0 0 12px;
  font-size: var(--fs-sm);
  line-height: 1.55;
  color: var(--text-muted);
}

.bio-link {
  font-size: 13px;
  font-weight: 700;
  color: var(--color-accent);
  text-decoration: none;
}

/* Sidebar */
.post-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: sticky;
  top: 96px;
}

.sidebar-box {
  padding: 32px 24px;
  border-radius: 4px;
  border: 1px solid var(--navy-line);
}

.side-kicker {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-gold);
  display: block;
  margin-bottom: 8px;
}

.sidebar-box h3 {
  font-size: var(--fs-h4);
  font-weight: 700;
  margin: 0 0 10px;
  color: var(--navy-text);
  line-height: 1.3;
}

.sidebar-box p {
  font-size: var(--fs-sm);
  line-height: 1.55;
  color: var(--navy-muted);
  margin: 0 0 20px;
}

.side-btn {
  width: 100%;
  text-align: center;
  font-size: 13px;
  padding: 10px 16px;
}

.nav-box {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
}

.nav-box h4 {
  margin: 0 0 14px;
  font-size: var(--fs-sm);
  color: var(--text-page);
}

.side-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.side-links a {
  font-size: var(--fs-sm);
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s ease, padding-left 0.2s ease;
  display: block;
}

.side-links a:hover {
  color: var(--ayif-blue);
  padding-left: 4px;
}

/* Related articles */
.related-section {
  padding: 72px 0 96px;
  border-top: 1px solid var(--border-line);
  background-color: var(--bg-surface);
}

.related-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 32px;
}

.related-head h2 {
  font-size: var(--fs-h2);
  margin: 0;
  color: var(--text-page);
}

.link-dark {
  font-weight: 700;
  font-size: var(--fs-body);
  color: var(--ayif-blue);
  text-decoration: none;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.related-card {
  background-color: var(--bg-page);
  border: 1px solid var(--border-line);
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.related-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent);
  box-shadow: 0 14px 28px -10px rgba(8, 43, 85, 0.12);
}

.rel-link {
  color: inherit;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.rel-cover {
  height: 170px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 14px 18px;
}

.rel-photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  z-index: 1;
}

.related-card:hover .rel-photo {
  transform: scale(1.05);
}

.rel-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(8, 43, 85, 0.45);
  z-index: 2;
}

.rel-cover .rel-tag {
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: var(--ayif-white);
  padding: 3px 10px;
  border-radius: 99px;
  position: relative;
  z-index: 3;
  margin-bottom: 0;
}

.rel-time {
  font-size: 11px;
  font-weight: 600;
  color: var(--ayif-white);
  background-color: rgba(8, 43, 85, 0.65);
  padding: 3px 8px;
  border-radius: 4px;
  position: relative;
  z-index: 3;
}

.rel-body {
  padding: 22px 24px 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.rel-tag {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 8px;
}

.related-card h3 {
  font-size: var(--fs-h4);
  font-weight: 700;
  margin: 0 0 10px;
  color: var(--text-page);
  line-height: 1.35;
}

.related-card p {
  font-size: var(--fs-sm);
  line-height: 1.55;
  color: var(--text-muted);
  margin: 0 0 16px;
  flex: 1;
}

.rel-meta {
  font-size: 12px;
  color: var(--color-accent);
  font-weight: 600;
}

@media (max-width: 960px) {
  .post-layout {
    grid-template-columns: 1fr;
  }
  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
