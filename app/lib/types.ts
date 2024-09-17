export type wordpressFormDataType = {
  service: string;
  description: string;
};

export type ServiceHeroProps = {
  name: string;
  description: string;
  services: string[];
  title: string;
  imgs: string[];
  gif: string;
  bgColors?: string;
};
