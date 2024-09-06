"use client";

import { fadeIn } from "@/animations/fadeIn";
import BlurIn from "@/components/magicui/blur-in";
import Particles from "@/components/magicui/particles";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

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
    <div className="flex justify-around items-center relative p-10">
      <Particles
        className="absolute inset-10"
        quantity={200}
        ease={80}
        color="#000000"
        refresh
      />
      <div className="flex flex-col gap-8 px-6 py-12 md:py-16 lg:py-24 lg:px-12 ">
        <div className="">
          <BlurIn word={"#1 Digital Agency"} />
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

      <div ref={imgRef}>
        <Image
          src="/images/hero.png"
          alt="Hero"
          width={400}
          height={400}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
