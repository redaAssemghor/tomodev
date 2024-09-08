import HeroVideoDialog from "@/components/example/hero-video-dialog-demo-top-in-bottom-out";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const Info = () => {
  return (
    <div className="w-full h-full p-32 bg-inherit text-white relative">
      <div className="flex justify-between">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl pb-8">
            Creative Web Agency
            <span className="font-bold"> Delivering Custom Solutions</span>
          </h1>

          <ul className="flex flex-col gap-6">
            <li className="flex gap-4 items-center text-2xl">
              <FaExternalLinkAlt className="text-[#04E4FF]" />
              <h2>
                Custom Web Design Solutions{" "}
                <span className="font-bold text-[#04E4FF]">
                  To Drive Conversions
                </span>
              </h2>
            </li>

            <li className="flex gap-4 items-center text-2xl">
              <FaExternalLinkAlt className="text-[#04E4FF]" />
              <h2>
                Effective Marketing Campaigns{" "}
                <span className="font-bold text-[#04E4FF] ">
                  To Generate Growth
                </span>
              </h2>
            </li>

            <li className="flex gap-4 items-center text-2xl">
              <FaExternalLinkAlt className="text-[#04E4FF]" />
              <h2>
                Tailored Branding Strategies{" "}
                <span className="font-bold text-[#04E4FF]">
                  To Drive Engagement
                </span>
              </h2>
            </li>
          </ul>
        </div>

        <Image height={600} width={600} src="/info-img.png" alt="info-img" />
      </div>
      <div>
        <HeroVideoDialog />
      </div>
    </div>
  );
};

export default Info;
