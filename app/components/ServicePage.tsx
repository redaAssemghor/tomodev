import { RootState } from "@/store/store";
import Image from "next/image";
import React, { useRef } from "react";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import { servicesData } from "../data/servicesData";
import { cardAnimation } from "@/animations/fadeIn";
import { useGSAP } from "@gsap/react";

const ServicePage = () => {
  const ref = useRef(null);
  const selectedService = useSelector(
    (state: RootState) => state.services.value
  );

  const currentService = servicesData.find(
    (service) => service.title === selectedService
  );

  useGSAP(() => {
    if (ref.current) {
      cardAnimation(ref.current);
    }
  }, [selectedService]);

  return (
    <div className="bg-white relative p-20 w-full h-auto overflow-hidden">
      {currentService ? (
        <div
          ref={ref}
          className="flex flex-col w-full lg:flex-row lg:gap-8 gap-4 items-center p-8"
        >
          <div className="flex justify-between w-full gap-2">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-[--text1] font-bold">
                {currentService.title}
              </h2>

              <p className="text-lg text-[--text2]">
                {currentService.description}
              </p>

              <ul>
                {currentService.steps.map((step, index) => (
                  <li key={index} className="flex gap-2 items-center">
                    <span className="text-[--text1]">
                      <PiPaperPlaneRightFill />
                    </span>
                    <span className="text-lg text-[--text2]">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={currentService.img}
                alt={currentService.title}
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      ) : (
        // Fallback UI if no service is selected or found
        <div className="text-center">
          <p className="text-2xl font-bold">
            Please select a service to view details.
          </p>
        </div>
      )}
    </div>
  );
};

export default ServicePage;
