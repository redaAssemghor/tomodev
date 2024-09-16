"use client";
import {
  backgroundAnimation,
  horizontalScrollAnimation,
} from "@/animations/fadeIn";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { PiPaperPlaneRightFill } from "react-icons/pi";

const Process = () => {
  const ref = useRef<HTMLDivElement>(null);
  const conatinerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (ref.current) {
      backgroundAnimation(ref.current);
    }
    if (conatinerRef.current && triggerRef.current) {
      horizontalScrollAnimation(conatinerRef.current, triggerRef.current);
    }
  });

  return (
    <div
      ref={triggerRef}
      className="relative flex flex-col h-full w-full text-white overflow-hidden"
    >
      <div
        ref={ref}
        className="z-10 absolute h-full w-full bg-[--primary] bg-opacity-50"
        style={{
          background: "linear-gradient(130deg, #01afe9, #1b398f, #791bce)",
          backgroundSize: "200% 200%",
        }}
      ></div>

      <div className="flex flex-col items-center z-40">
        <h1 className="text-3xl font-bold py-4">Website Design Process</h1>
        <p className="text-xl text-center">
          Take a peek behind the curtain and explore the custom web design
          process our team follows.
          <br /> We build custom sites for brands of all sizes that deliver {""}
          <span className="text-[--text1] font-semibold">
            measurable results
          </span>
          .
        </p>
      </div>

      <div ref={conatinerRef} className="flex w-fit p-5 gap-16 z-40">
        {/* Planning & Information Architecture */}
        <div className="relative shrink-0 max-w-[600px]">
          <Image src={"/images/1.png"} alt="img" height={200} width={200} />
          <h1 className="text-3xl font-semibold text-[--text1] py-2">
            Planning & Information Architecture
          </h1>
          <p>
            We utilize proven techniques to map your content, meet user
            intentions and create an engaging user experience. By outlining your
            site’s structure, we ensure seamless user journeys to key conversion
            points.
          </p>
          <ul className="">
            <li className="text-lg py-4">Here’s how our team does it:</li>
            <li className="flex gap-2 items-center py-1">
              <PiPaperPlaneRightFill className="text-[--text1]" />
              We develop a base-level user flow & sitemap
            </li>
            <li className="flex gap-2 items-center py-1">
              <PiPaperPlaneRightFill className="text-[--text1]" />
              We utilize wireframing to create a seamless conversion funnel
            </li>
            <li className="flex gap-2 items-center py-1">
              <PiPaperPlaneRightFill className="text-[--text1]" />
              We add on-brand, consistent messaging to your structure
            </li>
          </ul>
          <span
            className="absolute block top-[calc(100%-60px)] left-0 text-white text-opacity-[0.05] font-roboto font-black leading-[1.1] text-[clamp(70px,9vw,180px)]"
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            01
          </span>
        </div>

        {/* Creative Design */}
        <div className="relative shrink-0 max-w-[600px]">
          <Image src={"/images/2.png"} alt="img" height={200} width={200} />
          <h1 className="text-3xl font-semibold text-[--text1] py-2">
            Creative Design
          </h1>
          <p>
            This stage is where you will see your site come to life. Our
            award-winning designers implement your unique branding elements to
            add your identity to your custom web design in NYC.
          </p>
          <ul className="">
            <li className="text-lg py-4">To achieve this, we:</li>
            <li className="flex gap-2 items-center py-1">
              <PiPaperPlaneRightFill className="text-[--text1]" />
              Thoughtfully place design features to guide the user journey
            </li>
            <li className="flex gap-2 items-center py-1">
              <PiPaperPlaneRightFill className="text-[--text1]" />
              Utilize interactive videos & animations
            </li>
            <li className="flex gap-2 items-center py-1">
              <PiPaperPlaneRightFill className="text-[--text1]" />
              Create custom, branded illustrations
            </li>
            <li className="flex gap-2 items-center py-1">
              <PiPaperPlaneRightFill className="text-[--text1]" />
              Ensure accessibility & search engine optimization
            </li>
          </ul>
          <span
            className="absolute block top-[calc(100%-60px)] left-0 text-white text-opacity-[0.05] font-roboto font-black leading-[1.1] text-[clamp(70px,9vw,180px)]"
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            02
          </span>
        </div>

        {/* Responsive Development */}
        <div className="relative shrink-0 max-w-[600px]">
          <Image src={"/images/3.png"} alt="img" height={200} width={200} />
          <h1 className="text-3xl font-semibold text-[--text1] py-2">
            Responsive Development
          </h1>
          <p>
            A responsive website is fast, accessible, and easy to navigate. It
            automatically scales to various screen sizes and devices, driving
            user experience and climbing search engine rankings.
          </p>
          <ul className="">
            <li className="text-lg py-4">
              To ensure your website reaches and satisfies every user, we:
            </li>
            <li className="flex gap-2 items-center py-1">
              <PiPaperPlaneRightFill className="text-[--text1]" />
              Gather touchpoint & user-channel insights
            </li>
            <li className="flex gap-2 items-center py-1">
              <PiPaperPlaneRightFill className="text-[--text1]" />
              Transform your wireframes into a flexible UI
            </li>
            <li className="flex gap-2 items-center py-1">
              <PiPaperPlaneRightFill className="text-[--text1]" />
              Test across devices before approval & launch
            </li>
          </ul>
          <span
            className="absolute block top-[calc(100%-60px)] left-0 text-white text-opacity-[0.05] font-roboto font-black leading-[1.1] text-[clamp(70px,9vw,180px)]"
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            03
          </span>
        </div>

        {/* Quality Assurance (QA) */}
        <div className="relative shrink-0 max-w-[600px]">
          <Image src={"/images/4.png"} alt="img" height={200} width={200} />
          <h1 className="text-3xl font-semibold text-[--text1] py-2">
            Quality Assurance (QA)
          </h1>
          <p>
            At Digital Silk, we pride ourselves on delivering measurable results
            and professional outcomes. By following a strict quality assurance
            (QA) protocol, we guarantee a high-quality digital experience for
            your brand.
          </p>
          <ul className="">
            <li className="text-lg py-4">To achieve this, we:</li>
            <li className="flex gap-2 items-center py-1">
              <PiPaperPlaneRightFill className="text-[--text1]" />
              Actively involve our clients throughout every project
            </li>
            <li className="flex gap-2 items-center py-1">
              <PiPaperPlaneRightFill className="text-[--text1]" />
              Meticulously test all designs to catch errors
            </li>
            <li className="flex gap-2 items-center py-1">
              <PiPaperPlaneRightFill className="text-[--text1]" />
              Use tried-and-tested tools to secure before launch
            </li>
          </ul>
          <span
            className="absolute block top-[calc(100%-60px)] left-0 text-white text-opacity-[0.05] font-roboto font-black leading-[1.1] text-[clamp(70px,9vw,180px)]"
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            04
          </span>
        </div>

        {/* Launch & Optimization */}
        <div className="relative shrink-0 max-w-[600px]">
          <Image src={"/images/5.png"} alt="img" height={200} width={200} />
          <h1 className="text-3xl font-semibold text-[--text1] py-2">
            Launch & Optimization
          </h1>
          <p>
            Our end-to-end website design services in New York cover both launch
            and post-launch support. We meticulously monitor, test, and optimize
            your website elements to ensure every part of your site is
            functioning optimally.
          </p>
          <ul className="">
            <li className="text-lg py-4">
              Our design specialists make this happen by:
            </li>
            <li className="flex gap-2 items-center py-1">
              <PiPaperPlaneRightFill className="text-[--text1]" />
              Following a strict protocol for every website launch
            </li>
            <li className="flex gap-2 items-center py-1">
              <PiPaperPlaneRightFill className="text-[--text1]" />
              Offering post-launch maintenance & optimization
            </li>
            <li className="flex gap-2 items-center py-1">
              <PiPaperPlaneRightFill className="text-[--text1]" />
              Creating & implementing a digital marketing plan to drive
              awareness across touchpoints
            </li>
          </ul>
          <span
            className="absolute block top-[calc(100%-60px)] left-0 text-white text-opacity-[0.05] font-roboto font-black leading-[1.1] text-[clamp(70px,9vw,180px)]"
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            05
          </span>
        </div>
      </div>
    </div>
  );
};

export default Process;
