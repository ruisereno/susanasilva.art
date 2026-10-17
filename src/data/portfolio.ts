import works from "./portfolio.json";

export const artworks = works.map(
  ({ slug, title, imageStem, width, height }) => ({
    slug,
    title,
    gallery: {
      mobile: `/images/portfolio/mobile-${imageStem}-gallery.webp`,
      tablet: `/images/portfolio/tablet-${imageStem}-gallery.webp`,
      desktop: `/images/portfolio/desktop-${imageStem}-gallery.webp`,
    },
    detail: {
      mobile: `/images/portfolio/mobile-${imageStem}-detail.webp`,
      tablet: `/images/portfolio/tablet-${imageStem}-detail.webp`,
      desktop: `/images/portfolio/desktop-${imageStem}-detail.webp`,
    },
    width,
    height,
  }),
);
