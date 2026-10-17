// Images stay visible without JavaScript or when reduced motion is preferred.
if (document.documentElement.classList.contains("image-reveals")) {
  const reveal = async (image: HTMLImageElement) => {
    try {
      await image.decode();
    } catch {
      // Failed images must still expose their alternative text.
    }

    // Give even cached images a painted starting state before fading in.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        image.dataset.imageReveal = "visible";
      });
    });
  };

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;

      const image = entry.target as HTMLImageElement;
      observer.unobserve(image);

      if (image.complete) {
        void reveal(image);
      } else {
        const onSettled = () => {
          image.removeEventListener("load", onSettled);
          image.removeEventListener("error", onSettled);
          void reveal(image);
        };
        image.addEventListener("load", onSettled);
        image.addEventListener("error", onSettled);
      }
    }
  });

  document
    .querySelectorAll<HTMLImageElement>("[data-image-reveal]")
    .forEach((image) => {
      observer.observe(image);
    });
}
