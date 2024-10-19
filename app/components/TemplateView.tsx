"use client";
import { setShowTemplateAction } from "@/store/features/templateSlice";
import { RootState } from "@/store/store";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Button from "./ui/Button";
import { useEffect, useRef } from "react";
import { imageScroll, scrollToel } from "@/animations/scrollAnimations";

const TemplateView = () => {
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

  const handleScrollTo = (num: number | string) => {
    if (imgRef.current) {
      scrollToel(imgRef.current, num);
    }
  };

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
          <button className="shadow-xl" onClick={() => handleScrollTo("min")}>
            <div
              className="relative"
              style={{
                width: "180px",
                height: "120px",
                position: "relative",
              }}
            >
              <span className="absolute left-3 top-1 w-[175px] h-[125px] border-[--text3] border-b-8 border-r-8"></span>
              <Image
                src={template.fullImg}
                alt="template"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
          </button>
          <button className="text-black " onClick={() => handleScrollTo(600)}>
            <div
              style={{
                width: "180px",
                height: "120px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src={template.fullImg}
                alt="template"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center 30%",
                }}
              />
            </div>
          </button>
          <button className="text-black " onClick={() => handleScrollTo(1000)}>
            <div
              style={{
                width: "180px",
                height: "120px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src={template.fullImg}
                alt="template"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center 60%",
                }}
              />
            </div>
          </button>

          <button className="text-black " onClick={() => handleScrollTo("max")}>
            <div
              style={{
                width: "180px",
                height: "120px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src={template.fullImg}
                alt="template"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "bottom",
                }}
              />
            </div>
          </button>
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
