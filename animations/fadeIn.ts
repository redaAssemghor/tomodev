import { gsap } from "gsap";

export const fadeIn = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    { opacity: 1, duration: 1, y: 0 }
  );
};

export const horizontalAnimation = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    { xPercent: 0 },
    { xPercent: -100, duration: 50, repeat: -1, ease: "none" }
  );
};
