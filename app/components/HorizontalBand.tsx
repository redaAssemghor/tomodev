"use client";

import { horizontalAnimation } from "@/animations/fadeIn";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const HorizontalBand = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const svgLinks = [
    "/svg/joomla.svg",
    "/svg/react.svg",
    "/svg/shopify.svg",
    "/svg/unity.svg",
    "/svg/wordpress-icon.svg",
  ];

  useGSAP(() => {
    if (ref1.current && ref2.current) {
      horizontalAnimation(ref1.current, ref2.current);
    }
  }, []);

  return (
    <div className="overflow-hidden relative bg-inherit">
      <h1 className="absolute z-40 bg-inherit text-white lg:text-2xl px-4 h-full flex items-center justify-center lg:w-[500px]">
        What I&rsquo;ve Used
      </h1>
      <div className="flex gap-10">
        <div ref={ref1} className="flex justify-between gap-16 p-4 w-full">
          {svgLinks.concat(svgLinks).map((link, i) => (
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
        <div ref={ref2} className="flex justify-between gap-16 p-4 w-full">
          {svgLinks.concat(svgLinks).map((link, i) => (
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
