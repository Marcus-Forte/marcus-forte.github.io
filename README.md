# marcus-forte.github.io

Personal site built with [Astro](https://astro.build).

## Build & Deploy

Astro requires Node.js `>=22.12.0`. The version used is pinned in [`.nvmrc`](.nvmrc) (run `nvm use`), and CI uses the same file.

Install dependencies:

```bash
npm install
```

Build the static site:

```bash
npm run build
```

Output is in `dist/`.

### Deployment

The site is live at <https://marcus-forte.github.io/> and is deployed automatically by a GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

On every push to `main`, the workflow:

1. Checks out the repository and sets up Node from `.nvmrc`.
2. Runs `npm ci` and `npm run build`.
3. Uploads `dist/` as a Pages artifact.
4. Deploys the artifact to GitHub Pages using `actions/deploy-pages`.

No manual deploy step is needed. In the repository settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**. Deployment runs can be viewed in the repository's **Actions** tab.

## Local Development

```bash
npm run dev
```
