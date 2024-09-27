"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const HorizontalBand = () => {
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
  ];

  return (
    <div className="overflow-hidden relative bg-inherit backdrop-blur-3xl">
      <div className="flex gap-10">
        <Marquee gradient={false} speed={40}>
          <div className="flex justify-evenly p-2 w-screen px-16 opacity-70">
            {svgLinks.map((link, i) => (
              <Image
                className="p-2 lg:p-0"
                key={i}
                src={link}
                alt="tech-icon"
                height={50}
                width={50}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default HorizontalBand;
