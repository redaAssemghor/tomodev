"use client";
import {
  animateBackgroundHover,
  backgroundAnimation,
  scrollAnimation,
} from "@/animations/fadeIn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";

const teamInfo = [
  {
    name: "Reda Assemghor",
    image: "/team/reda.png",
    role: "full-stack developer",
  },
  {
    name: "Djardi Messaoud",
    image: "/team/messaoud.png",
    role: "Backend developer",
  },
  {
    name: "Mohamed Safi",
    image: "/team/safi.png",
    role: "head of design department",
  },
];

const TeamInfo = () => {
  const ref = useRef(null);
  const containerRef = useRef<HTMLDivElement[]>([]);
  const talentRef = useRef<HTMLSpanElement[]>([]);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  useGSAP(() => {
    if (ref.current) {
      backgroundAnimation(ref.current);
    }

    if (containerRef.current.length > 0) {
      containerRef.current.forEach((container, i) => {
        const talent = talentRef.current[i];
        animateBackgroundHover(talent, container);
      });
    }
    const textAnimation = gsap.utils.toArray(".text");
    textAnimation.forEach((element) => {
      scrollAnimation(element as HTMLElement);
    });
  });
  return (
    <div className="relative">
      <div
        ref={ref}
        className="z-10 absolute h-full w-full bg-[--primary] bg-opacity-50"
        style={{
          background: "linear-gradient(90deg, #04e4ff, #791bce, #1b398f)",
          backgroundSize: "200% 200%",
        }}
      ></div>
      <div className="relative p-5 flex flex-col gap-5 items-center text-white z-40">
        <div className="py-20 flex flex-col gap-5 items-center">
          <h1 className="text text-4xl font-bold">Meet Our Team</h1>
          <p className="text lg:text-3xl text-xl max-w-prose mx-auto text-center">
            Our team is made up of talented, dedicated professionals who bring a
            wealth of experience to the table.
          </p>
        </div>

        <div className="flex">
          {teamInfo.map((member, index) => (
            <div
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              ref={(el) => {
                if (el) {
                  containerRef.current[index] = el;
                }
              }}
              key={index}
            >
              <div className="relative">
                <span
                  className={`h-full w-full bg-[url('/bg-blurr.png')] bg-center absolute transition-opacity duration-700 ${
                    isHovered === index ? "opacity-45" : "opacity-0"
                  }`}
                ></span>
                <Image
                  className="h-[350px] w-[300px] object-cover "
                  height={300}
                  width={300}
                  src={member.image}
                  alt="image"
                />
                <div className="absolute bottom-0 p-4 w-full">
                  <div className="p-2 relative">
                    <span
                      className="absolute left-0 bg-gradient-to-r from-[--secondary-color2] to-[--accent] w-0 h-full z-0"
                      ref={(el) => {
                        if (el) {
                          talentRef.current[index] = el;
                        }
                      }}
                    ></span>
                    <h1 className="relative text-2xl font-black z-20">
                      {member.name}
                    </h1>
                    <h2 className="relative text-xl z-20">{member.role}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-white flex flex-col items-center gap-8 relative z-40 lg:p-24 p-5">
        <h1 className="text text-4xl font-bold text-glow-blue">Got Talent?</h1>
        <p className="text lg:text-3xl text-xl text-center max-w-prose">
          We are always seeking talented people with passion, experience and the
          ability to <span className="text-glow-blue">make a difference</span>{" "}
          for our clients.
        </p>
        <p className="text lg:text-3xl text-xl text-center max-w-prose">
          If you’re interested in joining the Tomodev team,
          <br /> send your resume and cover letter to{" "}
          <span className="text-glow-blue">jobs@tomodev.com</span>
        </p>
        <h1 className="text lg:text-[160px] text-6xl font-black text-glow-blue lg:-mb-32 z-10">
          Join our team
        </h1>
      </div>
    </div>
  );
};

export default TeamInfo;
