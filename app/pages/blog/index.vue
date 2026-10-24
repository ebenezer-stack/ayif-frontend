<script setup lang="ts">
import { ref, computed } from 'vue'
import { blogPosts } from '../../data/mockData'
import type { BlogPost } from '../../types'

useHead({
  title: 'Blog & Actualités — AYIF Bénin 2026',
  meta: [
    {
      name: 'description',
      content: 'Analyses d’experts, études de cas, conseils aux fondateurs et coulisses de l’Africa Youth Investment Forum Cotonou 2026.'
    }
  ]
})

const selectedCategory = ref<string>('ALL')
const searchQuery = ref<string>('')

const categories = [
  { id: 'ALL', label: 'Toutes les analyses' },
  { id: 'Rétrospective 2025', label: 'Rétrospective 2025 (Abuja)' },
  { id: 'Investissement', label: 'Investissement & Capital' },
  { id: 'Entrepreneuriat', label: 'Entrepreneuriat & PME' },
  { id: 'Cotonou 2026', label: 'Cotonou 2026 & Hub' },
  { id: 'Innovation', label: 'Innovation & Tech' }
]

const filteredPosts = computed<BlogPost[]>(() => {
  return blogPosts.filter(post => {
    const matchCat = selectedCategory.value === 'ALL' || post.category === selectedCategory.value
    const matchSearch = searchQuery.value.trim() === '' || 
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchCat && matchSearch
  })
})

const featuredPost = computed<BlogPost | undefined>(() => {
  return blogPosts.find(p => p.featured) || blogPosts[0]
})
</script>

