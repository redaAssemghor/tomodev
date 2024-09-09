import { AiOutlineStock } from "react-icons/ai";
import { CgCreditCard } from "react-icons/cg";
import { CiShop } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import { SiMicrostrategy } from "react-icons/si";
import { TbBulb } from "react-icons/tb";

const Services = () => {
  return (
    <div className="flex flex-col lg:pt-24 gap-8 items-center bg-[--light] relative">
      <div className="flex flex-col lg:py-20 p-10 gap-3 items-center justify-center ">
        <h1 className="text-[--text1] lg:text-6xl text-3xl font-bold">
          Our services
        </h1>
        <p className="lg:text-4xl text-xl text-[--text2]">
          How to create a website tailored to your unique business goals?
        </p>
        <h2 className="lg:text-4xl text-xl font-medium text-[--text2]">
          customized and goal-oriented digital solutions.
        </h2>
      </div>

      <div className="lg:flex lg:gap-28 grid grid-cols-3 gap-8">
        <div className="flex flex-col gap-4 items-center w-[100px] h-[200px] justify-between">
          <h1 className="text-lg font-semibold text-center">
            Web Design & Development
          </h1>
          <button className="rounded-full shadow-2xl p-5 bg-white text-blue-600">
            <TbBulb size={60} />
          </button>
        </div>

        <div className="flex flex-col gap-4 items-center w-[100px] h-[200px] justify-between">
          <h1 className="text-lg font-semibold text-center">
            UI/UX Design Services
          </h1>
          <button className="rounded-full shadow-2xl p-5 bg-white text-violet-700">
            <CgCreditCard size={60} />
          </button>
        </div>

        <div className="flex flex-col gap-4 items-center w-[100px] h-[200px] justify-between">
          <h1 className="text-lg font-semibold text-center">
            E-Commerce Solutions
          </h1>
          <button className="rounded-full shadow-2xl p-5 bg-white text-yellow-400">
            <CiShop size={60} />
          </button>
        </div>

        <div className="flex flex-col gap-4 items-center w-[100px] h-[200px] justify-between">
          <h1 className="text-lg font-semibold text-center">
            Digital Marketing Services
          </h1>
          <button className="rounded-full shadow-2xl p-5 bg-white text-green-500">
            <AiOutlineStock size={60} />
          </button>
        </div>

        <div className="flex flex-col gap-4 items-center w-[100px] h-[200px] justify-between">
          <h1 className="text-lg font-semibold text-center">
            Security Services
          </h1>
          <button className="rounded-full shadow-2xl p-5 bg-white text-teal-400">
            <MdOutlineSecurity size={60} />
          </button>
        </div>

        <div className="flex flex-col gap-4 items-center w-[100px] h-[200px] justify-between">
          <h1 className="text-lg font-semibold text-center">
            Consulting & Strategy
          </h1>
          <button className="rounded-full shadow-2xl p-5 bg-white text-fuchsia-500">
            <SiMicrostrategy size={60} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
