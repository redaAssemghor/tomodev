"use client";
import Clients from "./Clients";
import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BsPersonCheck } from "react-icons/bs";
import { LiaAwardSolid } from "react-icons/lia";
import Awards from "./Awards";
import About from "./About";

const AboutUsHero = () => {
  const [name, setName] = useState("about");

  return (
    <div className="relative">
      {name === "about" && <About />}
      {name === "clients" && <Clients />}
      {name === "awards" && <Awards />}
      <div className="relative w-full">
        <ul className="border-b text-[--light] text-xl absolute left-1/2 -translate-x-1/2 bottom-0 flex justify-around z-40 border-b-[rgba(255,255,255,0.4)]">
          <li
            className={`flex gap-2 items-center py-2 px-20 border-x transition duration-500 ${
              name === "about" ? "border-b-4 opacity-100" : "opacity-40"
            }`}
          >
            <IoMdInformationCircleOutline />
            <button onClick={() => setName("about")}>ABOUT</button>
          </li>
          <li
            className={`flex gap-2 items-center py-2 px-20 border-x transition duration-500 ${
              name === "awards" ? "border-b-4 opacity-100" : "opacity-40"
            }`}
          >
            <BsPersonCheck />
            <button onClick={() => setName("awards")}>AWARDS</button>
          </li>
          <li
            className={`flex gap-2 items-center py-2 px-20 border-x transition duration-500 ${
              name === "clients" ? "border-b-4 opacity-100" : "opacity-40"
            }`}
          >
            <LiaAwardSolid />
            <button onClick={() => setName("clients")}>CLIENTS</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsHero;
