"use client";
import { setShowTemplateAction } from "@/store/features/templateSlice";
import { RootState } from "@/store/store";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Button from "./ui/Button";
import { useEffect, useRef, useState } from "react";
import { imageScroll } from "@/animations/scrollAnimations";

const TemplateView = () => {
  const [showArrow, setShowArrow] = useState<number | null>(null);

  const imgRef = useRef(null);
  const template = useSelector((state: RootState) => state.template.value);

  const dispatch = useDispatch();

  const handleCloseTemplate = () => {
    dispatch(setShowTemplateAction(false));
  };

  useEffect(() => {
    if (imgRef.current) {
      imageScroll(imgRef.current);
    }
  }, [imgRef.current]);

  const handleScrollTo = (index: number, num: number | string) => {
    setShowArrow(index);
    if (imgRef.current) {
      imageScroll(imgRef.current, num);
    }
  };

  const templateBtns = [
    {
      val: "min",
      position: "top",
    },
    {
      val: "600",
      position: "center 30%",
    },
    {
      val: "1000",
      position: "center 60%",
    },
    {
      val: "max",
      position: "bottom",
    },
  ];

  return (
    <div
      id="templateView"
      className="gradient-top-border relative z-50 py-20 w-screen overflow-hidden flex items-center justify-center bg-[--dark]"
    >
      <span
        className="absolute top-0 opacity-10 z-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/wallpaper.jpg)`, objectFit: "cover" }}
      ></span>
      <button
        onClick={handleCloseTemplate}
        className="absolute top-0 right-14 z-[60] text-5xl text-white p-4 bg-gradient-to-t from-[--text] to-[--text3]"
      >
        <IoCloseSharp />
      </button>
      <div className="flex justify-center items-center w-full h-[900px] z-50">
        <div className="p-8 bg-white flex flex-col gap-4">
          {templateBtns.map((btn, i) => (
            <button
              key={i}
              className="shadow-xl"
              onClick={() => handleScrollTo(i, btn.val)}
            >
              <div
                className="relative"
                style={{
                  width: "180px",
                  height: "120px",
                  position: "relative",
                }}
              >
                <div className={`${showArrow === i ? "" : "hidden"}`}>
                  <span className="absolute left-3 top-1 w-[175px] h-[125px] border-[--text3] border-b-8 border-r-8"></span>
                  <span className="absolute -right-5 top-1/2 -translate-y-1/2 block w-0 h-0 border-t-8 border-b-8 border-l-[13px] border-t-transparent border-b-transparent border-l-[--text3]"></span>
                </div>
                <Image
                  src={template.fullImg}
                  alt="template"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: btn.position,
                  }}
                />
              </div>
            </button>
          ))}
        </div>
        <div ref={imgRef} className="overflow-y-scroll hide-scrollbar h-full">
          <Image
            src={template.fullImg}
            alt="template"
            width={800}
            height={800}
          />
        </div>
        <div className="h-1/2 w-[500px] p-14 flex flex-col justify-center bg-[--dark]">
          <h1 className="text-4xl font-bold">{template.name}</h1>
          <p className="py-10 text-xl text-balance">{template.description}</p>

          <Button text="Request a Quote" />
        </div>
      </div>
    </div>
  );
};

export default TemplateView;
