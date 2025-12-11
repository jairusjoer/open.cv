import type { SiteConfig } from './types';

export const site: SiteConfig = {
  site: 'https://jairusjoer.com',
  title: 'open.cv',
  description: 'Document-driven static site theme',
  locale: 'en-US',
  datetime: {
    month: 'short',
    year: 'numeric',
  },
  navigation: [
    { title: 'About', href: '/' },
    { title: 'Theme', href: '/about/theme-guide' },
    { title: 'Markdown', href: '/about/markdown-style-guide' },
  ],
  footer: [{ title: 'Source', href: 'https://github.com/jairusjoer/open.cv' }],
};
