import ShinyButton from "@/components/magicui/shiny-button";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="relative lg:p-24 p-5 pt-28 text-[--light] flex flex-col justify-center items-center gap-4 bg-[url('/be-deferent.webp')] bg-cover bg-center h-screen">
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="lg:text-4xl text-lg font-semibold">
          Dedicated Industry Experts With Proven Track Records
        </h2>
        <h1 className="lg:text-6xl text-2xl font-bold">
          The Team You Want On Your Project
        </h1>
        <ul className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0 justify-evenly my-8">
          <li className="flex flex-col items-center gap-2">
            <h1 className="lg:text-6xl text-4xl text-[--secondary-color2] font-semibold">
              Expert
            </h1>
            <h2 className="lg:text-2xl text-lg">INDUSTRY LEADERS</h2>
          </li>

          <li className="flex flex-col items-center gap-2">
            <h1 className="lg:text-6xl text-4xl text-[--secondary-color2] font-semibold">
              50+
            </h1>
            <h2 className="lg:text-2xl text-lg">SATISFIED CLIENTS</h2>
          </li>

          <li className="flex flex-col items-center gap-2">
            <h1 className="lg:text-6xl text-4xl text-[--secondary-color2] font-semibold">
              Results
            </h1>
            <h2 className="lg:text-2xl text-lg">DRIVEN APPROACH</h2>
          </li>
        </ul>
        <Image
          className="absolute left-10 bottom-28 opacity-70"
          alt="scroll"
          src={"/scroll.svg"}
          height={20}
          width={20}
        />
        <Link href="/contact">
          <ShinyButton text="SPEAK WITH OUR EXPERTS" />
        </Link>
      </div>
    </div>
  );
};

export default About;
