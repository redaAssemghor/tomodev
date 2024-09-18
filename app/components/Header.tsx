"use client";
import Link from "next/link";
import Navbar from "./Navbar";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { useEffect, useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useGSAP } from "@gsap/react";
import { burgerMenuAnimation } from "@/animations/fadeIn";

const Header = () => {
  const burgerRef = useRef(null);

  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openLinks, setOpenLinks] = useState("");

  const handleLinks = (link: string) => {
    setOpenLinks(openLinks === link ? "" : link);
  };

  const handleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(() => {
    if (burgerRef.current) {
      burgerMenuAnimation(burgerRef.current, openMenu);
    }
  }, [openMenu]);

  return (
    <nav
      className={`flex justify-between items-center p-5 w-full z-50 fixed border-b-[--light] text-white duration-700 ${
        scrolled ? "bg-[--primary] opacity-90" : "border-b-[0.1px]"
      }`}
    >
      <Link href={"/"}>
        <h1>TOMODEV</h1>
      </Link>
      {/* Mobile Menu Toggle Button */}
      <button
        ref={burgerRef}
        className="block z-50 lg:hidden"
        onClick={handleMenu}
      >
        {openMenu ? <RxCross1 size={40} /> : <CiMenuBurger size={40} />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-10 items-center">
        <Navbar />
        <ul className="flex gap-4 items-center">
          <Link href="/contact">
            <ShimmerButton className="mt-auto">
              REQUEST YOUR QUOTE
            </ShimmerButton>
          </Link>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed px-10 py-36 top-0 right-0 z-40 w-full h-screen bg-[--primary] flex flex-col items-center justify-center transition-transform duration-700 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        {/* Services Section */}
        <div className="flex flex-col gap-10 w-3/4">
          <div>
            <button
              onClick={() => handleLinks("services")}
              className="flex gap-2 pb-4 items-center font-bold text-2xl justify-between w-full"
            >
              Services <FaChevronDown />
            </button>
            <ul
              className={`flex flex-col gap-4 text-sm text-[--text1] mt-2 transition-all duration-700 ${
                openLinks === "services"
                  ? "max-h-40"
                  : "max-h-0 overflow-hidden"
              }`}
            >
              <li>
                <Link href={"/web-design"}>Custom Web Design</Link>
              </li>
              <li>
                <Link href={"/wordpress"}>Wordpress</Link>
              </li>
              <li>
                <Link href={"/shopify"}>Shopify Website Design</Link>
              </li>
              <li>
                <Link href={"/ecommerce-development"}>
                  Ecommerce Development
                </Link>
              </li>
              <li>
                <Link href={"/chatbot"}>Chatbot Integration Services</Link>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <button
              onClick={() => handleLinks("about")}
              className="flex gap-2 pb-4 items-center font-bold text-2xl justify-between w-full"
            >
              About <FaChevronDown />
            </button>
            <ul
              className={`flex flex-col gap-4 text-sm text-[--text1] mt-2 transition-all duration-700 ${
                openLinks === "about" ? "max-h-40" : "max-h-0 overflow-hidden"
              }`}
            >
              <li>
                <Link href={"/contact"}>Locations</Link>
              </li>
              <li>
                <Link href={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Documentation Section */}
          <Link
            href={"/#projects"}
            className="flex gap-2 items-center font-bold text-2xl justify-between w-full"
          >
            Projects
          </Link>
        </div>
        <div className="mt-24">
          <Link href="/contact">
            <ShimmerButton className="mt-auto">
              REQUEST YOUR QUOTE
            </ShimmerButton>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
