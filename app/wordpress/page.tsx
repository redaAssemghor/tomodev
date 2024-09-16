import Process from "../components/Process";
import ServiceHero from "../components/ServiceHero";
import { wordpressModels } from "../data/servicesData";

const page = () => {
  const name = "Wordpress";
  const title = "Our Custom Wordpress Development Services";
  const description =
    "From corporate WordPress websites to WooCommerce stores, work with our experts to make the most of this robust platform.";
  const services = [
    "Custom Wordpress Themes",
    "Custom Wordpress Plugins",
    "Custom Wordpress Development",
    "Custom Wordpress Design",
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
      <Process />
    </div>
  );
};

export default page;
