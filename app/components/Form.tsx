import ShinyButton from "@/components/magicui/shiny-button";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const data = [
  {
    service: "Custom Website Design Services",
    description:
      "We design and develop custom websites that are tailored to your business needs. Our websites are built to be responsive, fast, and secure.",
  },
  {
    service: "Custom Web Development Services",
    description:
      "We develop custom web applications that are tailored to your business needs. Our web applications are built to be scalable, secure, and user-friendly.",
  },
  {
    service: "E-Commerce Website Development Services",
    description:
      "We develop e-commerce websites that are tailored to your business needs. Our e-commerce websites are built to be user-friendly, secure, and scalable.",
  },
  {
    service: "WordPress Development Services",
    description:
      "We develop custom WordPress websites that are tailored to your business needs. Our WordPress websites are built to be user-friendly, secure, and scalable.",
  },
  {
    service: "Shopify Development Services",
    description:
      "We develop custom Shopify websites that are tailored to your business needs. Our Shopify websites are built to be user-friendly, secure, and scalable.",
  },
  {
    service: "WooCommerce Development Services",
    description:
      "We develop custom WooCommerce websites that are tailored to your business needs. Our WooCommerce websites are built to be user-friendly, secure, and scalable.",
  },
  {
    service: "Magento Development Services",
    description:
      "We develop custom Magento websites that are tailored to your business needs. Our Magento websites are built to be user-friendly, secure, and scalable.",
  },
];

const Form = () => {
  const [index, setIndex] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm("service_d8x35t6", "template_tdbycnl", form.current, {
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
              <h1 className="text-5xl font-bold text-[--text-new2] py-8">
                EXPLORE OUR SERVICES
              </h1>
              <p className="text-lg text-[--text2]">
                TOMODEV is a web development agency specializing in creating
                high-performance, scalable websites and applications. We focus
                on delivering tailored digital solutions that drive growth,
                enhance user experiences, and meet modern business needs. From
                responsive web design to full-stack development, we turn ideas
                into reality with cutting-edge technology and a client-centric
                approach.
              </p>
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
            <div className="py-8">
              <h1 className="text-[--secondary] text-3xl font-bold py-6">
                Request A Quote
              </h1>
              <h1 className="text-[--text] text-3xl font-bold">
                Maximize Your Website’s Potential With Digital Silk
              </h1>
            </div>
            {!submitted ? (
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-6"
              >
                <input
                  className="px-2 py-4 border-[0.1px] outline-none text-[--text2] "
                  type="text"
                  placeholder="Name*"
                  name="user_name"
                />
                <input
                  className="px-2 py-4 border-[0.1px] outline-none text-[--text2] "
                  type="text"
                  placeholder="Company Name*"
                  name="company_name"
                />
                <input
                  className="px-2 py-4 border-[0.1px] outline-none text-[--text2] "
                  type="email"
                  placeholder="Email*"
                  name="user_email"
                />
                <input
                  className="px-2 py-4 border-[0.1px] outline-none text-[--text2] "
                  type="tel"
                  placeholder="Phone*"
                  name="user_phone"
                />

                <textarea
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

      <div className="relative mt-10">
        <div className="absolute items-center flex left-0 bottom-0 z-30">
          <span className="bg-gradient-to-r from-[--text1] to-bg-inherit h-[100px] w-[300px]"></span>
          <Image width={300} height={300} src={"/3web.webp"} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Form;
