import { ReactNode } from "react";

export type wordpressFormDataType = {
  service: string;
  description: string;
};

export type ServiceHeroProps = {
  children?: ReactNode;
  name: string;
  description: string;
  services: string[];
  title: string;
  imgs: string[];
  gif?: string;
  bgColors?: string;
};

export interface Project {
  name: string;
  img: string;
  fullImg: string;
  description: string;
}

// process container
export interface SectionProps {
  id: string;
  title: string;
  description: string;
  listItems: string[];
  imageSrc: string;
}
