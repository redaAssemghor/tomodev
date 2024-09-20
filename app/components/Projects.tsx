import { backgroundAnimation } from "@/animations/fadeIn";
import { RootState } from "@/store/store";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Project } from "../lib/types";
import {
  setShowTemplateAction,
  setTemplateAction,
} from "@/store/features/templateSlice";
import TemplateView from "./TemplateView";

type Projects = {
  landingPages: Project[];
  business: Project[];
  ecommerce: Project[];
};

const Projects = ({ landingPages, business, ecommerce }: Projects) => {
  const [selectedPage, setSelectedPage] = useState<Project[] | null>(null);
  const [mouseEnter, setMouseEnter] = useState<number | null>(null);

  const projects = useSelector((state: RootState) => state.featuredPage.value);
  const ref = useRef(null);

  const dispatch = useDispatch();
  const Showtemplate = useSelector((state: RootState) => state.template.show);

  useGSAP(() => {
    if (ref.current) {
      backgroundAnimation(ref.current);
    }
  });

  useEffect(() => {
    if (projects === "landing-pages") {
      setSelectedPage(landingPages);
    }
    if (projects === "business") {
      setSelectedPage(business);
    }
    if (projects === "ecommerce") {
      setSelectedPage(ecommerce);
    }
    console.log(projects);
  }, [projects]);

  const handleMouseEnter = (index: number) => {
    setMouseEnter(index);
  };

  const handleMouseLeave = () => {
    setMouseEnter(null);
  };

  const handleShowTemplate = (link: string) => {
    dispatch(setShowTemplateAction(true));
    dispatch(setTemplateAction(link));
  };

  return (
    <div className="relative z-50 text-white bg-inherit py-20 lg:px-8 px-4 grid lg:grid-cols-2 grid-cols-1 gap-6">
      <div
        ref={ref}
        className="z-10 absolute h-full w-full bg-[--primary] bg-opacity-50"
        style={{
          background: "linear-gradient(90deg, #00031f, #1b398f)",
          backgroundSize: "200% 200%",
        }}
      ></div>
      {Showtemplate && <TemplateView />}
      {selectedPage &&
        selectedPage.map((project, i) => (
          <div
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            key={i}
            className="relative"
          >
            <div className="absolute text-white bottom-0 left-0 py-14 px-10 flex flex-col gap-4">
              <h1 className="font-bold z-30 lg:text-3xl text-sm">
                {project.name}
              </h1>
            </div>
            <button
              onClick={() => handleShowTemplate(project.img)}
              className={`absolute flex items-center justify-center z-40 w-[150px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-10 font-light text-2xl transition-opacity duration-700 ${
                mouseEnter === i ? "opacity-100" : "opacity-0"
              }`}
            >
              View Template
            </button>
            <div>
              <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>
            </div>
            <div className="relative z-10 h-[480px] overflow-hidden">
              <Image
                width={800}
                height={800}
                src={project.img}
                alt={project.name}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Projects;
