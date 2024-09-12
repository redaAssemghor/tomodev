"use client";
import { backgroundAnimation } from "@/animations/fadeIn";
import ShinyButton from "@/components/magicui/shiny-button";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import React, { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { CiPhone } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiHouseLight } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";

const ContactPage = () => {
  const ref = useRef(null);

  useGSAP(() => {
    if (ref.current) {
      backgroundAnimation(ref.current);
    }
  });

  return (
    <div className="relative backdrop-blur-3xl z-40 h-full flex justify-center items-center w-full lg:p-40">
      <div
        ref={ref}
        className="z-10 absolute h-full w-full bg-[--primary] bg-opacity-50"
        style={{
          background: "linear-gradient(90deg, #00031f, #1b398f)",
          backgroundSize: "200% 200%",
        }}
      ></div>
      <div className="flex lg:flex-row flex-col z-40 pt-40 lg:pt-0 text-white lg:justify-between justify-center items-center h-full w-full">
        {/* Header Section */}
        <div className="flex flex-col p-5 lg:items-start items-center gap-4 mb-auto">
          <h2 className="text-xl font-bold">Take The Silk Road To</h2>
          <h1 className="text-3xl neon-text text-center font-black">
            Digitizing Your Business Growth
          </h1>
          <h1 className="text-2xl font-bold">Start A Conversation With Us</h1>

          <div className="lg:flex gap-8 items-center min-h-[200px] hidden">
            <div className="flex gap-4 justify-center items-center">
              <span className="w-[60px] h-[2px] bg-[--text3] inline-block"></span>
              <h1 className="text-xl font-black">Follow Us</h1>
            </div>

            <div className="flex gap-4">
              <Link
                href="#"
                className="text-xl border-2 rounded-full p-2 border-[--text2] hover:border-[--text3] hover:bg-[--text3] transition duration-500"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="text-xl border-2 rounded-full p-2 border-[--text2] hover:border-[--text3] hover:bg-[--text3] transition duration-500"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form className="relative w-full flex flex-col gap-4 p-6 max-w-lg">
          <div className="relative z-10 backdrop-blur-3xl blur-3xl h-full w-full">
            <span className="absolute z-10 top-20 left-20 w-[140px] h-[140px] rounded-full bg-[--text1]"></span>
            <span className="absolute z-10 top-24 right-24 w-[140px] h-[140px] rounded-full bg-[--text1]"></span>
          </div>
          <label
            htmlFor="Name"
            className="flex items-center py-3 z-40 border-b-[0.1px] border-[--text2] gap-3 text-xl"
          >
            <RxPerson className="text-2xl" />
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent placeholder:font-light placeholder:text-white focus:outline-none"
            />
          </label>

          <label
            htmlFor="Company"
            className="flex items-center py-3 z-40 border-b-[0.1px] border-[--text2] gap-3 text-xl"
          >
            <PiHouseLight className="text-2xl" />
            <input
              type="text"
              placeholder="Company"
              className="w-full bg-transparent placeholder:font-light placeholder:text-white focus:outline-none"
            />
          </label>

          <label
            htmlFor="email"
            className="flex items-center py-3 z-40 border-b-[0.1px] border-[--text2] gap-3 text-xl"
          >
            <AiOutlineMail className="text-2xl" />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent placeholder:font-light placeholder:text-white focus:outline-none"
            />
          </label>

          <label
            htmlFor="Phone"
            className="flex items-center py-3 z-40 border-b-[0.1px] border-[--text2] gap-3 text-xl"
          >
            <CiPhone className="text-2xl" />
            <input
              type="text"
              placeholder="Phone"
              className="w-full bg-transparent placeholder:font-light placeholder:text-white focus:outline-none"
            />
          </label>

          <label
            htmlFor="Message"
            className="flex items-start py-3 z-40 border-b-[0.1px] border-[--text2] gap-3 text-xl"
          >
            <BiMessage className="text-2xl mt-2" />
            <textarea
              placeholder="Message"
              className="w-full bg-transparent placeholder:font-light placeholder:text-white focus:outline-none resize-none h-32"
            ></textarea>
          </label>
          <div className="w-full lg:flex justify-end pt-10">
            <ShinyButton setIcon={false} className="border-2" text="Submit" />
          </div>
        </form>

        <div className="flex gap-8 items-center min-h-[200px] lg:hidden">
          <div className="flex gap-4 justify-center items-center">
            <span className="w-[60px] h-[2px] bg-[--text3] inline-block"></span>
            <h1 className="text-xl font-black">Follow Us</h1>
          </div>

          <div className="flex gap-4">
            <Link
              href="#"
              className="text-xl border-2 rounded-full p-2 border-[--text2] hover:border-[--text3] hover:bg-[--text3] transition duration-500"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="text-xl border-2 rounded-full p-2 border-[--text2] hover:border-[--text3] hover:bg-[--text3] transition duration-500"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
