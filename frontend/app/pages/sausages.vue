<script setup lang="ts">
import {faqs, pickupSteps, sausages } from '~/data/sausages';

const openFaq = ref<number | null>(0);

function toggleFaq(index: number) {
  openFaq.value = openFaq.value === index ? null : index;
}
</script>

<template>
  <div class="sausages">
    <section class="container sausages__hero">
      <div>
        <h1 class="sausages__heading">Fresh handcrafted sausages.</h1>
        <p class="sausages__lede">
          Sausages are made fresh weekly during the week and sold at the Plymouth Farmers Market on Saturdays. Small batches, no fillers, natural hog
          casings.
        </p>
      </div>
    </section>

    <section class="container">
      <div class="sausages__section-header">
        <div>
          <h2>Sausages we supply</h2>
        </div>
      </div>

      <div class="sausages__grid">
        <article v-for="item in sausages" :key="item.id" class="sausage-card">
          <div class="sausage-card__media" aria-hidden="true">
            <img :src="item.image" :alt="item.title" class="sausage-card__photo" />
            <span class="pill sausage-card__badge">{{ item.badge }}</span>
            <span class="sausage-card__price">{{ item.price }}</span>
          </div>
          <div class="sausage-card__body">
            <div class="sausage-card__title-row">
              <h3>{{ item.title }}</h3>
            </div>
            <p>{{ item.description }}</p>
            <button type="button" class="btn btn-primary sausage-card__cta">
              <Icon name="lucide:shopping-cart" /> {{ item.ctaLabel }}
            </button>
          </div>
        </article>
      </div>
    </section>

    <section class="container sausages__protocol">
      <div class="sausages__section-header sausages__section-header--center">
        <h2>How Neighborhood Pickup Works</h2>
      </div>
      <div class="sausages__steps">
        <div v-for="item in pickupSteps" :key="item.step" class="sausages__step">
          <span class="sausages__step-number">{{ item.step }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <small>{{ item.note }}</small>
        </div>
      </div>
    </section>

    <section class="container sausages__faq">
      <div class="sausages__section-header sausages__section-header--center">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div class="sausages__faq-list">
        <div v-for="(item, index) in faqs" :key="item.question" class="sausages__faq-item">
          <button type="button" class="sausages__faq-question" @click="toggleFaq(index)">
            {{ item.question }}
            <Icon :name="openFaq === index ? 'lucide:chevron-up' : 'lucide:chevron-down'" />
          </button>
          <p v-if="openFaq === index" class="sausages__faq-answer">{{ item.answer }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.sausages__hero {
  display: grid;
  gap: var(--gutter-lg);
  padding-block: var(--space-xl);
}

.sausages__heading {
  font-size: 2rem;
  font-weight: 500;
  margin-block: var(--space-md);
}

.sausages__lede {
  opacity: 0.8;
  max-width: 34rem;
}

.sausages__section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.sausages__section-header h2 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: var(--space-xs);
}

.sausages__section-header--center {
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 32rem;
  margin-inline: auto;
}

.sausages__grid {
  display: grid;
  gap: var(--gutter);
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  padding-bottom: var(--space-xl);
}

.sausage-card {
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  overflow: hidden;
}

.sausage-card__media {
  position: relative;
  height: 8rem;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--space-sm);
}

.sausage-card__photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.sausage-card__media::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(20, 24, 29, 0.35), rgba(20, 24, 29, 0) 55%);
  z-index: 1;
}

.sausage-card__badge {
  position: relative;
  z-index: 2;
  background: var(--color-surface);
}

.sausage-card__price {
  position: relative;
  z-index: 2;
  font-family: var(--font-mono);
  font-weight: 700;
  color: var(--color-primary);
  background: var(--color-surface);
  padding: 0.125rem var(--space-sm);
  border-radius: var(--radius-pill);
}

.sausage-card__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  padding: var(--space-md);
  flex: 1;
}

.sausage-card__title-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  opacity: 0.6;
}

.sausage-card__title-row h3 {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 500;
  opacity: 1;
}

.sausage-card__body p {
  font-size: 0.875rem;
  opacity: 0.8;
}

.sausage-card__cta {
  width: 100%;
  margin-top: auto;
}

.sausages__protocol {
  background: var(--color-surface-tint);
  padding-block: var(--space-xl);
  border-radius: var(--radius);
}

.sausages__steps {
  display: grid;
  gap: var(--gutter);
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
}

.sausages__step {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.sausages__step-number {
  font-family: var(--font-mono);
  color: var(--color-primary);
  opacity: 0.6;
}

.sausages__step h3 {
  font-size: 1.0625rem;
  font-weight: 500;
}

.sausages__step p {
  opacity: 0.8;
  font-size: 0.875rem;
}

.sausages__step small {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  opacity: 0.6;
  text-transform: uppercase;
}

.sausages__faq {
  padding-block: var(--space-xl);
}

.sausages__faq-list {
  max-width: 40rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.sausages__faq-item {
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: var(--color-surface);
}

.sausages__faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  padding: var(--space-md);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
}

.sausages__faq-answer {
  padding: 0 var(--space-md) var(--space-md);
  opacity: 0.8;
  font-size: 0.875rem;
}

@media (min-width: 768px) {
  .sausages__hero {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
