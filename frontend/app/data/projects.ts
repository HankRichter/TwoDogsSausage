export interface Project {
  id: string;
  category: string;
  status: string;
  title: string;
  description: string;
  tags: string[];
  projectHref: string;
  repoHref: string;
}

export const projects: Project[] = [
  {
    id: 'two-dogs-sausage',
    category: 'Portfolio',
    status: 'MIT License',
    title: 'Two Dogs Sausage',
    description: 'A website to show off my software engineer skills, sausages making recipes, and a form to people to get in touch with me.',
    tags: ['Nuxt', 'Vite', 'Laravel', 'SQL'],
    projectHref: 'https://twodogssausage.com',
    repoHref: 'https://github.com/HankRichter/TwoDogsSausage',
  },
  {
    id: 'richter-wedding',
    category: 'Wedding Page',
    status: 'MIT License',
    title: "Hank & Jaime's Wedding Page",
    description: "A website for Hank and Jaime's wedding, featuring event details, RSVP forms, and photo galleries.",
    tags: ['Next.js', 'Vite', 'TailwindCSS'],
    projectHref: 'https://www.jaimeandhank2026.com',
    repoHref: 'https://github.com/HankRichter/RichterWedding',
  },
  {
    id: 'richter-llc',
    category: 'Business Website',
    status: 'MIT License',
    title: 'RichterLLC',
    description: 'A business and marketing website for RichterLLC to show off the transformative work they do in car restoration.',
    tags: ['Next.js', 'Vite', 'TailwindCSS'],
    projectHref: 'https://richter-llc.com',
    repoHref: 'https://github.com/HankRichter/RichterLLC',
  },
];
