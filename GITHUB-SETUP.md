# ZayenAi — full website source for GitHub

This archive contains the application source, assets, tests, configuration and database migration history. It excludes real environment files, repository metadata, dependencies and generated builds. It is not a static hosting build.

## Requested file names
- `index.html` is a launcher that opens https://zayenai.org. It is NOT a replacement for the full application or a local app entry. TanStack Start generates the running website's HTML from `src/routes/__root.tsx` and the page routes.
- `git` is the renamed `.gitignore` file. Git does NOT automatically read a file named `git`.
- `prettier` is the renamed `.prettierignore` file, not the formatter program. `.prettierrc` remains unchanged.
- The active website's ignore files were not renamed; these changes are only in this download.

## Upload safely to GitHub
Unzip and open the ZayenAi folder. Before installing dependencies or adding credentials, initialize Git and enable the renamed ignore file:

```sh
git init
git config --local core.excludesFile git
git add .
git commit -m "Add ZayenAi website source"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the example repository address with your own. The local ignore configuration must be repeated in each new clone. If uploading through GitHub's website, upload only this clean extracted archive: the `git` file will NOT automatically protect secrets or dependencies in browser uploads. Never upload real `.env` files or private keys.

## Local development
Use a Node.js version supported by Vite 8 (Node 22.12+ recommended), and Bun for the included lockfile.

```sh
bun install
bun run dev
```

Before running, copy `.env.example` to `.env` and fill the required connection settings locally. Select the appropriate test/live public payment token for the environment. Server credentials belong only in private environment configuration, never in GitHub source. Do not copy unrelated Stripe credentials into the managed payment integration.

The source depends on Lovable-managed accounts, AI, payments, email and deployment integrations. A standalone deployment needs compatible service configuration and hosting; managed private credentials are not included or downloadable. The archive alone does not recreate customer records or production services. Do not run migrations against a production database without reviewing them.

To format while respecting the renamed ignore file:

```sh
bunx prettier --ignore-path prettier --write .
```

GitHub stores the source. GitHub Pages can serve the launcher, but cannot run this full-stack application's accounts, AI requests, payments or database features. No standalone production build or GitHub deployment has been verified for this archive.
