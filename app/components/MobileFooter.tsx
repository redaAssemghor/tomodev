"use client";
import { useState } from "react";
import Link from "next/link";
import DownArrowAvg from "../svgs/DownArrowAvg";
import { PiArrowElbowDownRightThin } from "react-icons/pi";
import FooterLogo from "./FooterLogo";

const MobileFooter = () => {
  // State to control which section is open
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Toggle function for sections
  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null); // Close if it's already open
    } else {
      setOpenSection(section); // Open the clicked section
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
                  <Link href="#">Custom Web Design</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="#">Branding Services</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="#">eCommerce Design</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="#">Shopify Website Design</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="#">WordPress Web Design</Link>
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
              Apps & Development
              <span>
                <DownArrowAvg />
              </span>
            </h1>
            {openSection === "appsDevelopment" && (
              <ul className="flex flex-col gap-5 text-[16px] py-8">
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="#">Website Cost Calculator</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="#">Conversion Rate Calculator</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="#">Custom Web Development</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="#">Magento Development</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="#">eCommerce Development</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="#">WooCommerce Development</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Company Section */}
          <div>
            <h1
              className="font-semibold text-xl flex items-center justify-between border-b py-5 cursor-pointer"
              onClick={() => toggleSection("company")}
            >
              Company
              <span>
                <DownArrowAvg />
              </span>
            </h1>
            {openSection === "company" && (
              <ul className="flex flex-col gap-5 text-[16px] py-8">
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="#">About Us</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="#">Case Studies</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="#">Digital Trends</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="#">Top Companies</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="#">Reviews</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="#">Sitemap</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="#">Locations</Link>
                </li>
                <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                  <PiArrowElbowDownRightThin />
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <FooterLogo />
    </div>
  );
};

export default MobileFooter;
