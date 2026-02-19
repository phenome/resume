# Resume

Personal resume site built with Astro.

## Local

```bash
bun install
bun run dev
```

## Build

```bash
bun run build:pages
```

## Deploy (GitHub Pages)

Deploy is automated with GitHub Actions:
- workflow: `.github/workflows/deploy-pages.yml`
- trigger: push to `master` (or manual run in Actions)
- output: `dist/`

Published URL:
- `https://phenome.github.io/resume/`