<template>
  <div class="blog-page">
    <!-- HERO SECTION -->
    <section class="blog-hero navy">
      <div class="wrap">
        <span v-reveal class="sub-kicker">Publications &amp; Perspectives</span>
        <h1 v-reveal="{ effect: 'up', delay: 100 }" class="hero-title">Le Blog de l’AYIF</h1>
        <p v-reveal="{ effect: 'up', delay: 200 }" class="hero-lead">
          Décryptages économiques, retours d’expérience de fondateurs et analyses exclusives pour éclairer vos décisions d'investissement sur le continent africain.
        </p>

        <!-- BARRE DE RECHERCHE & FILTRES -->
        <div v-reveal="{ effect: 'up', delay: 300 }" class="blog-controls">
          <div class="search-box">
            <input 
              v-model="searchQuery" 
              type="search" 
              placeholder="Rechercher un article, un sujet, un auteur..." 
              aria-label="Rechercher dans le blog"
            />
          </div>

          <div class="cat-pills">
            <button 
              v-for="c in categories" 
              :key="c.id"
              type="button"
              class="cat-btn"
              :class="{ active: selectedCategory === c.id }"
              @click="selectedCategory = c.id"
            >
              {{ c.label }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ARTICLE À LA UNE (si aucune recherche spécifique) -->
    <section v-if="featuredPost && selectedCategory === 'ALL' && !searchQuery" class="featured-section">
      <div class="wrap">
        <span v-reveal class="sec-label">À la une</span>
        <div v-reveal="{ effect: 'zoom', delay: 100 }" class="featured-card navy">
          <div class="featured-content">
            <div class="f-meta">
              <span class="f-badge">{{ featuredPost.category }}</span>
              <span class="f-date">{{ featuredPost.date }}</span>
              <span class="meta-dot">·</span>
              <span class="f-time">{{ featuredPost.readingTime }} min de lecture</span>
            </div>

            <h2 class="f-title">{{ featuredPost.title }}</h2>
            <p class="f-excerpt">{{ featuredPost.excerpt }}</p>

            <div class="f-author">
              <div class="author-avatar">{{ featuredPost.author.split(' ').map(n => n[0]).join('') }}</div>
              <div>
                <strong>{{ featuredPost.author }}</strong>
                <small>{{ featuredPost.authorRole }}</small>
              </div>
            </div>

            <NuxtLink :to="`/blog/${featuredPost.slug}`" class="btn primary f-cta">
              Lire l'article complet
            </NuxtLink>
          </div>

          <div v-if="featuredPost.image" class="featured-visual">
            <img :src="featuredPost.image" :alt="featuredPost.title" class="featured-img" loading="eager" />
          </div>
        </div>
      </div>
    </section>

    <!-- GRILLE DE TOUS LES ARTICLES -->
    <section class="posts-section">
      <div class="wrap">
        <div class="posts-header">
          <h2>{{ selectedCategory === 'ALL' ? 'Tous les articles récents' : `Articles : ${selectedCategory}` }}</h2>
          <span class="count-tag">{{ filteredPosts.length }} article{{ filteredPosts.length > 1 ? 's' : '' }}</span>
        </div>

        <div v-if="filteredPosts.length === 0" class="empty-state">
          <p>Aucun article ne correspond à votre recherche « {{ searchQuery }} ».</p>
          <button type="button" class="btn ghost-navy" @click="searchQuery = ''; selectedCategory = 'ALL'">
            Réinitialiser les filtres
          </button>
        </div>

        <div v-else class="posts-grid">
          <article 
            v-for="(post, i) in filteredPosts" 
            :key="post.slug"
            v-reveal="{ effect: 'up', delay: (i % 3) * 110 }"
            class="article-card"
          >
            <NuxtLink :to="`/blog/${post.slug}`" class="article-inner">
              <div class="card-cover" :class="post.cover">
                <img v-if="post.image" :src="post.image" :alt="post.title" class="cover-photo" loading="lazy" />
                <div class="cover-overlay"></div>
                <span class="category-tag">{{ post.category }}</span>
                <span class="time-tag">{{ post.readingTime }} min</span>
              </div>

              <div class="card-content">
                <div class="post-meta-line">
                  <span>{{ post.date }}</span>
                  <span class="dot">·</span>
                  <span>{{ post.author }}</span>
                </div>

                <h3 class="article-title">{{ post.title }}</h3>
                <p class="article-excerpt">{{ post.excerpt }}</p>

                <div class="card-footer">
                  <span class="read-link">Lire la suite →</span>
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <!-- NEWSLETTER / REJOINDRE LE FORUM -->
    <section class="newsletter-section navy">
      <div class="wrap nl-box">
        <div v-reveal="'left'" class="nl-text">
          <span class="sub-kicker">Veille Stratégique</span>
          <h2>Restez connecté à l’actualité de l’investissement africain</h2>
          <p class="intro light">
            Recevez chaque mois nos analyses exclusives, dossiers sectoriels et mises à jour sur l’édition Cotonou 2026.
          </p>
        </div>

        <div v-reveal="'right'" class="nl-action">
          <NuxtLink to="/reservation" class="btn primary">
            Réserver mon accès au Forum 2026
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog-page {
  background-color: var(--bg-page);
  background-image: var(--bg-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: var(--text-page);
}

.blog-hero {
  padding-top: 150px;
  padding-bottom: 70px;
  background-color: var(--navy-bg);
  color: var(--navy-text);
  border-bottom: 1px solid var(--navy-line);
}

.sub-kicker {
  display: block;
  font-size: var(--fs-xs);
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
  margin: 0 0 16px;
  color: var(--navy-text);
}

.hero-lead {
  font-size: var(--fs-lead);
  line-height: 1.55;
  color: var(--navy-muted);
  max-width: 760px;
  margin: 0 0 36px;
}

.blog-controls {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 24px;
  border-top: 1px solid var(--navy-line);
}

.search-box input {
  width: 100%;
  max-width: 560px;
  padding: 12px 16px;
  font-family: var(--font-sans);
  font-size: var(--fs-body);
  border-radius: 4px;
  border: 1px solid var(--navy-line);
  background-color: rgba(255, 255, 255, 0.08);
  color: var(--navy-text);
  outline: none;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.search-box input:focus {
  border-color: var(--color-accent);
  background-color: rgba(255, 255, 255, 0.12);
}

.cat-pills {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.cat-btn {
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--navy-line);
  padding: 6px 14px;
  border-radius: 99px;
  font-family: var(--font-sans);
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--navy-muted);
  cursor: pointer;
  transition: all 0.2s ease;
}

.cat-btn:hover {
  border-color: var(--color-accent);
  color: var(--navy-text);
}

.cat-btn.active {
  background-color: var(--ayif-blue);
  border-color: var(--ayif-blue);
  color: var(--ayif-white);
}

/* Featured Article */
.featured-section {
  padding: 56px 0 20px;
}

.sec-label {
  display: block;
  font-size: var(--fs-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent);
  margin-bottom: 12px;
}

.featured-card {
  padding: 40px;
  border-radius: 4px;
  border: 1px solid var(--navy-line);
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 40px;
  align-items: center;
}

.featured-visual {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 280px;
  max-height: 380px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--navy-line);
  background-color: var(--navy-surface);
}

.featured-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.f-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: var(--fs-sm);
  color: var(--navy-muted);
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.f-badge {
  background-color: var(--color-accent);
  color: var(--navy-bg);
  font-weight: 700;
  font-size: 11px;
  padding: 2px 10px;
  border-radius: 99px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.f-title {
  font-size: var(--fs-h2);
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 16px;
  color: var(--navy-text);
  max-width: 900px;
}

.f-excerpt {
  font-size: var(--fs-body);
  line-height: 1.6;
  color: var(--navy-muted);
  max-width: 820px;
  margin: 0 0 28px;
}

.f-author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
}

.author-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: var(--ayif-blue);
  color: var(--ayif-white);
  display: grid;
  place-items: center;
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 15px;
}

