import { setServices } from "@/store/features/servicesSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Chess from "../svgs/Chess";
import NewsPaper from "../svgs/NewsPaper";
import Bulb from "../svgs/Bulb";
import Tag from "../svgs/Tag";
import Like from "../svgs/Like";
import Stoke from "../svgs/Stoke";
import PointyArrowDown from "../svgs/downArrow";

const servicesData = [
  {
    title: "Web Design & Development",
    icon: Chess,
    color: "text-blue-600",
  },
  {
    title: "UI/UX Design Services",
    icon: NewsPaper,
    color: "text-violet-700",
  },
  {
    title: "E-Commerce Solutions",
    icon: Bulb,
    color: "text-yellow-400",
  },
  {
    title: "Digital Marketing Services",
    icon: Tag,
    color: "text-green-500",
  },
  {
    title: "Security Services",
    icon: Like,
    color: "text-teal-400",
  },
  {
    title: "Consulting & Strategy",
    icon: Stoke,
    color: "text-fuchsia-500",
  },
];

const Services = () => {
  const [clicked, setClicked] = useState("");
  const dispatch = useDispatch();

  const handleService = (title: string) => {
    dispatch(setServices(title));
    setClicked(title);
  };

  return (
    <div className="flex flex-col lg:pt-24 gap-8 items-center bg-[--light] relative">
      <div className="flex flex-col lg:py-20 p-10 gap-3 items-center justify-center ">
        <h1 className="text-[--text1] lg:text-6xl text-3xl font-bold">
          Our services
        </h1>
        <p className="lg:text-4xl text-xl text-[--text2]">
          How to create a website tailored to your unique business goals?
        </p>
        <h2 className="lg:text-4xl text-xl font-medium text-[--text2]">
          customized and goal-oriented digital solutions.
        </h2>
      </div>

      <div className="lg:flex lg:gap-28 grid grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            onClick={() => handleService(service.title)}
            className="flex flex-col gap-4 items-center w-[100px] justify-between cursor-pointer"
          >
            <h1 className="text-sm font-semibold text-center hover:text-[--text1]">
              {service.title}
            </h1>
            <button
              className={`relative flex items-center justify-center w-[100px] rounded-full shadow-2xl h-[100px] p-5 ${
                clicked === service.title
                  ? "text-white bg-gradient-to-t from-[--accent] to-[--text1]"
                  : service.color
              } `}
            >
              <service.icon />
              {clicked === service.title && (
                <div className="absolute z-40 -bottom-6">
                  <PointyArrowDown />
                </div>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
