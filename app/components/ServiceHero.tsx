"use client";
import { backgroundAnimation, textRevealAnimation } from "@/animations/fadeIn";
import ShinyButton from "@/components/magicui/shiny-button";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaAngleRight, FaLongArrowAltDown } from "react-icons/fa";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { TiHomeOutline } from "react-icons/ti";
import Carousal from "./Carousal";
import { ServiceHeroProps } from "../lib/types";

const ServiceHero = ({
  children,
  name,
  description,
  services,
  title,
  imgs,
  gif,
  bgColors,
}: ServiceHeroProps) => {
  const ref = useRef(null);
  const txtRef = useRef(null);

  useGSAP(() => {
    if (ref.current) {
      backgroundAnimation(ref.current);
    }

    if (txtRef.current) {
      textRevealAnimation(txtRef.current, description);
    }
  });

  return (
    <div className="relative w-full text-white overflow-hidden">
      <div
        ref={ref}
        className="z-10 absolute h-full w-full bg-[--primary] bg-opacity-50"
        style={{
          background: `${
            bgColors
              ? bgColors
              : "linear-gradient(130deg, #01afe9, #1b398f, #791bce)"
          }`,
          backgroundSize: "200% 200%",
        }}
      ></div>
      <div className="relative flex lg:flex-row justify-between flex-col gap-10 z-40 py-28 lg:px-32 px-4">
        <h1 className="absolute flex flex-col gap-8 left-2 text-xl justify-center items-center translate-y-52 opacity-30">
          <span className="rotate-90">SCROLL</span>
          <FaLongArrowAltDown />
        </h1>
        <div>
          <ul className="flex gap-4 text-xs lg:text-sm">
            <li className="flex items-center gap-2">
              <TiHomeOutline className="text-[--text3]" size={20} />
              <Link href="/">Home</Link>
              <FaAngleRight className="pt-1" size={20} />
            </li>
            <li className="flex gap-2 items-center justify-center">
              <Link href="/wordpress">{name}</Link>
            </li>
          </ul>
          <h1 className="lg:text-4xl text-xl font-bold  my-8">{title}</h1>
          <p ref={txtRef} className="text-lg max-w-[550px] h-[140px]"></p>
          <ul className="flex flex-col gap-4 mt-8">
            {services &&
              services.map((service, i) => (
                <li key={i} className="flex items-center gap-2">
                  <PiPaperPlaneRightFill className="text-[--text3]" />
                  <p>{service}</p>
                </li>
              ))}
          </ul>
          <Link href={"/contact"}>
            <ShinyButton
              setIcon={false}
              className="border-[0.5px] border-gray-300 my-8"
              text="REQUEST A QUOTE"
            />
          </Link>
        </div>
        <div className="relative max-w-[500px] p-5 shrink-0">
          <h1 className="absolute right-0 text-4xl font-black translate-x-60 translate-y-52 rotate-90 opacity-30">
            FEATURED WORK
          </h1>
          {gif ? (
            <Image
              src={gif}
              alt="chatbot gif"
              layout="intrinsic" // This is more predictable and allows better control over width and height
              width={1000}
              height={1400}
              style={{ objectFit: "contain" }} // Ensures the GIF is properly fitted within the container
            />
          ) : (
            <Carousal>
              {imgs.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt="models"
                  width={500}
                  height={500}
                />
              ))}
            </Carousal>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default ServiceHero;
