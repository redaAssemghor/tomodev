"use client";

import { fadeIn } from "@/animations/fadeIn";
import BlurIn from "@/components/magicui/blur-in";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Marquee3D from "./Marquee3D";
import ShinyButton from "@/components/magicui/shiny-button";

const Hero = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (textRef.current) {
      fadeIn(textRef.current);
    }

    if (imgRef.current) {
      fadeIn(imgRef.current);
    }
  }, []);

  return (
    <div className="relative text-white h-screen">
      <div className="absolute right-0 top-0 w-full z-0">
        <Marquee3D />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#1B2C5C] dark:from-background"></div>

      <div className="flex h-full w-2/3 justify-center px-32 flex-col gap-8 z-10">
        <h1 className="z-10 text-lg max-w-3xl leading-relaxed lg:text-xl lg:max-w-3xl">
          Top Web Design Agency
        </h1>
        <BlurIn className="" word={"We Grow Brands Online"} />

        <p
          ref={textRef}
          className="text-lg max-w-3xl leading-relaxed lg:text-xl lg:max-w-3xl"
        >
          Custom Websites, Branding & Digital Marketing Solutions
        </p>
        <div>
          {/* <ShimmerButton>SPEAK WITH OUR EXPERTS</ShimmerButton> */}

          <ShinyButton text="SPEAK WITH OUR EXPERTS" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
