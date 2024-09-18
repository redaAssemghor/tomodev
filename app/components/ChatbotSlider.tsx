"use client";
import { scrollAnimation } from "@/animations/fadeIn";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import CarouselChatbot from "./CarouselChatbot";
import { cards } from "../data/carouselData";

const ChatbotSlider = () => {
  const ref = useRef(null);

  useGSAP(() => {
    if (ref.current) {
      scrollAnimation(ref.current);
    }
  });
  return (
    <div className="relative bg-[--light] rounded-t-3xl z-30">
      <div
        ref={ref}
        className="flex flex-col gap-4 items-center justify-center"
      >
        <div className="pt-28">
          <h1 className="text-6xl text-black font-bold z-40">
            Get more value from your favorite{" "}
            <span className="text-[--text1]">tools</span>
          </h1>
          <p className="text-xl text-[--text2] py-5 z-40">
            Enhance your AI chatbot with new features, workflows, and
            automations through plug-and-play integrations
          </p>
        </div>
        <Image
          height={900}
          width={900}
          src="/models/chatbot/chatbot-icons.png"
          alt="icons"
          className="py-10 z-40"
        />
        <Image
          height={300}
          width={300}
          src="/models/chatbot/animated-icons.svg"
          alt="icons"
          className="absolute left-0 h-full w-full opacity-75 z-20"
        />
      </div>
      <CarouselChatbot cards={cards} />
    </div>
  );
};

export default ChatbotSlider;
