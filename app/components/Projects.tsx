import { backgroundAnimation } from "@/animations/fadeIn";
import { RootState } from "@/store/store";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Project } from "../lib/types";

type Projects = {
  featured: Project[];
  wallet: Project[];
  cart: Project[];
};

const Projects = ({ featured, wallet, cart }: Projects) => {
  const [selectedPage, setSelectedPage] = useState<Project[] | null>(null);
  const [mouseEnter, setMouseEnter] = useState<number | null>(null);
  const projects = useSelector((state: RootState) => state.featuredPage.value);
  const ref = useRef(null);

  useGSAP(() => {
    if (ref.current) {
      backgroundAnimation(ref.current);
    }
  });

  useEffect(() => {
    if (projects === "featured") {
      setSelectedPage(featured);
    }
    if (projects === "wallet") {
      setSelectedPage(wallet);
    }
    if (projects === "cart") {
      setSelectedPage(cart);
    }
  }, [projects]);

  const handelMouseEnter = (index: number) => {
    setMouseEnter(index);
  };

  const handelMouseLeave = () => {
    setMouseEnter(null);
  };

  return (
    <div className="relative z-20 text-white bg-inherit py-20 lg:px-8 px-4 grid lg:grid-cols-2 grid-cols-1 gap-6">
      <div
        ref={ref}
        className="z-10 absolute h-full w-full bg-[--primary] bg-opacity-50"
        style={{
          background: "linear-gradient(90deg, #00031f, #1b398f)",
          backgroundSize: "200% 200%",
        }}
      ></div>
      {selectedPage &&
        selectedPage.map((project, i) => (
          <div
            onMouseEnter={() => handelMouseEnter(i)}
            onMouseLeave={handelMouseLeave}
            key={i}
            className="relative"
          >
            <div className="absolute text-white bottom-0 left-0 py-14 px-10 flex flex-col gap-4">
              <h1 className="font-bold z-30 lg:text-3xl text-sm">
                {project.name}
              </h1>
              <p className="lg:text-xl z-30 text-sm font-semibold">
                {project.description}
              </p>
            </div>
            <button
              className={`absolute z-40 w-[150px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-10 font-light text-2xl transition-opacity duration-700 ${
                mouseEnter === i ? "opacity-100" : "opacity-0"
              }`}
            >
              View Project
            </button>
            <div>
              <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>
            </div>
            <Image
              className="relative z-10"
              width={800}
              height={800}
              src={project.img}
              alt={project.name}
            />
          </div>
        ))}
    </div>
  );
};

export default Projects;
