import type { SiteConfig } from './types';

export const site: SiteConfig = {
  site: 'https://open.cv',
  title: 'open.cv',
  description: 'Document-driven static site theme',
  locale: 'en-US',
  datetime: {
    month: 'short',
    year: 'numeric',
  },
  navigation: [
    { title: 'About', href: '/' },
    { title: 'Theme', href: '/theme' },
    { title: 'Style', href: '/style' },
  ],
  footer: [{ title: 'Source', href: 'https://github.com/jairusjoer/open.cv' }],
};
