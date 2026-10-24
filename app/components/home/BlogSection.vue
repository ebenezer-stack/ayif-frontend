<script setup lang="ts">
import { blogPosts } from '../../data/mockData'

const latestPosts = blogPosts.slice(0, 3)
</script>

<template>
  <section class="blog-section">
    <div class="wrap">
      <div class="blog-head">
        <div>
          <span v-reveal class="sub-kicker">Analyses &amp; Décryptages</span>
          <h2 v-reveal="{ effect: 'up', delay: 100 }">Le Blog de l’AYIF</h2>
          <p v-reveal="{ effect: 'up', delay: 200 }" class="intro">
            Perspectives d'experts, études de cas et éclairages stratégiques sur le financement et l'innovation en Afrique.
          </p>
        </div>
        <NuxtLink v-reveal="'right'" to="/blog" class="link-dark">
          Voir tous les articles →
        </NuxtLink>
      </div>

      <div class="blog-grid">
        <article 
          v-for="(post, i) in latestPosts" 
          :key="post.slug"
          v-reveal="{ effect: 'up', delay: i * 130 }"
          class="blog-card"
        >
          <NuxtLink :to="`/blog/${post.slug}`" class="card-link-wrapper">
            <div class="card-cover" :class="post.cover">
              <img v-if="post.image" :src="post.image" :alt="post.title" class="cover-photo" loading="lazy" />
              <div class="cover-overlay"></div>
              <span class="cover-tag">{{ post.category }}</span>
              <span class="cover-time">{{ post.readingTime }} min de lecture</span>
            </div>

            <div class="card-body">
              <div class="post-meta">
                <span class="post-date">{{ post.date }}</span>
                <span class="meta-dot">·</span>
                <span class="post-author">{{ post.author }}</span>
              </div>

              <h3 class="post-title">{{ post.title }}</h3>
              <p class="post-excerpt">{{ post.excerpt }}</p>

              <span class="read-more">
                Lire l'analyse complète →
              </span>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog-section {
  padding: 88px 0;
  background-color: var(--bg-surface);
  background-image: var(--bg-pattern);
  background-repeat: repeat;
  background-size: 56px 56px;
  color: var(--text-page);
  border-top: 1px solid var(--border-line);
}

.blog-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 48px;
}

.sub-kicker {
  display: block;
  font-size: var(--fs-xs);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 8px;
}

.link-dark {
  font-weight: 700;
  font-size: var(--fs-body);
  color: var(--ayif-blue);
  border-bottom: 2px solid var(--ayif-blue);
  padding-bottom: 2px;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.link-dark:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.blog-card {
  background-color: var(--bg-page);
  border: 1px solid var(--border-line);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.blog-card:hover {
  transform: translateY(-6px);
  border-color: var(--color-accent);
  box-shadow: 0 16px 32px -12px rgba(8, 43, 85, 0.15);
}

.card-link-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.card-cover {
  height: 190px;
  padding: 16px 20px;
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

.blog-card:hover .cover-photo {
  transform: scale(1.05);
}

.cover-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(8, 43, 85, 0.45);
  z-index: 2;
}

.card-cover.navy {
  background-color: var(--ayif-navy);
  color: var(--ayif-white);
}

.card-cover.blue {
  background-color: var(--ayif-blue);
  color: var(--ayif-white);
}

.card-cover.sky {
  background-color: #0b3d75;
  color: var(--ayif-white);
}

.cover-tag {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 4px 10px;
  border-radius: 99px;
  position: relative;
  z-index: 3;
}

.cover-time {
  font-size: 12px;
  font-weight: 600;
  opacity: 0.95;
  background-color: rgba(8, 43, 85, 0.6);
  padding: 3px 8px;
  border-radius: 4px;
  position: relative;
  z-index: 3;
  color: var(--ayif-white);
}

.card-body {
  padding: 28px 24px 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.post-meta {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.meta-dot {
  opacity: 0.5;
}

.post-title {
  font-family: var(--font-serif);
  font-size: var(--fs-h3);
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 12px;
  color: var(--text-page);
  transition: color 0.2s ease;
}

.blog-card:hover .post-title {
  color: var(--ayif-blue);
}

.post-excerpt {
  font-size: var(--fs-sm);
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0 0 20px;
  flex: 1;
}

.read-more {
  font-size: 13px;
  font-weight: 700;
  color: var(--color-accent);
  display: inline-block;
  margin-top: auto;
  transition: transform 0.2s ease;
}

.blog-card:hover .read-more {
  transform: translateX(4px);
}

@media (max-width: 960px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
