import { PiArrowElbowDownRightThin } from "react-icons/pi";
import Link from "next/link";
import FooterLogo from "./FooterLogo";

const Footer = () => {
  return (
    <div className="relative z-40 h-full bg-gradient-to-b from-[--text] to-[--secondary]">
      <div className="relative text-white px-4 py-20 h-full">
        <h1 className="font-bold text-6xl m-20 z-40">
          Let&rsquo;s Grow Your Brand
        </h1>
        <div className="flex w-full justify-around gap-2">
          {/* Main Services Section */}
          <div className="relative p-5 border-l">
            <span className="absolute top-0 left-0 w-1 h-4 bg-white"></span>
            <h1 className="font-bold text-3xl flex items-center justify-between cursor-pointer">
              Main Services
            </h1>
            <ul className="flex flex-col gap-5 text-[16px] py-8">
              <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                <PiArrowElbowDownRightThin />
                <Link href="/wordpress">Wordpress</Link>
              </li>
              <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                <PiArrowElbowDownRightThin />
                <Link href="/web-design">Custom Web Design</Link>
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
          </div>

          {/* Apps & Development Section */}
          <div className="relative p-5 border-l">
            <span className="absolute top-0 left-0 w-1 h-4 bg-white ronded-r-full"></span>
            <h1 className="font-bold text-3xl flex items-center justify-between cursor-pointer">
              Apps & Development
            </h1>
            <ul className="flex flex-col gap-5 text-[16px] py-8">
              <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                <PiArrowElbowDownRightThin />
                <Link href="/contact">Website Cost Calculator</Link>
              </li>
              <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                <PiArrowElbowDownRightThin />
                <Link href="#">Conversion Rate Calculator</Link>
              </li>
              <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                <PiArrowElbowDownRightThin />
                <Link href="/contact">Custom Web Development</Link>
              </li>
              <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                <PiArrowElbowDownRightThin />
                <Link href="/ecommerce-development">Ecommerce Development</Link>
              </li>
            </ul>
          </div>

          <div className="relative p-5 border-l">
            <span className="absolute top-0 left-0 w-1 h-4 bg-white rounded-r-full"></span>
            <span className="footer-services widget_nav_menu"></span>
            <h1 className="font-bold text-3xl flex items-center justify-between cursor-pointer">
              Company
            </h1>
            <ul className="flex flex-col gap-5 text-[16px] py-8">
              <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                <PiArrowElbowDownRightThin />
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                <PiArrowElbowDownRightThin />
                <Link href="#">Reviews</Link>
              </li>
              <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                <PiArrowElbowDownRightThin />
                <Link href="#">Locations</Link>
              </li>
              <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                <PiArrowElbowDownRightThin />
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <FooterLogo />
    </div>
  );
};

export default Footer;
