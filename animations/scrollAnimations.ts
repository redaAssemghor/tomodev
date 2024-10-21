import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const imageScroll = (element: HTMLElement) => {
  if (element) {
    const animation = gsap.to(element, {
      scrollTo: {
        y: "max",
        autoKill: true,
      },
      duration: 10,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut",
    });
    return animation;
  }
  return null;
};

export const scrollToel = (
  element: HTMLElement | string,
  val?: number | string
) => {
  if (element) {
    gsap.to(element, {
      scrollTo: {
        y: val,
        autoKill: true,
      },
      duration: 0.1,
      ease: "power2.inOut",
    });
  }
};
