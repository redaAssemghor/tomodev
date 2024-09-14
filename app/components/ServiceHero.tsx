"use client";
import { backgroundAnimation } from "@/animations/fadeIn";
import ShinyButton from "@/components/magicui/shiny-button";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaAngleRight } from "react-icons/fa";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { TiHomeOutline } from "react-icons/ti";
import Carousal from "./Carousal";

type ServiceHeroProps = {
  name: string;
  description: string;
  services: string[];
  title: string;
};

const modelsimg = [
  "/models/model1.png",
  "/models/model2.webp",
  "/models/model3.png",
  "/models/model4.png",
  "/models/model5.png",
];

const ServiceHero = ({
  name,
  description,
  services,
  title,
}: ServiceHeroProps) => {
  const ref = useRef(null);

  useGSAP(() => {
    if (ref.current) {
      backgroundAnimation(ref.current);
    }
  });

  return (
    <div className="relative h-full text-white">
      <div
        ref={ref}
        className="z-10 absolute h-full w-full bg-[--primary] bg-opacity-50"
        style={{
          background: "linear-gradient(130deg, #01afe9, #1b398f, #791bce)",
          backgroundSize: "200% 200%",
        }}
      ></div>
      <div className="relative flex lg:flex-row flex-col gap-10 z-40 py-28 lg:px-32 px-4">
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
          <p className="text-lg">{description}</p>
          <ul className="flex flex-col gap-4 mt-8">
            {services &&
              services.map((service, i) => (
                <li key={i} className="flex items-center gap-2">
                  <PiPaperPlaneRightFill className="text-[--text3]" />
                  <p>{service}</p>
                </li>
              ))}
          </ul>
          <ShinyButton
            setIcon={false}
            className="border-[0.5px] border-gray-300 my-8"
            text="REQUEST A QUOTE"
          />
        </div>
        <div className="relative max-w-[500px] p-5 shrink-0">
          <h1 className="absolute top-0 -right-10 text-3xl font-bold transform translate-x-10">
            TOMODEV
          </h1>
          <Carousal>
            {modelsimg.map((img, i) => (
              <Image key={i} src={img} alt="models" width={500} height={500} />
            ))}
          </Carousal>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
