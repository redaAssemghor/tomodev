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
      <div className="flex justify-around w-screen opacity-70">
        {svgLinks.map((link, i) => (
          <Image key={i} src={link} alt="tech-icon" height={60} width={60} />
        ))}
      </div>
    </>
  );
};

const HorizontalBand = () => {
  return (
    <div className="overflow-hidden absolute bg-[--primary] bottom-0">
      <div className="relative flex gap-4">
        <Marquee gradient={false} speed={500}>
          <Logos />
        </Marquee>
      </div>
    </div>
  );
};

export default HorizontalBand;
