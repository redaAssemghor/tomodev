"use client";
import { scrollAnimation } from "@/animations/fadeIn";
import { setPage } from "@/store/features/featuredPageSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { CiShoppingCart, CiWallet } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";
import { useDispatch } from "react-redux";

const Featured = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [selectedButton, setSelectedButton] = useState<string | null>(
    "landing-pages"
  );

  const dispatch = useDispatch();
  useGSAP(() => {
    if (ref.current) {
      scrollAnimation(ref.current);
    }
    const btnArr = gsap.utils.toArray(".btn");
    btnArr.forEach((btn) => {
      scrollAnimation(btn as HTMLElement);
    });
  });

  const handleClick = (button: string) => {
    setSelectedButton(button === selectedButton ? selectedButton : button);
    dispatch(setPage(button));
  };

  return (
    <div
      id="projects"
      className="text-[--primary] lg:pt-20 z-40 backdrop-blur-3xl flex flex-col justify-center items-center relative"
    >
      <div className="p-3 w-full h-full flex flex-col items-center gap-5 bg-gradient-to-t from-[--accent] to-bg-inherit">
        <div ref={ref} className="flex flex-col items-center gap-5">
          <h1 className="font-bold lg:text-3xl text-lg text-glow-blue">
            OUR WORK
          </h1>
          <h2 className="font-bold lg:text-4xl text-xl">
            Featured Website Design Projects
          </h2>
          <h3 className="font-semibold lg:text-2xl text-lg text-center">
            Our web development agency reimagines digital experiences for brands
            of all sizes and across industries.
          </h3>
          <h6 className="font-semibold text-2xl text-center">
            optimized for traffic, engagement and conversion.
          </h6>
        </div>

        <ul className="flex lg:gap-10 mt-10 text-white">
          {/* Button 1 */}
          <button
            onClick={() => handleClick("landing-pages")}
            className={`btn flex -mb-5 z-40 w-[150px] flex-col p-4 rounded-lg gap-2 font-bold text-xs lg:text-xl items-center  ${
              selectedButton === "landing-pages" ? "bg-white text-black" : ""
            }`}
          >
            <IoIosStarOutline size={40} />
            <h1>LandingPages</h1>
            {selectedButton === "landing-pages" && <FaAngleDown />}
          </button>

          {/* Button 2 */}
          <button
            onClick={() => handleClick("business")}
            className={`btn flex -mb-5 z-40 w-[150px] flex-col p-4 rounded-lg gap-2 font-bold text-xs lg:text-xl items-center  ${
              selectedButton === "business" ? "bg-white text-black" : ""
            }`}
          >
            <CiWallet size={40} />
            <h1>Business</h1>
            {selectedButton === "business" && <FaAngleDown />}
          </button>

          {/* Button 3 */}
          <button
            onClick={() => handleClick("ecommerce")}
            className={`btn flex -mb-5 z-40 w-[150px] flex-col p-4 rounded-lg gap-2 font-bold text-xs lg:text-xl items-center  ${
              selectedButton === "ecommerce" ? "bg-white text-black" : ""
            }`}
          >
            <CiShoppingCart size={40} />
            <h1>ecommerce</h1>
            {selectedButton === "ecommerce" && <FaAngleDown />}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Featured;
