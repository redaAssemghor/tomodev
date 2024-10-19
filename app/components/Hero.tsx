"use client";
import { fadeIn } from "@/animations/fadeIn";
import BlurIn from "@/components/magicui/blur-in";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Marquee3D from "./Marquee3D";
import Link from "next/link";
import Button from "./ui/Button";
import HorizontalBand from "./HorizontalBand";

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
    <div className="relative h-screen w-screen">
      <div className="text-white">
        <div className="absolute right-0 top-0 w-full z-0">
          <Marquee3D />
        </div>
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[--accent] to-transparent"></div>

        <div className="flex h-screen lg:w-2/3 justify-center mt-16 lg:mt-0 lg:px-40 px-4 flex-col gap-8 z-10">
          <h1
            ref={text2Ref}
            className="z-10 text-lg leading-relaxed lg:text-3xl font-bold"
          >
            Premium Development Agency
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
            <Link href="/contact">
              <Button text="SPEAK WITH OUR EXPERTS" />
            </Link>
          </div>
        </div>
      </div>
      <HorizontalBand />
    </div>
  );
};

export default Hero;
