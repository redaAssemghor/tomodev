import ServiceHero from "../components/ServiceHero";

const page = () => {
  const name = "Wordpress";
  const description =
    "We offer a wide range of custom Wordpress development services tohelp you build a website that meets your unique needs. Whether you need a simple blog or a complex e-commerce site, we have the skills and experience to create a site that is tailored to your specific requirements.";
  const services = [
    "Custom Wordpress Themes",
    "Custom Wordpress Plugins",
    "Custom Wordpress Development",
    "Custom Wordpress Design",
  ];
  const title = "Our Custom Wordpress Development Services";
  return (
    <div className="">
      <ServiceHero
        name={name}
        description={description}
        services={services}
        title={title}
      />
    </div>
  );
};

export default page;
