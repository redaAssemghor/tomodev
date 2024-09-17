"use client";

import { horizontalAnimation } from "@/animations/fadeIn";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const HorizontalBand = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const svgLinks = [
    "/svg/joomla.svg",
    "/svg/react.svg",
    "/svg/shopify.svg",
    "/svg/unity.svg",
    "/svg/wordpress-icon.svg",
    "/svg/google-bard.svg",
    "/svg/dotnet.svg",
    "/svg/figma.svg",
    "/svg/nextjs.svg",
  ];

  useGSAP(() => {
    if (ref1.current && ref2.current) {
      horizontalAnimation(ref1.current, ref2.current);
    }
  }, []);

  return (
    <div className="overflow-hidden relative bg-inherit">
      <div className="flex gap-10">
        <Marquee gradient={false} speed={40}>
          <div className="flex justify-between gap-16 p-4 w-full">
            {svgLinks.map((link, i) => (
              <Image
                key={i}
                src={link}
                alt="tech-icon"
                height={64}
                width={64}
                className="text-gray-400"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default HorizontalBand;
