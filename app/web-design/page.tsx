import Form from "../components/Form";
import Process from "../components/Process";
import ServiceHero from "../components/ServiceHero";
import { webDesignData } from "../data/formData";
import { designModels } from "../data/imgModels";
import { webDesignServiceSteps } from "../data/process";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design - Tomodev",
  description:
    "At TOMODEV, we specialize in creating visually stunning, highly responsive, and user-friendly websites. Whether you're looking to enhance your digital presence or build a completely new website, our team delivers tailored solutions that align with your brand and business goals.",
};

const page = () => {
  const name = "Web Design";
  const title = "Our Custom Web Design Services";
  const description =
    "At TOMODEV, we specialize in creating visually stunning, highly responsive, and user-friendly websites. Whether you're looking to enhance your digital presence or build a completely new website, our team delivers tailored solutions that align with your brand and business goals.";
  const services = [
    "Custom Web Design",
    "Responsive Website Design",
    "User Experience (UX) Design",
    "Branding and Visual Identity",
    "Web Redesign and Optimization",
  ];

  return (
    <div>
      <ServiceHero
        imgs={designModels}
        name={name}
        description={description}
        services={services}
        title={title}
        gif=""
      />
      <Form data={webDesignData} />
      <Process sections={webDesignServiceSteps} />
    </div>
  );
};

export default page;
