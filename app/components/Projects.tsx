import { backgroundAnimation } from "@/animations/fadeIn";
import { RootState } from "@/store/store";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Project } from "../lib/types";
import {
  setShowTemplateAction,
  setTemplateAction,
} from "@/store/features/templateSlice";
import TemplateView from "./TemplateView";
import Card from "./ui/TemplateCard";

type Projects = {
  landingPages: Project[];
  mobile: Project[];
  ecommerce: Project[];
};

const Projects = ({ landingPages, mobile, ecommerce }: Projects) => {
  const [selectedPage, setSelectedPage] = useState<Project[] | null>(null);

  const Showtemplate = useSelector((state: RootState) => state.template.show);
  const projects = useSelector((state: RootState) => state.featuredPage.value);
  const ref = useRef(null);

  const projectsRef = useRef(null);

  const dispatch = useDispatch();

  useGSAP(() => {
    if (ref.current) {
      backgroundAnimation(ref.current);
    }
  });

  useEffect(() => {
    if (projects === "landing-pages") {
      setSelectedPage(landingPages);
    }
    if (projects === "mobile") {
      setSelectedPage(mobile);
    }
    if (projects === "ecommerce") {
      setSelectedPage(ecommerce);
    }
    console.log(projects);
  }, [projects]);

  const handleShowTemplate = (link: object) => {
    dispatch(setShowTemplateAction(true));
    dispatch(setTemplateAction(link));
  };

  return (
    <div className="relative z-30 text-white">
      <div
        ref={ref}
        className="z-10 absolute h-full w-full bg-[--primary] bg-opacity-50"
        style={{
          background: "linear-gradient(90deg, #00031f, #1b398f)",
          backgroundSize: "200% 200%",
        }}
      ></div>
      <div
        ref={projectsRef}
        className="py-20  bg-inherit lg:px-36 px-4 grid lg:grid-cols-2 grid-cols-1 gap-6"
      >
        {selectedPage &&
          selectedPage.map((project, i) => (
            <div className="relative z-50" key={i}>
              <Card
                link={project.img}
                name={project.name}
                handleShowTemplate={() => handleShowTemplate(project)}
              />
            </div>
          ))}
      </div>
      {Showtemplate && <TemplateView />}
    </div>
  );
};

export default Projects;
