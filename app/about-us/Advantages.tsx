"use client";
import { backgroundAnimation } from "@/animations/fadeIn";
import ShinyButton from "@/components/magicui/shiny-button";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useRef } from "react";
import { IoLanguageSharp } from "react-icons/io5";
import {
  MdAttachMoney,
  MdOutlineWorkspacePremium,
  MdSupportAgent,
} from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

const advantageData = [
  {
    icon: <MdAttachMoney size={50} />,
    title: "Charges",
    description: "Super reasonable prices for flawless services.",
  },
  {
    icon: <MdSupportAgent size={50} />,
    title: "Customer Support",
    description: "Full-week access to support services.",
  },
  {
    icon: <PiStudentBold size={50} />,
    title: "Quality",
    description: "Our staff are all computer science graduates.",
  },
  {
    icon: <MdOutlineWorkspacePremium size={50} />,
    title: "Experience",
    description: "Experienced team with over 5 years in the field.",
  },
  {
    icon: <IoLanguageSharp size={50} />,
    title: "Multi-Language",
    description: "Our team speaks fluent English and 5+ languages.",
  },
];

const Advantages = () => {
  const ref = useRef(null);

  useGSAP(() => {
    if (ref.current) {
      backgroundAnimation(ref.current);
    }
  });

  return (
    <div className="relative text-[--light] flex flex-col justify-center items-center gap-4 h-screen">
      <div
        ref={ref}
        className="z-10 absolute h-full w-full bg-[--primary] bg-opacity-50"
        style={{
          background: "linear-gradient(90deg, #00031f, #791bce)",
          backgroundSize: "200% 200%",
        }}
      ></div>
      <div className="flex flex-col justify-center items-center gap-6 relative z-40 h-full w-full bg-[url('/bg-blurr.png')] bg-cover bg-center">
        <div className="flex flex-col gap-3 items-center pb-8">
          <h2 className="text-xl font-bold">Why Choose TOMODEV</h2>
          <h1 className="text-5xl font-bold">Our Primary Advantages</h1>
        </div>
        <div className="grid grid-cols-3 gap-5 gap-y-12">
          {advantageData.map((advantage, index) => (
            <div key={index} className="flex gap-2">
              {advantage.icon}
              <div>
                <h3 className="text-xl font-bold">{advantage.title}</h3>
                <p className="text-sm text-center">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Link className="mt-4" href="/contact-us">
          <ShinyButton text="SPEAK WITH OUR EXPERTS" />
        </Link>
      </div>
    </div>
  );
};

export default Advantages;
