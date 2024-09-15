import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

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

gsap.registerPlugin(ScrollTrigger);
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
    duration: 5, // Animation duration in seconds
    ease: "power1.inOut", // Easing for smooth animation
    repeat: -1, // Infinite loop
    yoyo: true, // Make the animation reverse after each loop
    backgroundSize: "200% 200%", // Set background size larger for better transition effect
  });
};
