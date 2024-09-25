import Form from "../components/Form";
import Process from "../components/Process";
import ServiceHero from "../components/ServiceHero";
import { ecommerceData } from "../data/formData";
import { ecommerceModels } from "../data/imgModels";
import { shopifyDevelopmentSteps } from "../data/process";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce-services - Tomodev",
  description:
    "From building powerful online stores to integrating custom features, work with our team of experts to create a seamless eCommerce experience that drives growth and maximizes your online potential.",
};

const page = () => {
  const name = "eCommerce";
  const title = "Our Custom eCommerce Development Services";
  const description =
    "From building powerful online stores to integrating custom features, work with our team of experts to create a seamless eCommerce experience that drives growth and maximizes your online potential.";
  const services = [
    "Custom eCommerce Development",
    "Custom eCommerce Integrations",
    "Responsive eCommerce Design",
    "eCommerce Platform Migrations",
    "Custom Payment Gateway Integration",
  ];

  return (
    <div>
      <ServiceHero
        imgs={ecommerceModels}
        name={name}
        description={description}
        services={services}
        title={title}
        gif=""
      />
      <Form data={ecommerceData} />
      <Process sections={shopifyDevelopmentSteps} />
    </div>
  );
};

export default page;
