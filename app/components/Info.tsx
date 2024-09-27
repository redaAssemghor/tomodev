import { scrollAnimation } from "@/animations/fadeIn";
import HeroVideoDialog from "@/components/example/hero-video-dialog-demo-top-in-bottom-out";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Info = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (ref.current) {
      scrollAnimation(ref.current);
    }
  });

  return (
    <div className="w-full h-full lg:p-32 px-4 py-20 text-white bg-[--primary] relative">
      <div
        ref={ref}
        className="relative flex lg:flex-row flex-col justify-between"
      >
        <div className="flex flex-col gap-6">
          <h1 className="lg:text-4xl text-xl">
            Our
            <span className="font-bold"> fields of expertise</span>
          </h1>

          <ul className="flex flex-col gap-6 py-8">
            <li className="flex gap-4 items-center lg:text-2xl">
              <FaExternalLinkAlt className="text-[#04E4FF]" />
              <h2>
                Custom Development{" "}
                <span className="font-bold text-[#04E4FF]">
                  To Drive Conversions
                </span>
              </h2>
            </li>

            <li className="flex gap-4 items-center lg:text-2xl">
              <FaExternalLinkAlt className="text-[#04E4FF]" />
              <h2>
                CMS and E-commerce{" "}
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

        <Image
          className="scale-x-[-1] z-40"
          height={600}
          width={600}
          src="/hero.webp"
          alt="info-img"
        />
        <div className="absolute lg:-bottom-20 -bottom-48 z-0 w-full">
          <div className="relative bg-gradient-to-r from-[--accent] to-bg-inherit w-full h-[80px] flex justify-start items-center">
            <HeroVideoDialog
              className="w-[200px]"
              animationStyle="from-bottom"
              thumbnailAlt="click to play video"
              thumbnailSrc="/thumbnail.webp"
              videoSrc="/video/video.mp4"
            />
            <h1 className="font-semibold text-xl pl-10">1 minute video</h1>
          </div>
          <div className="flex gap-4 items-center pt-4">
            <ul className="flex gap-8 mt-8">
              <li className="border-r pr-8 border-[--text2]">
                <h1 className="text-xl font-normal">Expert</h1>
                <h1 className="text-xl font-bold">Team Members</h1>
              </li>
              <li className="border-r pr-8 border-[--text2]">
                <h1 className="text-xl font-normal">Results-Driven</h1>
                <h2 className="text-xl font-bold">Approach</h2>
              </li>
              <li className="border-r pr-8 border-[--text2]">
                <h1 className="text-xl font-normal">Streamlined</h1>
                <h2 className="text-xl font-bold">Execution</h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
