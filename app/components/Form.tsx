"use client";
import ShinyButton from "@/components/magicui/shiny-button";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { scrollAnimation, textRevealAnimation } from "@/animations/fadeIn";
import { wordpressFormDataType } from "../lib/types";

const Form = ({ data }: { data: wordpressFormDataType[] }) => {
  const [index, setIndex] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const txtRef = useRef<HTMLParagraphElement>(null);
  const header1Ref = useRef<HTMLHeadingElement>(null);
  const header2Ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const txt =
    "TOMODEV is a web development agency specializing in creating high-performance, scalable websites and applications. We focuson delivering tailored digital solutions that drive growth, enhance user experiences, and meet modern business needs. From responsive web design to full-stack development, we turn ideas into reality with cutting-edge technology and a client-centric approach.";

  useGSAP(() => {
    if (txtRef.current) {
      textRevealAnimation(txtRef.current, txt);
    }

    if (header1Ref.current) {
      scrollAnimation(header1Ref.current);
    }
    if (header2Ref.current) {
      scrollAnimation(header2Ref.current);
    }
    if (imgRef.current) {
      scrollAnimation(imgRef.current);
    }
  });

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm("service_d8x35t6", "template_tdbycnl", formRef.current, {
        publicKey: "qGvOnqjqYxrS_fhQo",
      })
      .then(
        () => {
          setSubmitted(true);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleMouseEnter = (i: number) => {
    setIndex(i);
  };

  const handleMouseLeave = () => {
    setIndex(null);
  };
  return (
    <div className="relative flex flex-col gap-24 z-40 bg-[--light]">
      <div className=" p-8 lg:p-32 ">
        <div className="flex lg:flex-row flex-col gap-4">
          <div className="relative h-full flex-1">
            <div className="my-16">
              <h1
                ref={header1Ref}
                className="text-5xl font-bold text-[--text-new2] py-8"
              >
                EXPLORE OUR SERVICES
              </h1>
              <p
                ref={txtRef}
                className="text-lg text-[--text2] min-h-[160px]"
              ></p>
            </div>
            <div className="">
              {data.map((service, i) => (
                <div key={i}>
                  <div
                    className={`relative my-4 p-4 ${
                      index === i ? "border-[--text1] border-l-4" : "border-l-2"
                    }`}
                  >
                    <span
                      className={`${
                        index === i ? "block" : "hidden"
                      } absolute w-0 h-0 top-1/2 left-0 border-t-8 border-b-8 border-l-4 border-transparent border-l-[--text1]`}
                    ></span>
                    <h1
                      className="text-xl font-bold text-[--text1] cursor-pointer"
                      onMouseEnter={() => handleMouseEnter(i)}
                      onMouseLeave={() => handleMouseLeave}
                    >
                      {service.service}
                    </h1>
                    <p
                      className={`text-[--text2] transition-max-height duration-1000 ease-in overflow-hidden text-lg ${
                        index === i ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 max-h-fit bg-white p-10 rounded-lg shadow-lg">
            <div ref={header2Ref} className="py-8">
              <h1 className="text-[--secondary] text-3xl font-bold py-6">
                Request A Quote
              </h1>
              <h1 className="text-[--text] text-3xl font-bold">
                Maximize Your Website’s Potential With Digital Silk
              </h1>
            </div>
            {!submitted ? (
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="flex flex-col gap-6"
              >
                <input
                  required
                  className="px-2 py-4 border-[0.1px] outline-none text-[--text2] "
                  type="text"
                  placeholder="Name*"
                  name="user_name"
                />
                <input
                  required
                  className="px-2 py-4 border-[0.1px] outline-none text-[--text2] "
                  type="text"
                  placeholder="Company Name*"
                  name="company_name"
                />
                <input
                  required
                  className="px-2 py-4 border-[0.1px] outline-none text-[--text2] "
                  type="email"
                  placeholder="Email*"
                  name="user_email"
                />
                <input
                  required
                  className="px-2 py-4 border-[0.1px] outline-none text-[--text2] "
                  type="tel"
                  placeholder="Phone*"
                  name="user_phone"
                />

                <textarea
                  required
                  className="p-2 border-[0.1px] outline-none text-[--text2]"
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                ></textarea>

                <ShinyButton
                  setIcon={false}
                  className="border-2 bg-blue-300 w-[150px] mt-8"
                  text="Submit"
                />
              </form>
            ) : (
              <div className="h-full flex flex-col gap-8 items-center justify-start mt-10">
                <h1 className="text-3xl font-bold text-[--text]">
                  Thank you for your request!
                </h1>
                <p className="text-[--text2]">
                  Your message has been successfully received. We will get back
                  to you shortly
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div ref={imgRef} className="relative mt-10">
        <div className="absolute items-center flex left-0 bottom-0 z-30">
          <span className="bg-gradient-to-r from-[--text1] to-bg-inherit h-[100px] w-[300px]"></span>
          <Image width={300} height={300} src={"/3web.webp"} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Form;
