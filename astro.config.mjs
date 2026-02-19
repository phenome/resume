import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: 'https://phenome.github.io',
  base: isGitHubActions ? '/resume' : '/',
  integrations: [tailwind()],
});
