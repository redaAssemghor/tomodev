import { scrollAnimation } from "@/animations/fadeIn";
import HeroVideoDialog from "@/components/example/hero-video-dialog-demo-top-in-bottom-out";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Aws from "../svgs/Aws";
import Pms from "../svgs/Pms";

const Info = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (ref.current) {
      scrollAnimation(ref.current);
    }
  });

  return (
    <div className="w-full h-full lg:p-32 px-4 py-20 bg-inherit text-white relative">
      <div
        ref={ref}
        className="flex lg:flex-row flex-col gap-8  justify-between"
      >
        <div className="flex flex-col gap-6">
          <h1 className="lg:text-4xl text-xl">
            Creative Web Agency
            <span className="font-bold"> Delivering Custom Solutions</span>
          </h1>

          <ul className="flex flex-col gap-6 py-8">
            <li className="flex gap-4 items-center lg:text-2xl">
              <FaExternalLinkAlt className="text-[#04E4FF]" />
              <h2>
                Custom Web Design Solutions{" "}
                <span className="font-bold text-[#04E4FF]">
                  To Drive Conversions
                </span>
              </h2>
            </li>

            <li className="flex gap-4 items-center lg:text-2xl">
              <FaExternalLinkAlt className="text-[#04E4FF]" />
              <h2>
                Effective Marketing Campaigns{" "}
                <span className="font-bold text-[#04E4FF] ">
                  To Generate Growth
                </span>
              </h2>
            </li>

            <li className="flex gap-4 items-center lg:text-2xl">
              <FaExternalLinkAlt className="text-[--secondary]" />
              <h2>
                Tailored Branding Strategies{" "}
                <span className="font-bold text-[--secondary]">
                  To Drive Engagement
                </span>
              </h2>
            </li>
          </ul>
        </div>

        <Image height={600} width={600} src="/info-img.png" alt="info-img" />
      </div>

      <div className="relative bg-gradient-to-r from-[--accent] to-bg-inherit w-full h-[100px] flex justify-start items-center">
        <HeroVideoDialog
          thumbnailAlt="click to play video"
          className="w-[200px] rounded-sm"
          thumbnailSrc="/thumbnail.jpg"
          videoSrc="/video/video.mp4"
        />
        <h1 className="font-semibold text-xl pl-10">1 minute video</h1>
      </div>
      <div className="flex gap-4 items-center pt-4">
        <Pms />
        <Image height={60} width={60} src="/company2022.png" alt="info-img" />
        <Aws />
      </div>
    </div>
  );
};

export default Info;
