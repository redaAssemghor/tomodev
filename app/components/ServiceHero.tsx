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
import Form from "./Form";

type ServiceHeroProps = {
  name: string;
  description: string;
  services: string[];
  title: string;
  imgs: string[];
};

const ServiceHero = ({
  name,
  description,
  services,
  title,
  imgs,
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
    <div className="relative text-white overflow-hidden">
      <div
        ref={ref}
        className="z-10 absolute h-full w-full bg-[--primary] bg-opacity-50"
        style={{
          background: "linear-gradient(130deg, #01afe9, #1b398f, #791bce)",
          backgroundSize: "200% 200%",
        }}
      ></div>
      <div className="relative flex lg:flex-row flex-col gap-10 z-40 py-28 lg:px-32 px-4">
        <h1 className="absolute flex flex-col gap-8 left-2 text-xl justify-center items-center translate-y-52 opacity-30">
          <span className="rotate-90">SCROLL</span>
          <FaLongArrowAltDown />
        </h1>
        <div>
          <ul className="flex gap-4">
            <li className="flex items-center gap-2">
              <TiHomeOutline className="text-[--text3]" size={20} />
              <Link href="/">Home</Link>
              <FaAngleRight />
            </li>
            <li className="flex gap-2 items-center">
              <Link href="/wordpress">{name}</Link>
              <FaAngleRight />
            </li>
            <li>
              <h1>Custom Web Development</h1>
            </li>
          </ul>
          <h1 className="text-4xl font-bold  my-8">{title}</h1>
          <p ref={txtRef} className="text-lg"></p>
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
          <Carousal>
            {imgs.map((img, i) => (
              <Image key={i} src={img} alt="models" width={500} height={500} />
            ))}
          </Carousal>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default ServiceHero;