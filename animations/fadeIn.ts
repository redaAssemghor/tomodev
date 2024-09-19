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

// reveal animation onscroll
export const revealAnimation = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    { opacity: 0, x: -60 },
    {
      opacity: 1,
      duration: 1,
      x: 0,
      stagger: 0.5,
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

// text reveal animation
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

// horizontal scroll animation
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
    xPercent: -140,
    ease: "none",
  });
};

// progress line animation
export const lineAnimation = (
  element: HTMLElement,
  elementRef: HTMLElement
) => {
  gsap.fromTo(
    element,
    { width: 0 },
    {
      width: "140%",
      duration: 4,
      ease: "power2.inOut",
      scrollTrigger: { trigger: elementRef, start: "bottom bottom", scrub: 4 },
    }
  );
};

// circle animation
export const circleAnimation = (element: HTMLElement) => {
  gsap.to(element, {
    opacity: 1,
    scale: 1.5,
    ease: "none",
    scrollTrigger: { trigger: element, start: "top 90%", scrub: 4 },
  });
};

import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register the MotionPathPlugin
gsap.registerPlugin(MotionPathPlugin);

export const spotLightAnimation = (element: HTMLElement) => {
  gsap.to(element, {
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    motionPath: {
      path: [
        { x: 0, y: -40 }, // Starting point (top of the circle)
        { x: 40, y: 0 }, // Right
        { x: 0, y: 40 }, // Bottom
        { x: -40, y: 0 }, // Left
        { x: 0, y: -40 }, // Back to the top
      ],
      curviness: 1, // Makes the motion smooth and circular
      autoRotate: true, // Rotates the element along the path
    },
  });
};

// talent background animation
export const animateBackgroundHover = (
  element: HTMLElement,
  container: HTMLElement
) => {
  // Start the animation when the mouse enters (hover)
  container.addEventListener("mouseenter", () => {
    gsap.to(element, {
      width: "100%", // Animate the width to 100%
      duration: 0.4, // Adjust the duration as needed
      ease: "power2.out", // Smooth easing
    });
  });

  // Reset the background when the mouse leaves
  container.addEventListener("mouseleave", () => {
    gsap.to(element, {
      width: "0%",
      duration: 0.4,
      ease: "power2.in",
    });
  });
};
