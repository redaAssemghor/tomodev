import ShinyButton from "@/components/magicui/shiny-button";
import Image from "next/image";
import Link from "next/link";
import TeamInfo from "../components/TeamInfo";

const page = () => {
  return (
    <div>
      <div className="relative p-24 text-[--light] flex flex-col justify-center items-center gap-4 bg-[url('/be-deferent.webp')] bg-cover bg-center h-screen">
        <h2 className="lg:text-4xl text-2xl font-semibold">
          Dedicated Industry Experts With Proven Track Records
        </h2>
        <h1 className="lg:text-6xl text-4xl font-bold">
          The Team You Want On Your Project
        </h1>
        <ul className="w-full flex justify-evenly my-8">
          <li className="flex flex-col items-center gap-2">
            <h1 className="text-6xl text-[--secondary-color2] font-semibold">
              Expert
            </h1>
            <h2 className="text-2xl">INDUSTRY LEADERS</h2>
          </li>

          <li className="flex flex-col items-center gap-2">
            <h1 className="text-6xl text-[--secondary-color2] font-semibold">
              150+
            </h1>
            <h2 className="text-2xl">SATISFIED CLIENTS</h2>
          </li>

          <li className="flex flex-col items-center gap-2">
            <h1 className="text-6xl text-[--secondary-color2] font-semibold">
              Results
            </h1>
            <h2 className="text-2xl">DRIVEN APPROACH</h2>
          </li>
        </ul>
        <Image
          className="absolute left-10 bottom-20 opacity-70"
          alt="scroll"
          src={"/scroll.svg"}
          height={20}
          width={20}
        />
        <Link href="/contact-us">
          <ShinyButton text="SPEAK WITH OUR EXPERTS" />
        </Link>
      </div>
      <TeamInfo />
    </div>
  );
};

export default page;
