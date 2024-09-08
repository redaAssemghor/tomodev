"use client";
import Link from "next/link";
import Navbar from "./Navbar";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`flex justify-between items-center p-5 w-full z-50 fixed border-b-slate-50 text-white border-b duration-1000 ${
        scrolled ? "bg-[--primary]" : ""
      }`}
    >
      <div>
        <h1>Tomodev</h1>
      </div>
      <Navbar />

      <div>
        <ul className="flex gap-4">
          <li className="border border-1 p-2 rounded-xl cursor-pointer">
            <Link href="/s">EN</Link>
          </li>

          <ShimmerButton>REQUEST YOUR QUOTE</ShimmerButton>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
