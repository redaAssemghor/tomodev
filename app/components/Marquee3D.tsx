import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const group1 = [
  {
    name: "Microsoft",
    img: "/hero/1.jpg",
  },
  {
    name: "Apple",
    img: "/hero/2.jpg",
  },
  {
    name: "Microsoft",
    img: "/hero/3.jpg",
  },
];

const group2 = [
  {
    name: "Facebook",
    img: "/hero/4.jpg",
  },
  {
    name: "LinkedIn",
    img: "/hero/5.jpg",
  },
  {
    name: "Google",
    img: "/hero/6.jpg",
  },
];

const group3 = [
  {
    name: "Apple",
    img: "/hero/7.jpg",
  },
  {
    name: "Twitter",
    img: "/hero/8.jpg",
  },
  {
    name: "Twitter",
    img: "/hero/9.jpg",
  },
];

const Marquee3D = () => {
  return (
    <div className="absolute right-0 top-0 z-0">
      <div className="flex right-0 flex-row gap-40 h-full w-full justify-end">
        <Marquee
          pauseOnHover
          reverse
          className="justify-center overflow-hidden [--duration:100s] [--gap:0.4rem]"
          vertical
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {group1.map((data, idx) => (
            <Image
              width={400}
              height={400}
              key={idx}
              src={data.img}
              alt={data.name}
              className="rounded-sm border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
            />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          className="justify-center overflow-hidden [--duration:100s] [--gap:0.4rem]"
          vertical
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {group2.map((data, idx) => (
            <Image
              width={400}
              height={400}
              key={idx}
              src={data.img}
              alt={data.name}
              className="mx-auto h-full rounded-sm"
            />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="justify-center overflow-hidden [--duration:100s] [--gap:0.4rem]"
          vertical
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {group3.map((data, idx) => (
            <Image
              width={400}
              height={400}
              key={idx}
              src={data.img}
              alt={data.name}
              className="mx-auto h-full rounded-sm"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Marquee3D;
