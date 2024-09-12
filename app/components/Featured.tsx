"use client";
import { scrollAnimation } from "@/animations/fadeIn";
import { setPage } from "@/store/features/featuredPageSlice";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { CiShoppingCart, CiWallet } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";
import { useDispatch } from "react-redux";

const Featured = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [selectedButton, setSelectedButton] = useState<string | null>(
    "featured"
  );

  const dispatch = useDispatch();
  useGSAP(() => {
    if (ref.current) {
      scrollAnimation(ref.current);
    }
  });

  const handleClick = (button: string) => {
    setSelectedButton(button === selectedButton ? null : button);
    dispatch(setPage(button));
  };

  return (
    <div className="text-white backdrop-blur-3xl flex flex-col justify-center items-center bg-inherit relative">
      <div className="w-full h-full flex flex-col items-center gap-5 bg-gradient-to-t from-[--accent] to-bg-inherit">
        <div ref={ref} className="flex flex-col items-center gap-5">
          <h1 className="font-bold lg:text-xl text-lg text-[--text1]">
            OUR WORK
          </h1>
          <h2 className="font-bold lg:text-3xl text-xl">
            Featured Website Design Projects
          </h2>
          <h3 className="font-thin neon-text lg:text-xl text-lg">
            Our web development agency reimagines digital experiences for brands
            of all sizes and across industries.
          </h3>
          <h6 className="font-thin neon-text text-xl">
            optimized for traffic, engagement and conversion.
          </h6>
        </div>

        <ul className="flex lg:gap-10 mt-10">
          {/* Button 1 */}
          <button
            onClick={() => handleClick("featured")}
            className={`flex -mb-5 z-40 w-[150px] flex-col p-4 rounded-lg gap-2 font-bold text-sm lg:text-xl items-center  ${
              selectedButton === "featured" ? "bg-white text-black" : ""
            }`}
          >
            <IoIosStarOutline size={40} />
            <h1>Featured</h1>
            {selectedButton === "featured" && <FaAngleDown />}
          </button>

          {/* Button 2 */}
          <button
            onClick={() => handleClick("wallet")}
            className={`flex -mb-5 z-40 w-[150px] flex-col p-4 rounded-lg gap-2 font-bold text-sm lg:text-xl items-center  ${
              selectedButton === "wallet" ? "bg-white text-black" : ""
            }`}
          >
            <CiWallet size={40} />
            <h1>Wallet</h1>
            {selectedButton === "wallet" && <FaAngleDown />}
          </button>

          {/* Button 3 */}
          <button
            onClick={() => handleClick("cart")}
            className={`flex -mb-5 z-40 w-[150px] flex-col p-4 rounded-lg gap-2 font-bold text-sm lg:text-xl items-center  ${
              selectedButton === "cart" ? "bg-white text-black" : ""
            }`}
          >
            <CiShoppingCart size={40} />
            <h1>Cart</h1>
            {selectedButton === "cart" && <FaAngleDown />}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Featured;
