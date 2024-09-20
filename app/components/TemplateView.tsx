"use client";
import { setShowTemplateAction } from "@/store/features/templateSlice";
import { RootState } from "@/store/store";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const TemplateView = () => {
  const template = useSelector((state: RootState) => state.template.value);

  const dispatch = useDispatch();

  const handleCloseTemplate = () => {
    dispatch(setShowTemplateAction(false));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <button
        onClick={handleCloseTemplate}
        className="absolute top-10 right-10 z-50 text-5xl text-white"
      >
        <IoCloseSharp />
      </button>
      <div className="flex items-center justify-center h-full">
        <Image src={template} alt="template" width={800} height={800} />
      </div>
    </div>
  );
};

export default TemplateView;