.f-author strong {
  display: block;
  color: var(--navy-text);
  font-size: var(--fs-sm);
}

.f-author small {
  display: block;
  color: var(--navy-muted);
  font-size: 12px;
}

.f-cta {
  display: inline-block;
}

/* Grille d'articles */
.posts-section {
  padding: 64px 0 96px;
}

.posts-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 36px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-line);
}

.posts-header h2 {
  font-size: var(--fs-h2);
  margin: 0;
  color: var(--text-page);
}

.count-tag {
  font-size: var(--fs-sm);
  color: var(--text-muted);
  font-weight: 600;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.article-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-line);
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.article-card:hover {
  transform: translateY(-6px);
  border-color: var(--color-accent);
  box-shadow: 0 16px 32px -12px rgba(8, 43, 85, 0.15);
}

.article-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.card-cover {
  height: 180px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
}

.cover-photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  z-index: 1;
}

.article-card:hover .cover-photo {
  transform: scale(1.05);
}

.cover-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(8, 43, 85, 0.45);
  z-index: 2;
}

.card-cover.navy { background-color: var(--ayif-navy); color: var(--ayif-white); }
.card-cover.blue { background-color: var(--ayif-blue); color: var(--ayif-white); }
.card-cover.sky { background-color: #0b3d75; color: var(--ayif-white); }

.category-tag {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 3px 10px;
  border-radius: 99px;
  color: var(--ayif-white);
  position: relative;
  z-index: 3;
}

.time-tag {
  font-size: 11px;
  font-weight: 600;
  color: var(--ayif-white);
  background-color: rgba(8, 43, 85, 0.65);
  padding: 3px 8px;
  border-radius: 4px;
  position: relative;
  z-index: 3;
}

.card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.post-meta-line {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.article-title {
  font-family: var(--font-serif);
  font-size: var(--fs-h3);
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 10px;
  color: var(--text-page);
  transition: color 0.2s ease;
}

.article-card:hover .article-title {
  color: var(--ayif-blue);
}

.article-excerpt {
  font-size: var(--fs-sm);
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0 0 18px;
  flex: 1;
}

.card-footer {
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px dashed var(--border-line);
}

.read-link {
  font-size: 13px;
  font-weight: 700;
  color: var(--color-accent);
  display: inline-block;
  transition: transform 0.2s ease;
}

.article-card:hover .read-link {
  transform: translateX(4px);
}

.empty-state {
  text-align: center;
  padding: 64px 20px;
  background-color: var(--bg-surface);
  border: 1px dashed var(--border-line);
  border-radius: 4px;
}

.btn.ghost-navy {
  border: 1px solid var(--ayif-blue);
  color: var(--ayif-blue);
  padding: 10px 20px;
  font-size: var(--fs-sm);
  border-radius: 99px;
  cursor: pointer;
  background: none;
  font-weight: 700;
  margin-top: 12px;
}

/* Newsletter */
.newsletter-section {
  padding: 72px 0;
  border-top: 1px solid var(--navy-line);
}

.nl-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
}

.nl-text {
  max-width: 640px;
}

.nl-text h2 {
  font-size: var(--fs-h2);
  margin: 0 0 12px;
  color: var(--navy-text);
}

@media (max-width: 960px) {
  .featured-card {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 32px 24px;
  }
  .posts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
  .featured-card {
    padding: 28px 20px;
  }
  .nl-box {
    flex-direction: column;
    text-align: center;
  }
}
</style>
