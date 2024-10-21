"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Logos = () => {
  const svgLinks = [
    "/carousel-brands/youtube.png",
    "/carousel-brands/twitter.png",
    "/carousel-brands/stackoverflow.png",
    "/carousel-brands/reddit.png",
    "/carousel-brands/producthunt.png",
    "/carousel-brands/iosdevweekly.png",
    "/carousel-brands/github.png",
    "/carousel-brands/flutter.png",
    "/carousel-brands/appsumo.png",
    "/carousel-brands/appradar.png",
  ];
  return (
    <>
      <div className="flex justify-between w-screen opacity-70">
        {svgLinks.map((link, i) => (
          <Image
            className="object-contain w-28 h-14 mx-4"
            key={i}
            src={link}
            alt="tech-icon"
            height={40}
            width={100}
          />
        ))}
      </div>
    </>
  );
};

const HorizontalBand = () => {
  return (
    <div className="overflow-hidden absolute bg-[--primary] bottom-0">
      <div className="relative flex gap-2 w-screen">
        <Marquee gradient={false} speed={100}>
          <Logos />
        </Marquee>
      </div>
    </div>
  );
};

export default HorizontalBand;
