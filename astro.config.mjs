import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: 'https://phenome.github.io',
  base: isGitHubActions ? '/resume' : '/',
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',
      { path: 'pt', codes: ['pt-BR', 'pt'] },
    ],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
      fallbackType: 'rewrite',
    },
  },
  integrations: [tailwind()],
});
