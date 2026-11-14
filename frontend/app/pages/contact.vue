<script setup lang="ts">
const topics = ['Software Development Project', 'Sausage Order / Pop-up Question', 'Just Saying Hi'];
const selectedTopic = ref(topics[0]);

const services = [
  {
    icon: 'lucide:code-2',
    title: 'Full-Stack Development',
    description:
      'TypeScript, Perl, Node.js, event-driven architectures, and polished design systems that don\'t compromise on speed.',
  },
  {
    icon: 'lucide:chef-hat',
    title: 'Small-Batch Sausages',
    description:
      'Italian, Jalapeno Popper, Philly Cheese Steak, and Maple and Sage Chicken sausages. More fun recipes to come!',
  },
];
</script>

<template>
  <div class="contact">
    <section class="container contact__intro">
      <h1>Let's build something good together.</h1>
      <p>
        Whether you need freelance full-stack web development, frontend polish, or want to
        reserve a batch of sausage &mdash; my inbox is open.
      </p>
    </section>

    <section class="container contact__grid">
      <form class="contact__form" @submit.prevent>
        <fieldset class="contact__topics">
          <legend>What's On Your Mind?</legend>
          <button
            v-for="topic in topics"
            :key="topic"
            type="button"
            class="contact__topic"
            :class="{ 'is-active': topic === selectedTopic }"
            @click="selectedTopic = topic"
          >
            {{ topic }}
          </button>
        </fieldset>

        <div class="contact__fields">
          <label>
            <span>Your Name</span>
            <input type="text" placeholder="Jane Doe" autocomplete="name" />
          </label>
          <label>
            <span>Email Address</span>
            <input type="email" placeholder="jane@example.com" autocomplete="email" />
          </label>
        </div>

        <label class="contact__message">
          <span>Message <small>Markdown supported</small></span>
          <textarea
            rows="6"
            placeholder="Tell me about the tech stack, timeline, project scope, or the cured meat batch size you are thinking about..."
          />
        </label>

        <div class="contact__submit-row">
          <button type="submit" class="btn btn-primary">
            Send Message <Icon name="lucide:send" />
          </button>
          <small><Icon name="lucide:clock" /> I typically reply within 24-48 hours.</small>
        </div>
      </form>

      <aside class="contact__side">
        <div class="contact__portrait">
          <span class="contact__portrait-name">Hank Richter</span>
          <span class="contact__portrait-role">Full-Stack Developer &amp; Sausage Maker, Detroit MI</span>
        </div>

        <div class="contact__detail">
          <Icon name="lucide:map-pin" />
          <span>Location &amp; Pickup</span>
          <span>Detroit, MI</span>
        </div>

        <div class="contact__social">
          <a href="https://github.com/HankRichter" class="btn btn-outline"><Icon name="lucide:github" /> GitHub</a>
          <a href="https://www.linkedin.com/in/edward-richter-291785152/" class="btn btn-outline"><Icon name="lucide:linkedin" /> LinkedIn</a>
        </div>

        <div class="contact__swap">
          <Icon name="lucide:messages-circle" />
          <h2>Want to talk shop?</h2>
          <p>
            I love geeking out over slow smoked meat, sausage making techniques, cinema, animation and video games. Drop a note even just to chat and be friends.
          </p>
        </div>
      </aside>
    </section>

    <section class="container contact__services">
      <div v-for="service in services" :key="service.title" class="contact__service">
        <span class="contact__service-icon"><Icon :name="service.icon" /></span>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact__intro {
  padding-block: var(--space-xl) var(--space-lg);
  max-width: 34rem;
}

.contact__intro h1 {
  font-size: 2rem;
  font-weight: 500;
  margin-block: var(--space-md);
}

.contact__intro p {
  opacity: 0.8;
}

.contact__grid {
  display: grid;
  gap: var(--gutter-lg);
  padding-bottom: var(--space-xl);
}

.contact__form {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.contact__topics {
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.contact__topics legend {
  width: 100%;
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0.6;
  margin-bottom: var(--space-xs);
  padding: 0;
}

.contact__topic {
  border: 1px solid var(--color-border);
  background: var(--color-surface-tint);
  border-radius: var(--radius-pill);
  padding: var(--space-xs) var(--space-md);
  font-size: 0.8125rem;
  cursor: pointer;
}

.contact__topic.is-active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}

.contact__fields {
  display: grid;
  gap: var(--space-md);
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
}

.contact__fields label,
.contact__message {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0.7;
}

.contact__message span {
  display: flex;
  justify-content: space-between;
  text-transform: none;
}

.contact__fields input,
.contact__message textarea {
  font: inherit;
  text-transform: none;
  letter-spacing: normal;
  padding: var(--space-sm);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: var(--color-bone);
  color: var(--color-ink);
}

.contact__fields input:focus,
.contact__message textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.contact__submit-row {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.contact__submit-row small {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  opacity: 0.6;
  font-size: 0.75rem;
}

.contact__side {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.contact__portrait {
  min-height: 14rem;
  border-radius: var(--radius);
  background: linear-gradient(160deg, var(--color-ink) 0%, var(--color-primary-dark) 100%);
  color: var(--color-bone);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--space-lg);
  gap: var(--space-xs);
}

.contact__portrait-name {
  font-family: var(--font-display);
  font-size: 1.25rem;
}

.contact__portrait-role {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  opacity: 0.8;
}

.contact__detail {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--space-sm) var(--space-md);
  font-size: 0.875rem;
}

.contact__detail span:nth-child(2) {
  margin-right: auto;
  opacity: 0.6;
  font-size: 0.75rem;
}

.contact__detail a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
}

.contact__social {
  display: flex;
  gap: var(--space-sm);
}

.contact__social .btn {
  flex: 1;
}

.contact__swap {
  background: var(--color-surface-tint);
  border-radius: var(--radius);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.contact__swap h2 {
  font-size: 1.0625rem;
  font-weight: 500;
}

.contact__swap p {
  font-size: 0.875rem;
  opacity: 0.8;
}

.contact__services {
  display: grid;
  gap: var(--gutter);
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  padding-bottom: var(--space-xl);
}

.contact__service {
  background: var(--color-surface-tint);
  border-radius: var(--radius);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.contact__service-icon {
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius);
  background: var(--color-surface);
  margin-bottom: var(--space-xs);
}

.contact__service h3 {
  font-size: 1rem;
  font-weight: 600;
}

.contact__service p {
  font-size: 0.875rem;
  opacity: 0.75;
}

@media (min-width: 1024px) {
  .contact__grid {
    grid-template-columns: 3fr 2fr;
  }
}
</style>
