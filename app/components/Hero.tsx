"use client";

import { fadeIn } from "@/animations/fadeIn";
import BlurIn from "@/components/magicui/blur-in";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Marquee3D from "./Marquee3D";

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
    <div className="relative flex justify-around items-center p-10">
      <div className="absolute right-0 top-0 w-full h-full z-0">
        <Marquee3D />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white dark:from-background"></div>

      <div className="flex flex-col gap-8 px-6 py-12 md:py-16 lg:py-24 lg:px-12 z-10">
        <div className="">
          <BlurIn word={"We Grow Brands Online"} />
        </div>
        <p
          ref={textRef}
          className="text-lg text-gray-700 max-w-3xl leading-relaxed lg:text-xl lg:max-w-3xl"
        >
          Boost your business with our leading digital marketing solutions. Our
          expert team delivers tailored digital marketing solutions, seamlessly
          integrating innovative strategies trusted by over 150 companies for
          their digital success. Allow us to guide you in conquering the digital
          world with our comprehensive digital marketing solutions.
        </p>
        <div>
          <ShimmerButton>REQUEST YOUR QUOTE</ShimmerButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
