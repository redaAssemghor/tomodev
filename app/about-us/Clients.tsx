"use client";
import { backgroundAnimation } from "@/animations/fadeIn";
import ShinyButton from "@/components/magicui/shiny-button";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Clients = () => {
  const ref = useRef(null);

  useGSAP(() => {
    if (ref.current) {
      backgroundAnimation(ref.current);
    }
  });

  return (
    <div className="relative text-[--light] flex flex-col justify-center items-center gap-4 h-screen">
      <div
        ref={ref}
        className="z-10 absolute h-full w-full bg-[--primary] bg-opacity-50"
        style={{
          background: "linear-gradient(90deg, #00031f, #791bce)",
          backgroundSize: "200% 200%",
        }}
      ></div>
      <div className="flex flex-col justify-center items-center gap-6 relative z-40 h-full w-full bg-[url('/bg-blurr.png')] bg-cover bg-center">
        <div className="flex flex-col gap-3 items-center pb-8">
          <h2 className="text-xl font-bold">We Partner With Brands To</h2>
          <h1 className="text-5xl font-bold">
            Create Superior Digital Experiences
          </h1>
        </div>
        <div className="flex gap-x-20 py-8">
          <Image alt="" src={"/logos/ess-logo.png"} width={100} height={100} />
          <Image
            alt=""
            src={"/logos/federation.png"}
            width={100}
            height={100}
          />
        </div>
        <Link className="mt-4" href="/contact-us">
          <ShinyButton text="SPEAK WITH OUR EXPERTS" />
        </Link>
      </div>
    </div>
  );
};

export default Clients;
