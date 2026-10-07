export const artworks = Array.from({ length: 20 }, (_, index) => ({
  gallery: {
    mobile: "/images/placeholders/placeholder-gallery-mobile.svg",
    tablet: "/images/placeholders/placeholder-gallery-tablet.svg",
    desktop: "/images/placeholders/placeholder-gallery-desktop.svg",
  },
  detail: {
    mobile: "/images/placeholders/placeholder-detail-mobile.svg",
    tablet: "/images/placeholders/placeholder-detail-tablet.svg",
    desktop: "/images/placeholders/placeholder-detail-desktop.svg",
  },
  description: `Illustration placeholder ${index + 1}`,
  width: 1200,
  height: 939,
}));
