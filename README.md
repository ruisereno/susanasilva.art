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
- `public/`: static assets, including illustrations and site icons.

Component styles belong in scoped Astro `<style>` blocks.

## Images

Original images are kept outside this project. With ImageMagick 7 installed, run
`pnpm images /path/to/original-images` to generate WebP copies directly in
`public/images/work/` from the JPG files in that external directory.
Filenames start with the device type, followed by the original filename stem and
use, for example `desktop-botany-gallery.webp` or `mobile-botany-detail.webp`:

| Use              | Mobile width | Tablet width | Desktop width |
| ---------------- | ------------ | ------------ | ------------- |
| Gallery          | 480px        | 800px        | 1200px        |
| Individual image | 800px        | 1200px       | 1600px        |

Images keep their original aspect ratios without cropping or upscaling. Add each
work's filename stem, description, and original dimensions to `src/data/artworks.ts`.
Gallery images are capped at 150 KB (150,000 bytes), and individual images at
300 KB (300,000 bytes). The generator lowers compression quality as needed while
preserving the specified dimensions. The gallery only loads gallery variants.

When `512x512.png` and `512x512b.png` are present in the external source directory,
the same command generates 32px, 180px, 192px, and 512px square PNGs for both
site designs in `public/images/site/`. The flower is used for the favicon and Apple
touch icon; the `sigs` variants are available as an alternative. Source PNG filenames
describe intended sizes rather than their actual pixel dimensions, so these copies
are resized from the larger `512x512` originals.
