import Link from "next/link";
import Navbar from "./Navbar";
import ShimmerButton from "@/components/magicui/shimmer-button";

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-5 w-full z-50 fixed border-b text-white border-white">
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
