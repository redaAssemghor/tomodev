import { PiArrowElbowDownRightThin } from "react-icons/pi";
import Link from "next/link";
import FooterLogo from "./FooterLogo";

const Footer = () => {
  return (
    <div className="h-full bg-gradient-to-tr from-[--text] to-[--secondary]">
      <div className="relative text-white px-4 py-20 h-full">
        <div className="absolute right-0 top-0 h-1/2 z-0 opacity-55 w-full background-pattern"></div>
        <h1 className="font-bold text-6xl m-20">Let&rsquo;s Grow Your Brand</h1>
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
          </div>

          {/* Apps & Development Section */}
          <div className="relative p-5 border-l">
            <span className="absolute top-0 left-0 w-1 h-4 bg-white"></span>
            <h1 className="font-bold text-3xl flex items-center justify-between cursor-pointer">
              Apps & Development
            </h1>
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
            </ul>
          </div>

          {/* Company Section */}
          <div className="relative p-5 border-l">
            <span className="absolute top-0 left-0 w-1 h-4 bg-white"></span>
            <h1 className="font-bold text-3xl flex items-center justify-between cursor-pointer">
              Show
            </h1>
            <ul className="flex flex-col gap-5 text-[16px] py-8">
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
            </ul>
          </div>

          <div className="relative p-5 border-l">
            <span className="absolute top-0 left-0 w-1 h-4 bg-white"></span>
            <span className="footer-services widget_nav_menu"></span>
            <h1 className="font-bold text-3xl flex items-center justify-between cursor-pointer">
              Company
            </h1>
            <ul className="flex flex-col gap-5 text-[16px] py-8">
              <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                <PiArrowElbowDownRightThin />
                <Link href="#">About Us</Link>
              </li>
              <li className="flex gap-2 items-center hover:underline hover:text-[--text] transition duration-300">
                <PiArrowElbowDownRightThin />
                <Link href="#">Digital Trends</Link>
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
                <Link href="#">Contact Us</Link>
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
