"use client";
import {
  backgroundAnimation,
  circleAnimation,
  horizontalScrollAnimation,
  lineAnimation,
} from "@/animations/fadeIn";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { PiPaperPlaneRightFill } from "react-icons/pi";

interface SectionProps {
  id: string;
  title: string;
  description: string;
  listItems: string[];
  imageSrc: string;
}

const Section = ({
  id,
  title,
  description,
  listItems,
  imageSrc,
}: SectionProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (circleRef.current) {
      circleAnimation(circleRef.current);
    }
  });

  return (
    <div ref={elementRef} className="relative shrink-0 max-w-[600px] px-12">
      <Image
        className="transform scale-x-[-1]"
        src={imageSrc}
        alt="img"
        height={200}
        width={200}
      />
      <span
        ref={circleRef}
        className="absolute top-3 left-0 w-4 h-4 rounded-full shadow-neon opacity-0 bg-[--accent] z-40"
      ></span>
      <h1 className="text-3xl font-semibold text-[--text1] py-2">{title}</h1>
      <p>{description}</p>
      <ul className="">
        <li className="text-lg py-4">Here’s how our team does it:</li>
        {listItems.map((item, index) => (
          <li key={index} className="flex gap-2 items-center py-1">
            <PiPaperPlaneRightFill className="text-[--text1]" />
            {item}
          </li>
        ))}
      </ul>
      <span
        className="absolute block top-[calc(100%-60px)] left-0 text-white text-opacity-[0.05] font-roboto font-black leading-[1.1] text-[clamp(70px,9vw,180px)]"
        style={{
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        {id}
      </span>
    </div>
  );
};

const Process = ({ sections }: { sections: SectionProps[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const conatinerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (ref.current) {
      backgroundAnimation(ref.current);
    }
    if (conatinerRef.current && triggerRef.current) {
      horizontalScrollAnimation(conatinerRef.current, triggerRef.current);
    }
    if (lineRef.current && triggerRef.current) {
      lineAnimation(lineRef.current, triggerRef.current);
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
          background: "linear-gradient(90deg, #1b398f, #1b398f, #791bce)",
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
      <span
        ref={lineRef}
        className="absolute z-40 top-40 h-2 bg-gradient-to-r from-[--accent] to-[--text]"
      ></span>

      <div ref={conatinerRef} className="flex p-5 z-40">
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
            listItems={section.listItems}
            imageSrc={section.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Process;