import { setServices } from "@/store/features/servicesSlice";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Chess from "../svgs/Chess";
import NewsPaper from "../svgs/NewsPaper";
import Bulb from "../svgs/Bulb";
import Tag from "../svgs/Tag";
import Like from "../svgs/Like";
import Stoke from "../svgs/Stoke";
import PointyArrowDown from "../svgs/downArrow";
import { useGSAP } from "@gsap/react";
import { buttonAnimation, scrollAnimation } from "@/animations/fadeIn";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const servicesData = [
  {
    title: "Web Design & Development",
    icon: Chess,
    color: "#2563eb", // text-blue-600
  },
  {
    title: "UI/UX Design Services",
    icon: NewsPaper,
    color: "#6b21a8", // text-violet-700
  },
  {
    title: "E-Commerce Solutions",
    icon: Bulb,
    color: "#facc15", // text-yellow-400
  },
  {
    title: "Digital Marketing Services",
    icon: Tag,
    color: "#22c55e", // text-green-500
  },
  {
    title: "Security Services",
    icon: Like,
    color: "#2dd4bf", // text-teal-400
  },
  {
    title: "Consulting & Strategy",
    icon: Stoke,
    color: "#d946ef", // text-fuchsia-500
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const dispatch = useDispatch();
  const servicesRef = useRef<HTMLDivElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);
  const leftButtonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    if (servicesRef.current) {
      scrollAnimation(servicesRef.current);
    }
  });

  const selected = servicesData[currentIndex];

  // Function to navigate left
  const navigateLeft = () => {
    if (leftButtonRef.current) {
      buttonAnimation(leftButtonRef.current);
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1
    );
  };

  // Function to navigate right
  const navigateRight = () => {
    if (rightButtonRef.current) {
      buttonAnimation(rightButtonRef.current);
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === servicesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    dispatch(setServices(selected.title));
  }, [currentIndex, dispatch]);

  return (
    <div className="flex flex-col lg:pt-24 gap-8 items-center bg-[--light] border-b border-[#dee3ef] relative">
      <div className="flex flex-col lg:py-20 p-10 gap-3 items-center justify-center ">
        <h1 className="text-[--text1] lg:text-6xl text-3xl font-bold">
          Our services
        </h1>
        <p className="lg:text-4xl text-xl text-[--text2]">
          How to create a website tailored to your unique business goals?
        </p>
        <h2 className="lg:text-4xl text-xl font-medium text-[--text2]">
          Customized and goal-oriented digital solutions.
        </h2>
      </div>

      {/* Mobile view navigation */}
      <div className="lg:hidden flex items-center text-[--text1]">
        <button
          ref={leftButtonRef}
          onClick={navigateLeft}
          className="absolute left-1 -bottom-6 z-40"
        >
          <TfiAngleLeft size={50} />
        </button>

        <div
          onClick={() => dispatch(setServices(selected.title))}
          className="flex flex-col gap-4 items-center w-[100px] justify-between cursor-pointer -mb-[50px] z-40"
        >
          <h1 className="text-sm font-semibold text-center hover:text-[--text1]">
            {selected.title}
          </h1>
          <button
            className={`relative flex items-center justify-center w-[100px] rounded-full shadow-2xl h-[100px] p-5 ${"text-white bg-gradient-to-t from-[--accent] to-[--text1]"}`}
            style={{ backgroundColor: selected.color }}
          >
            <selected.icon />
            <div className="absolute z-40 -bottom-6">
              <PointyArrowDown />
            </div>
          </button>
        </div>

        <button
          ref={rightButtonRef}
          onClick={navigateRight}
          className="absolute right-1 -bottom-6 z-40"
        >
          <TfiAngleRight size={50} />
        </button>
      </div>

      {/* Desktop view */}
      <div className="lg:flex lg:gap-28 hidden gap-8 text-[--text2]">
        {servicesData.map((service, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="flex flex-col gap-4 items-center w-[100px] justify-between cursor-pointer -mb-[50px] z-40"
          >
            <h1 className="text-sm font-bold text-center hover:text-[--text1]">
              {service.title}
            </h1>
            <button
              className={`relative flex items-center justify-center w-[100px] rounded-full shadow-2xl h-[100px] p-5 ${
                currentIndex === index
                  ? "text-white bg-gradient-to-t from-[--accent] to-[--text1]"
                  : service.color + " bg-white"
              }`}
            >
              <service.icon />
              {currentIndex === index && (
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
