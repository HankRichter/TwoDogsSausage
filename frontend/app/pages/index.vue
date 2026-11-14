<script setup lang="ts">
import { projects } from '~/data/projects';
</script>

<template>
  <div class="home">
    <section class="container hero">
      <div>
        <h1 class="hero__heading">Software projects & experiments</h1>
        <p class="hero__text">
          A selection of full-stack web applications and fun projects built with the things I have learned in my career in software.
        </p>
      </div>
    </section>

    <section class="container projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :category="project.category"
        :status="project.status"
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
        :project-href="project.projectHref"
        :repo-href="project.repoHref"
      >
      </ProjectCard>
    </section>

    <section class="split">
      <div class="split__image" aria-hidden="true">
        <img src="/me.jpeg" alt="" class="split__image-photo" />
      </div>
      <div class="split__copy container">
        <h2 class="split__heading">Both are just excuses to try something new.</h2>
        <p class="split__text">
          Making sausage from scratch is one of my favorite hobbies because it's an
          excuse to experiment and learn — new spice blends, new ratios, new combinations, just
          to see what happens and figure out why. Side projects and sausages scratch the same itch:
          there's a baseline of technique you have to respect, but everything past
          that is an open question you learn by doing. Some experiments turn out great. Some don't. Either way I walk
          away knowing more than I did before.
        </p>
        <div class="split__stats">
          <div>
            <span>Hobby</span>
            <strong>Homemade Sausage</strong>
          </div>
          <div>
            <span>Approach</span>
            <strong>Try It & See</strong>
          </div>
          <div>
            <span>Mindset</span>
            <strong>Always Learning</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="container cta">
      <div class="cta__box">
        <h2 class="cta__heading">Got a project idea or just want to talk shop?</h2>
        <p class="cta__text">
          I'm always up for chatting about web apps, side projects, or trading
          notes on whatever you're building or barbecuing.
        </p>
        <div class="cta__actions">
          <NuxtLink to="/contact" class="btn btn-primary"><Icon name="lucide:mail" /> Send an Email</NuxtLink>
          <a href="#" class="btn btn-secondary">View Resume</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  gap: var(--gutter-lg);
  padding-block: var(--space-xl);
}

.hero__heading {
  font-size: 2.25rem;
  font-weight: 500;
  margin-block: var(--space-md);
}

.hero__text {
  max-width: 40rem;
  opacity: 0.8;
}

.projects-grid {
  display: grid;
  gap: var(--gutter);
  padding-block: var(--space-xl);
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
}

.split {
  display: grid;
  background: var(--color-surface-tint);
  padding-block: var(--space-xl);
}

.split__image {
  display: none;
  position: relative;
  overflow: hidden;
}

.split__image-photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.split__heading {
  font-size: 1.75rem;
  font-weight: 500;
  margin-block: var(--space-md);
}

.split__text {
  opacity: 0.8;
  max-width: 40rem;
}

.split__stats {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);
  margin-top: var(--space-lg);
}

.split__stats > div {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.split__stats strong {
  font-family: var(--font-body);
  font-size: 1rem;
}

.cta {
  padding-block: var(--space-xl);
}

.cta__box {
  background: var(--color-ink-deep);
  color: var(--color-bone);
  border-radius: var(--radius);
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.cta__heading {
  font-size: 1.5rem;
  font-weight: 500;
  max-width: 30rem;
}

.cta__text {
  opacity: 0.7;
  max-width: 30rem;
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
}

@media (min-width: 768px) {
  .hero {
    grid-template-columns: 2fr 1fr;
    align-items: start;
  }
}

@media (min-width: 1024px) {
  .split {
    grid-template-columns: 1fr 1fr;
  }

  .split__image {
    display: block;
    background: var(--color-ink);
    min-height: 22rem;
  }

  .split__copy {
    padding-block: var(--space-xl);
  }
}
</style>
