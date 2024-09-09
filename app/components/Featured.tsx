"use client";
import { setPage } from "@/store/features/featuredPageSlice";
import { RootState } from "@/store/store";
import { useState } from "react";
import { CiShoppingCart, CiWallet } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

const Featured = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const featuredPage = useSelector(
    (state: RootState) => state.featuredPage.value
  );
  console.log(featuredPage);

  const dispatch = useDispatch();

  const handleClick = (button: string) => {
    setSelectedButton(button === selectedButton ? null : button);
    dispatch(setPage(button));
  };

  return (
    <div className="text-white flex flex-col justify-center items-center bg-inherit relative ">
      <div className="w-full h-full flex flex-col items-center gap-5 bg-gradient-to-t from-[--accent] to-bg-inherit">
        <h1 className="font-bold lg:text-xl text-lg">OUR WORK</h1>
        <h2 className="font-bold lg:text-3xl text-xl">
          Featured Website Design Projects
        </h2>
        <h3 className="font-thin lg:text-xl text-lg">
          Custom B2C, B2B and eCommerce solutions
        </h3>
        <h6 className="font-thin text-xl">
          optimized for traffic, engagement and conversion.
        </h6>

        <ul className="flex gap-10 mt-10">
          {/* Button 1 */}
          <button
            onClick={() => handleClick("featured")}
            className={`flex w-[150px] flex-col p-4 rounded-lg gap-2 font-bold text-xl items-center  ${
              selectedButton === "featured" ? "bg-white text-black" : ""
            }`}
          >
            <IoIosStarOutline size={40} />
            <h1>Featured</h1>
            <FaAngleDown />
          </button>

          {/* Button 2 */}
          <button
            onClick={() => handleClick("wallet")}
            className={`flex w-[150px] flex-col p-4 rounded-lg gap-2 font-bold text-xl items-center  ${
              selectedButton === "wallet" ? "bg-white text-black" : ""
            }`}
          >
            <CiWallet size={40} />
            <h1>Wallet</h1>
            <FaAngleDown />
          </button>

          {/* Button 3 */}
          <button
            onClick={() => handleClick("cart")}
            className={`flex w-[150px] flex-col p-4 rounded-lg gap-2 font-bold text-xl items-center  ${
              selectedButton === "cart" ? "bg-white text-black" : ""
            }`}
          >
            <CiShoppingCart size={40} />
            <h1>Cart</h1>
            <FaAngleDown />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Featured;
