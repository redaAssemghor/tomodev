"use client";

import { horizontalAnimation } from "@/animations/fadeIn";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import React from "../svgs/tech-icons/React";
import Wordpress from "../svgs/tech-icons/Wordpress";
import Unity from "../svgs/tech-icons/Unity";
import Joomla from "../svgs/tech-icons/Joomla";
import Shopify from "../svgs/tech-icons/Shopify";
import Image from "next/image";

const HorizontalBand = () => {
  const ref = useRef<HTMLParagraphElement>(null);
  const ref2 = useRef<HTMLParagraphElement>(null);

  const svgLinks = [
    "/svg/joomla.svg",
    "/svg/react.svg",
    "/svg/shopify.svg",
    "/svg/unity.svg",
    "/svg/wordpress-icon.svg",
  ];

  useGSAP(() => {
    if (ref.current && ref2.current) {
      horizontalAnimation(
        ref.current as HTMLElement,
        ref2.current as HTMLElement
      );
    }
  }, []);

  return (
    <div className="overflow-hidden relative bg-inherit">
      <h1 className="absolute z-40 bg-inherit text-white lg:text-2xl px-4 h-full flex items-center justify-center lg:w-[500px]">
        What I&rsquo;ve Use
      </h1>
      <div className="flex">
        <div ref={ref} className="flex justify-evenly gap-4 p-4">
          {svgLinks.concat(svgLinks, svgLinks).map((link, i) => (
            <Image
              key={i}
              src={link}
              alt="tech-icon"
              height={64}
              width={64}
              className="text-white"
            />
          ))}
        </div>
        <div ref={ref2} className="flex justify-evenly gap-4 p-4">
          {svgLinks.concat(svgLinks, svgLinks).map((link, i) => (
            <Image
              key={i}
              src={link}
              alt="tech-icon"
              height={64}
              width={64}
              className="text-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalBand;
