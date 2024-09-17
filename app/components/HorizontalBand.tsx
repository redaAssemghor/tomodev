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
    <div className="overflow-hidden relative bg-inherit">
      <div className="flex gap-10">
        <Marquee gradient={false} speed={40}>
          <div className="flex justify-between gap-16 p-4 w-screen">
            {svgLinks.map((link, i) => (
              <Image
                key={i}
                src={link}
                alt="tech-icon"
                height={64}
                width={64}
                className="text-gray-400"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default HorizontalBand;
