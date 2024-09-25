import TeamInfo from "../components/TeamInfo";
import AboutUsHero from "./AboutUsHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Tomodev",
  description:
    "Learn more about Tomodev and our mission to deliver top-notch web solutions.",
};

const page = () => {
  return (
    <div>
      <AboutUsHero />
      <TeamInfo />
    </div>
  );
};

export default page;
