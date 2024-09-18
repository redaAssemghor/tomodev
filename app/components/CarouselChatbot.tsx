import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FaHandPointRight } from "react-icons/fa6";

type Card = {
  title: string;
  icon: string;
  points: string[];
};
type CarouselChatbotProps = {
  cards: Card[];
};

const CarouselChatbot = ({ cards }: CarouselChatbotProps) => {
  return (
    <div className="flex bg-inherit mt-10">
      <Marquee speed={40} pauseOnHover>
        {cards.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl py-10 px-5 w-[500px] mx-5"
            style={{ border: "0.1px solid var(--text2)" }}
          >
            <Image
              className="absolute -top-10 -left-10 z-0 opacity-40 rotate-12 hover:scale-110 transition-all duration-300"
              src={item.icon}
              alt="icon"
              width={240}
              height={240}
            />
            <h1 className="text-3xl text-black mb-3">{item.title}</h1>
            <ul className="text-[--text2]">
              {item.points.map((point, i) => (
                <li key={i} className="flex gap-2 items-center">
                  <FaHandPointRight />
                  <h2>{point}</h2>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CarouselChatbot;
