import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export const fadeIn = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    { opacity: 1, duration: 1, y: 0 }
  );
};

// Marquee Effect animation
export const horizontalAnimation = (
  element1: HTMLElement,
  element2: HTMLElement
) => {
  const tl = gsap.timeline({ repeat: -1, ease: "none" });

  tl.fromTo(
    element1,
    { xPercent: 90 },
    { xPercent: 260, duration: 50 },
    0
  ).fromTo(element2, { xPercent: -250 }, { xPercent: 0, duration: 50 }, 0);
};

export const cardAnimation = (element: HTMLDivElement) => {
  gsap.fromTo(element, { xPercent: -100 }, { xPercent: 0, duration: 0.5 });
};

// burger menu animation
export const burgerMenuAnimation = (
  element: HTMLButtonElement,
  open: boolean
) => {
  gsap.to(element, {
    rotate: open ? 90 : 0,
    duration: 0.5,
    ease: "power2.inOut",
  });
};

// scroll animation
export const scrollAnimation = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      duration: 1,
      stagger: 0.5,
      y: 0,
      scrollTrigger: { trigger: element, start: "top 90%" },
    }
  );
};

// button click animation
export const buttonAnimation = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    { opacity: 0, scale: 0.8, z: 40 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      z: 0,
      ease: "elastic.out(1, 0.4)", // Elastic easing for a "pop" effect
    }
  );
};

// background colors animation
export const backgroundAnimation = (element: HTMLElement) => {
  gsap.to(element, {
    backgroundPosition: "100% 50%", // Move the gradient across the element
    duration: 5,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  });
};

//text reveal animation
export const textRevealAnimation = (element: HTMLElement, text: string) => {
  gsap.to(element, {
    text: text,
    duration: 5,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
    },
  });
};

// hozontaal scroll animation
export const horizontalScrollAnimation = (
  element: HTMLDivElement,
  trigger: HTMLDivElement
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      pin: true,
      start: "top top",
      scrub: 1,
    },
  });

  tl.to(element, {
    xPercent: -120,
    ease: "none",
  });
};
