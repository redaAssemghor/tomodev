"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Logos = () => {
  const svgLinks = [
    "/svg/joomla.svg",
    "/svg/react.svg",
    "/svg/shopify.svg",
    "/svg/unity.svg",
    "/svg/wordpress-icon.svg",
    "/svg/google-bard.svg",
    "/svg/dotnet.svg",
    "/svg/figma.svg",
    "/svg/nextjs.svg",
    "/svg/joomla.svg",
    "/svg/react.svg",
    "/svg/shopify.svg",
    "/svg/unity.svg",
    "/svg/wordpress-icon.svg",
    "/svg/google-bard.svg",
    "/svg/dotnet.svg",
    "/svg/figma.svg",
    "/svg/nextjs.svg",
  ];
  return (
    <>
      <div className="flex justify-around w-screen opacity-70">
        {svgLinks.map((link, i) => (
          <Image key={i} src={link} alt="tech-icon" height={50} width={50} />
        ))}
      </div>
    </>
  );
};

const HorizontalBand = () => {
  return (
    <div className="overflow-hidden absolute bg-[--primary] bottom-0">
      <div className="relative flex gap-4">
        <Marquee gradient={false} speed={30}>
          <Logos />
          <Logos />
          <Logos />
          <Logos />
          <Logos />
          <Logos />
        </Marquee>
      </div>
    </div>
  );
};

export default HorizontalBand;
