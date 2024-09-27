"use client";

import { fadeIn } from "@/animations/fadeIn";
import BlurIn from "@/components/magicui/blur-in";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Marquee3D from "./Marquee3D";
import ShinyButton from "@/components/magicui/shiny-button";
import Link from "next/link";

const Hero = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const text2Ref = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (textRef.current) {
      fadeIn(textRef.current);
    }
    if (text2Ref.current) {
      fadeIn(text2Ref.current);
    }
  });

  return (
    <div className="relative text-white h-screen bg-[--primary]">
      <div className="absolute right-0 top-0 w-full z-0">
        <Marquee3D />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[--primary] dark:from-background"></div>

      <div className="flex h-full lg:w-2/3 justify-center mt-16 lg:mt-0 lg:px-32 px-4 flex-col gap-8 z-10">
        <h1
          ref={text2Ref}
          className="z-10 text-lg max-w-3xl leading-relaxed lg:text-xl lg:max-w-3xl"
        >
          Web Development Agency
        </h1>
        <BlurIn word={"Transforming Ideas into Digital Reality"} />

        <p
          ref={textRef}
          className="text-lg max-w-3xl leading-relaxed lg:text-xl lg:max-w-3xl"
        >
          We craft custom websites and applications that drive results,
          combining cutting-edge technology with seamless user experience.
        </p>
        <div>
          {/* <ShimmerButton>SPEAK WITH OUR EXPERTS</ShimmerButton> */}

          <Link href="/contact">
            <ShinyButton
              className="z-40 mt-8 border-[0.5px] border-gray-300"
              text="SPEAK WITH OUR EXPERTS"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
