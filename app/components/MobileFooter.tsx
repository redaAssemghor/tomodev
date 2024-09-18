"use client";
import { useState } from "react";
import Link from "next/link";
import DownArrowAvg from "../svgs/DownArrowAvg";
import { PiArrowElbowDownRightThin } from "react-icons/pi";
import FooterLogo from "./FooterLogo";

const MobileFooter = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <div className="h-full bg-gradient-to-tr from-[--text] to-[--secondary]">
      <div className="text-white px-4 py-20 h-full">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl">Let&rsquo;s Grow Your Brand</h1>

          {/* Main Services Section */}
          <div>
            <h1
              className="font-semibold text-xl flex items-center justify-between border-b py-5 cursor-pointer"
              onClick={() => toggleSection("mainServices")}
            >
              Main Services
              <span>
                <DownArrowAvg />
              </span>
            </h1>
            {openSection === "mainServices" && (
              <ul className="flex flex-col gap-5 text-[16px] py-8">
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="/web-design">Custom Web Design</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="/wordpress">Wordpress</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="/ecommerce-development">
                    Ecommerce Development
                  </Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="/shopify">Shopify Website Design</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="/chatbot">Chatbot Integration Services</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Apps & Development Section */}
          <div>
            <h1
              className="font-semibold text-xl flex items-center justify-between border-b py-5 cursor-pointer"
              onClick={() => toggleSection("appsDevelopment")}
            >
              Company
              <span>
                <DownArrowAvg />
              </span>
            </h1>
            {openSection === "appsDevelopment" && (
              <ul className="flex flex-col gap-5 text-[16px] py-8">
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="/about-us">About Us</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="/contact">Locations</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Company Section */}
          <Link href="/contact">
            <h1 className="font-semibold text-xl flex items-center justify-between border-b py-5 cursor-pointer">
              Projects
            </h1>
          </Link>
        </div>
      </div>

      <FooterLogo />
    </div>
  );
};

export default MobileFooter;
