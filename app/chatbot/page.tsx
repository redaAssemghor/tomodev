import Form from "../components/Form";
import Process from "../components/Process";
import ServiceHero from "../components/ServiceHero";
import { chatbotData } from "../data/formData";
import { chatbotModels } from "../data/imgModels";
import { chatbotServiceSteps } from "../data/process";

const page = () => {
  const name = "Chatbot Integration";
  const title = "Our Custom Chatbot Integration Services";
  const description =
    "From AI-driven customer support to advanced conversational experiences, work with our experts to integrate and optimize chatbot solutions tailored to your business needs.";
  const services = [
    "Custom Chatbot Development",
    "Chatbot Integration with CRM and Other Platforms",
    "AI and NLP-Powered Chatbots",
    "24/7 Automated Customer Support Solutions",
  ];

  return (
    <div>
      <ServiceHero
        imgs={chatbotModels}
        name={name}
        description={description}
        services={services}
        title={title}
        gif="/models/chatbot/chatbot-gif.gif"
        bgColors="linear-gradient(90deg, #1b398f, #04e4ff)"
      />
      <Form data={chatbotData} />
      <Process sections={chatbotServiceSteps} />
    </div>
  );
};

export default page;
