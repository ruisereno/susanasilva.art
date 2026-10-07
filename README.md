# susanasilva.art

Minimal Astro project with strict TypeScript, plain CSS, Prettier, and ESLint.

## Setup

Use a supported Node.js version (22.22.3+, 24.16.0+, or 26.3.0+) and the pnpm
version pinned in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

The development server runs at `http://localhost:4321`.

## Commands

| Command             | Purpose                                             |
| ------------------- | --------------------------------------------------- |
| `pnpm dev`          | Start the development server                        |
| `pnpm build`        | Generate the static site in `dist/`                 |
| `pnpm preview`      | Preview the built site locally                      |
| `pnpm format`       | Format source and configuration files               |
| `pnpm format:check` | Check formatting                                    |
| `pnpm lint`         | Run ESLint, including Astro accessibility rules     |
| `pnpm lint:fix`     | Apply available lint fixes                          |
| `pnpm check`        | Check Astro and TypeScript diagnostics              |
| `pnpm validate`     | Run formatting, linting, type checks, and the build |

## Dependencies

`pnpm-workspace.yaml` requires package releases to be at least three days old,
fails when no eligible version exists, and saves exact dependency versions.
Keep `pnpm-lock.yaml` in version control. Use `pnpm install --frozen-lockfile`
for fresh checkouts and CI; use `pnpm add` or `pnpm update` for intentional
dependency changes, then review the manifest and lockfile together.

## Structure

- `src/pages/`: page routes, starting with a minimal homepage.
- `src/layouts/Layout.astro`: shared HTML shell and page metadata.
- `src/styles/tokens.css`: shared design values.
- `src/styles/global.css`: minimal base styles and accessibility defaults.
- `public/`: static assets, including the placeholder favicon.

Component styles belong in scoped Astro `<style>` blocks.
