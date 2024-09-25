import ContactPage from "../components/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Tomodev",
  description:
    "Get in touch with our team of experts to discuss your project requirements, get a quote, or learn more about our services.",
};

const page = () => {
  return <ContactPage />;
};

export default page;
