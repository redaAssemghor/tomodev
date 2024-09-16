import Process from "../components/Process";
import ServiceHero from "../components/ServiceHero";
import { wordpressModels } from "../data/servicesData";
import { shopifyDevelopmentSteps } from "../data/process";

const page = () => {
  const name = "Shopify";
  const title = "Our Custom Shopify Development Services";
  const description =
    "From powerful eCommerce stores to custom Shopify apps, work with our experts to unlock the full potential of this leading platform.";
  const services = [
    "Custom Shopify Themes",
    "Custom Shopify Apps",
    "Custom Shopify Development",
    "Custom Shopify Design",
  ];

  return (
    <div>
      <ServiceHero
        imgs={wordpressModels}
        name={name}
        description={description}
        services={services}
        title={title}
      />
      <Process sections={shopifyDevelopmentSteps} />
    </div>
  );
};

export default page;
