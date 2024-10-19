"use client";
import Link from "next/link";
import Navbar from "./Navbar";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import { burgerMenuAnimation } from "@/animations/fadeIn";
import Image from "next/image";
import Checkbox from "./ui/Menu";
import Button from "./ui/Button";

const Header = () => {
  const burgerRef = useRef(null);

  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openLinks, setOpenLinks] = useState("");

  const servicesLinks = [
    { title: "Custom Web Design", link: "/web-design" },
    { title: "Wordpress", link: "/wordpress" },
    { title: "Shopify Website Design", link: "/shopify" },
    { title: "Ecommerce Development", link: "/ecommerce-development" },
    { title: "Chatbot Integration Services", link: "/chatbot" },
  ];

  const aboutLinks = [
    { title: "Locations", link: "/contact" },
    { title: "About Us", link: "/about-us" },
    { title: "Contact Us", link: "/contact" },
  ];

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
      className={`flex bg-[--primary] justify-between items-center lg:py-5 lg:px-11 p-2 w-full z-50 fixed border-b-[--light] text-white duration-700 ${
        scrolled ? "opacity-90" : "border-b-[0.1px]"
      }`}
    >
      <Link className="z-50" href={"/"}>
        <Image src="/logo-name.png" alt="logo" height={64} width={160} />
      </Link>
      <div className="z-50 block lg:hidden">
        <Checkbox handleMenu={handleMenu} />
      </div>

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
        className={`fixed top-0 right-0 p-3 z-40 w-full h-screen bg-[--primary] flex flex-col transition-transform duration-700 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        {/* Services Section */}
        <div className="flex flex-col w-full pt-28 space-y-6">
          <div>
            <button
              onClick={() => handleLinks("services")}
              className="flex items-center font-bold text-lg justify-between w-full"
            >
              Services <FaChevronDown />
            </button>
            <ul
              className={`flex flex-col gap-4 text-sm text-[--text1] mt-2 ${
                openLinks === "services"
                  ? "max-h-40"
                  : "max-h-0 overflow-hidden"
              }`}
            >
              {servicesLinks.map((service, i) => (
                <li key={i} className="hover:underline transition duration-300">
                  <Link onClick={handleMenu} href={service.link}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Section */}
          <div>
            <button
              onClick={() => handleLinks("about")}
              className="flex gap-2 pb-4 items-center font-bold text-lg justify-between w-full"
            >
              About <FaChevronDown />
            </button>
            <ul
              className={`flex flex-col gap-4 text-sm text-[--text1] mt-2 ${
                openLinks === "about" ? "max-h-40" : "max-h-0 overflow-hidden"
              }`}
            >
              {aboutLinks.map((about, i) => (
                <li key={i} className="hover:underline transition duration-300">
                  <Link onClick={handleMenu} href={about.link}>
                    {about.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Documentation Section */}
          <Link
            onClick={handleMenu}
            href={"/#projects"}
            className="flex gap-2 items-center font-bold text-lg justify-between w-full"
          >
            Projects
          </Link>
        </div>
        <div className="pb-5 mt-auto">
          <Link href="/contact">
            <Button text="REQUEST YOUR QUOTE" handleClick={handleMenu} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
