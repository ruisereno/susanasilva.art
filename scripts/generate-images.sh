#!/usr/bin/env bash
set -euo pipefail
shopt -s nullglob

if [[ $# -ne 1 || ! -d "$1" ]]; then
  echo "Usage: pnpm images /path/to/original-images" >&2
  exit 1
fi
source_dir="$(cd "$1" && pwd)"

cd "$(dirname "$0")/.."

if ! command -v magick >/dev/null; then
  echo "ImageMagick 7 (magick) is required to generate images." >&2
  exit 1
fi

mkdir -p public/images/work public/images/site

generate_webp() {
  local source="$1" width="$2" output="$3" max_bytes="$4" quality
  for quality in 85 80 75 70 65 60 55 50 45 40 35 30 25 20 15 10 5; do
    magick "$source" -auto-orient -colorspace sRGB -resize "${width}x>" \
      -strip -quality "$quality" "$output"
    if (( $(wc -c < "$output") <= max_bytes )); then
      return
    fi
  done
  echo "Cannot generate an image under $max_bytes bytes: $output" >&2
  return 1
}

# Match existing image slots, preserving proportions without enlarging originals.
for source in "$source_dir"/*.[jJ][pP][gG]; do
  filename="${source##*/}"
  slug="${filename%.*}"
  for variant in gallery-mobile:480 gallery-tablet:800 gallery-desktop:1200 \
    detail-mobile:800 detail-tablet:1200 detail-desktop:1600; do
    name="${variant%:*}"
    width="${variant##*:}"
    usage="${name%-*}"
    device="${name##*-}"
    max_bytes=150000
    if [[ "$usage" == detail ]]; then
      max_bytes=300000
    fi
    generate_webp "$source" "$width" "public/images/work/${device}-${slug}-${usage}.webp" "$max_bytes"
  done
done

# Keep both designs, with square transparent canvases at real icon sizes.
for design in flower sigs; do
  source="$source_dir/512x512.png"
  if [[ "$design" == sigs ]]; then
    source="$source_dir/512x512b.png"
  fi
  [[ -f "$source" ]] || continue
  for size in 32 180 192 512; do
    magick "$source" -colorspace sRGB -resize "${size}x${size}" \
      -background none -gravity center -extent "${size}x${size}" -strip \
      "public/images/site/${design}-${size}.png"
  done
done
