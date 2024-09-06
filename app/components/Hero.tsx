"use client";

import { fadeIn } from "@/animations/fadeIn";
import BlurIn from "@/components/magicui/blur-in";
import { useEffect, useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (ref.current) {
      fadeIn(ref.current);
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 px-6 py-12 md:py-16 lg:py-24 lg:px-12 text-center">
      <BlurIn
        word={"#1 Agency for Digital Agency"}
        className="text-3xl font-extrabold tracking-tight text-gray-800 lg:text-5xl"
      />
      <p
        ref={ref}
        className="text-lg text-gray-700 max-w-3xl leading-relaxed lg:text-xl lg:max-w-4xl"
      >
        Boost your business with our leading digital marketing solutions. Our
        expert team delivers tailored digital marketing solutions, seamlessly
        integrating innovative strategies trusted by over 150 companies for
        their digital success. Allow us to guide you in conquering the digital
        world with our comprehensive digital marketing solutions.
      </p>
    </div>
  );
};

export default Hero;
