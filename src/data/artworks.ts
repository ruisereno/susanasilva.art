const works = [
  {
    slug: "abril_ilustrado_susanasilva",
    title: "Abril ilustrado",
    description:
      "Hands holding a carnation beneath white birds on a red background",
    width: 3508,
    height: 4961,
  },
  {
    slug: "botany",
    title: "Botany",
    description:
      "A profile silhouette filled with colorful flowers and foliage",
    width: 2480,
    height: 3508,
  },
  {
    slug: "cottonwheel",
    title: "Cotton Wheel",
    description: "A colorful wheel framed by cotton flowers, hands, and stars",
    width: 3543,
    height: 4724,
  },
  {
    slug: "diasdesol_sigs_30x40",
    title: "Dias de sol",
    description:
      "A sun-headed figure holding a leafy stem, surrounded by birds and waves",
    width: 3543,
    height: 4724,
  },
  {
    slug: "femininoRosa_sigsillustration-30x40",
    title: "Feminino Rosa",
    description:
      "A pink figure inside a black oval, surrounded by leaves, birds, and stars",
    width: 3543,
    height: 4724,
  },
  {
    slug: "gritaliberdade",
    title: "Grita liberdade",
    description: "A red carnation with green leaves beneath two white birds",
    width: 3543,
    height: 4724,
  },
  {
    slug: "palavrasdeordem1_30x40",
    title: "Palavras de ordem",
    description:
      "Forever freedom for all lettering with a white carnation on pink and blue",
    width: 3543,
    height: 4724,
  },
  {
    slug: "sirens_sigsillustration",
    title: "Sirens",
    description: "Two black-tailed sirens holding hands beneath a golden sun",
    width: 3544,
    height: 3544,
  },
];

export const artworks = works.map(
  ({ slug, title, description, width, height }) => ({
    slug,
    title,
    gallery: {
      mobile: `/images/work/mobile-${slug}-gallery.webp`,
      tablet: `/images/work/tablet-${slug}-gallery.webp`,
      desktop: `/images/work/desktop-${slug}-gallery.webp`,
    },
    detail: {
      mobile: `/images/work/mobile-${slug}-detail.webp`,
      tablet: `/images/work/tablet-${slug}-detail.webp`,
      desktop: `/images/work/desktop-${slug}-detail.webp`,
    },
    description,
    width,
    height,
  }),
);
