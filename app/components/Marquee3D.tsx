import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const group1 = [
  {
    name: "Microsoft",
    img: "/template/0.jpg",
  },
  {
    name: "Microsoft",
    img: "/template/1.webp",
  },
  {
    name: "Apple",
    img: "/template/2.jpg",
  },
];

const group2 = [
  {
    name: "Google",
    img: "/template/3.jpg",
  },
  {
    name: "Facebook",
    img: "/template/4.jpg",
  },
  {
    name: "LinkedIn",
    img: "/template/5.png",
  },
  {
    name: "Twitter",
    img: "/template/6.jpg",
  },
];

const group3 = [
  {
    name: "Apple",
    img: "/template/7.webp",
  },
  {
    name: "Twitter",
    img: "/template/8.jpg",
  },
  {
    name: "Twitter",
    img: "/template/9.png",
  },
];

const Marquee3D = () => {
  return (
    <div className="absolute right-0 top-0 z-0">
      <div className="flex right-0 flex-row gap-32 h-full w-full justify-end">
        <Marquee
          pauseOnHover
          reverse
          className="justify-center overflow-hidden [--duration:100s] [--gap:1rem]"
          vertical
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {group1.map((data, idx) => (
            <Image
              width={300}
              height={300}
              key={idx}
              src={data.img}
              alt={data.name}
              className=" cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
            />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          className="justify-center overflow-hidden [--duration:100s] [--gap:1rem]"
          vertical
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {group2.map((data, idx) => (
            <Image
              width={300}
              height={300}
              key={idx}
              src={data.img}
              alt={data.name}
              className="mx-auto h-full   rounded-xl  "
            />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="justify-center overflow-hidden [--duration:100s] [--gap:1rem]"
          vertical
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {group3.map((data, idx) => (
            <Image
              width={300}
              height={300}
              key={idx}
              src={data.img}
              alt={data.name}
              className=" mx-auto h-full  cursor-pointer rounded-xl"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Marquee3D;
