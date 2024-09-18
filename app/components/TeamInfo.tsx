"use client";
import {
  animateBackgroundHover,
  backgroundAnimation,
} from "@/animations/fadeIn";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

const teamInfo = [
  {
    name: "Reda Assemghor",
    image: "/thumbnail.webp",
    role: "full-stack developer",
  },
  {
    name: "Reda Assemghor",
    image: "/thumbnail.webp",
    role: "full-stack developer",
  },
  {
    name: "Reda Assemghor",
    image: "/thumbnail.webp",
    role: "full-stack developer",
  },
  {
    name: "Reda Assemghor",
    image: "/thumbnail.webp",
    role: "full-stack developer",
  },
];

const TeamInfo = () => {
  const ref = useRef(null);
  const containerRef = useRef<HTMLDivElement[]>([]);
  const talentRef = useRef<HTMLSpanElement[]>([]);

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
  });
  return (
    <div className="relative">
      <div
        ref={ref}
        className="z-10 absolute h-full w-full bg-[--primary] bg-opacity-50"
        style={{
          background: "linear-gradient(90deg, #00031f, #1b398f)",
          backgroundSize: "200% 200%",
        }}
      ></div>
      <div className="relative p-5 flex flex-col gap-5 items-center text-white z-40">
        <div className="py-20 flex flex-col gap-5 items-center">
          <h1 className="text-4xl font-bold">Meet Our Team</h1>
          <p className="lg:text-3xl text-xl max-w-prose mx-auto text-center">
            Our team is made up of talented, dedicated professionals who bring a
            wealth of experience to the table.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          {teamInfo.map((member, index) => (
            <div
              ref={(el) => {
                if (el) {
                  containerRef.current[index] = el;
                }
              }}
              key={index}
            >
              <div className="relative">
                <span className="h-full w-full bg-[url('/bg-blurr.png')] bg-cover bg-center absolute opacity-0 hover:opacity-60 transition-opacity duration-700"></span>
                <Image height={500} width={500} src={member.image} alt="" />
                <div className="absolute bottom-0 p-5 w-full">
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
        <h1 className="text-4xl font-bold text-glow-blue">Got Talent?</h1>
        <p className="lg:text-3xl text-xl text-center max-w-prose">
          We are always seeking talented people with passion, experience and the
          ability to <span className="text-glow-blue">make a difference</span>{" "}
          for our clients.
        </p>
        <p className="lg:text-3xl text-xl text-center max-w-prose">
          If you’re interested in joining the Digital Silk team,
          <br /> send your resume and cover letter to{" "}
          <span className="text-glow-blue">jobs@tomodev.com</span>
        </p>
        <h1 className="lg:text-[160px] text-6xl font-black text-glow-blue lg:-mb-40 z-10">
          Join our team
        </h1>
      </div>
    </div>
  );
};

export default TeamInfo;
