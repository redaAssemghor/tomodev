import { RootState } from "@/store/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface Project {
  name: string;
  description: string;
  img: string;
}

const Projects = () => {
  const [selectedPage, setSelectedPage] = useState<Project[] | null>(null);
  const [mouseEnter, setMouseEnter] = useState<number | null>(null);
  const projects = useSelector((state: RootState) => state.featuredPage.value);

  const featured = [
    {
      name: "Microsoft",
      description:
        "Microsoft is a technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      img: "/template/0.jpg",
    },
    {
      name: "Microsoft",
      description:
        "Microsoft is a technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      img: "/template/1.webp",
    },
    {
      name: "Apple",
      description:
        "Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services.",
      img: "/template/2.jpg",
    },
  ];

  const wallet = [
    {
      name: "Google",
      description:
        "Google is an American multinational technology company that specializes in Internet-related services and products.",
      img: "/template/3.jpg",
    },
    {
      name: "Facebook",
      description:
        "Facebook is an American online social media and social networking service company based in Menlo Park, California.",
      img: "/template/4.jpg",
    },
    {
      name: "LinkedIn",
      description:
        "LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps.",
      img: "/template/5.png",
    },
    {
      name: "Twitter",
      description:
        "Twitter is an American microblogging and social networking service on which users post and interact with messages known as tweets.",
      img: "/template/6.jpg",
    },
  ];

  const cart = [
    {
      name: "Apple",
      description:
        "Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services.",
      img: "/template/7.webp",
    },
    {
      name: "Twitter",
      description:
        "Twitter is an American microblogging and social networking service on which users post and interact with messages known as tweets.",
      img: "/template/8.jpg",
    },
    {
      name: "Twitter",
      description:
        "Twitter is an American microblogging and social networking service on which users post and interact with messages known as tweets.",
      img: "/template/9.png",
    },
  ];

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
    <div className="relative text-white bg-inherit py-10 lg:px-8 px-4 grid lg:grid-cols-2 grid-cols-1 gap-4">
      {selectedPage &&
        selectedPage.map((project, i) => (
          <div
            onMouseEnter={() => handelMouseEnter(i)}
            onMouseLeave={handelMouseLeave}
            key={i}
            className="relative"
          >
            <div className="absolute bottom-0 left-0 py-14 px-10 flex flex-col gap-4">
              <h1 className="font-bold lg:text-3xl text-xl">{project.name}</h1>
              <p className="lg:text-xl text-lg font-semibold">
                {project.description}
              </p>
            </div>
            <button
              className={`absolute w-[150px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-10 font-light text-2xl z-20 transition-opacity duration-700 ${
                mouseEnter === i ? "opacity-100" : "opacity-0"
              }`}
            >
              View Project
            </button>
            <Image
              className="z-0"
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
