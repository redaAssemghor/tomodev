import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const imageScroll = (element: HTMLElement) => {
  if (element) {
    gsap.to(element, {
      scrollTo: {
        y: "max",
        autoKill: true,
      },
      duration: 15,
      ease: "power2.inOut",
    });
  }
};

export const scrollToel = (element: HTMLElement, val?: number | string) => {
  if (element) {
    gsap.to(element, {
      scrollTo: {
        y: val,
        autoKill: false,
      },
      duration: 1,
      ease: "power2.inOut",
    });
  }
};
