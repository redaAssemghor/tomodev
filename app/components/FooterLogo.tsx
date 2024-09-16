import Link from "next/link";

const FooterLogo = () => {
  return (
    <footer>
      <div className="relative text-white p-10 h-full">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold pb-10">TOMODEV</h1>
          <span className="w-full border-b"></span>
        </div>

        <div className="text-sm">
          <ul className="flex lg:flex-row flex-col gap-10">
            <li>
              <h1>©2024 TOMODEV. All rights reserved</h1>
            </li>
            <li className="underline">
              <Link href="privacy-policy">
                <h1>Privacy Policy</h1>
              </Link>
            </li>
            <li className="underline">
              <Link href="#">
                <h1>Accessibility</h1>
              </Link>
              <h1></h1>
            </li>
            <li className="underline">
              <Link href="#">
                <h1>Call us at (800) 206-9003</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterLogo;
