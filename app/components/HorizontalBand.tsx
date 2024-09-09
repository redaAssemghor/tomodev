"use client";

import { horizontalAnimation } from "@/animations/fadeIn";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const HorizontalBand = () => {
  const ref = useRef<HTMLParagraphElement>(null);
  useGSAP(() => {
    if (ref.current) {
      horizontalAnimation(ref.current);
    }
  }, []);
  const brands = [
    "/images/loba.png",
    "/images/loba.png",
    "/images/loba.png",
    "/images/loba.png",
    "/images/loba.png",
    "/images/loba.png",
  ];

  return (
    <div className="overflow-hidden relative bg-inherit">
      <h1 className="absolute z-40 bg-inherit text-white lg:text-2xl px-4 h-full flex items-center justify-center lg:w-[500px]">
        They trust us
      </h1>
      <div
        ref={ref}
        className="flex gap-8 justify-between items-center p-4  text-white"
      >
        {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
          <div key={index} className="shrink-0">
            <Image
              src={brand}
              alt="brand"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalBand;
