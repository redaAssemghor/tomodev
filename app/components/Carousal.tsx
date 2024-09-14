import { ReactNode, useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Carousal = ({ children }: { children: ReactNode[] }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent(current === 0 ? children.length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === children.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div className="overflow-hidden">
      <div
        className="flex transition-all duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute w-full -bottom-16 flex items-center justify-between p-2">
        <button onClick={prev} className="text-[--text3]">
          <SlArrowLeft size={40} />
        </button>

        <div className="flex gap-4">
          {children.map((_, index) => (
            <span
              key={index}
              className={`w-4 h-2 ${
                current === index ? "bg-[--text3]" : "bg-[--text2]"
              }`}
            />
          ))}
        </div>

        <button onClick={next} className="text-[--text3]">
          <SlArrowRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default Carousal;
