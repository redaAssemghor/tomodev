import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { CiPhone } from "react-icons/ci";
import { PiHouseLight } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";

const page = () => {
  return (
    <div>
      <div>
        <h2>Take The Silk Road To</h2>
        <h1>Digitizing Your Business Growth</h1>
        <h1>Start A Conversation With Us</h1>
      </div>
      <form>
        <label htmlFor="Name">
          <RxPerson />
          <input type="text" placeholder="Name" />
        </label>
        <label htmlFor="Company">
          <PiHouseLight />
          <input type="text" placeholder="Company" />
        </label>
        <label htmlFor="email">
          <AiOutlineMail />
          <input type="email" placeholder="Email" />
        </label>
        <label htmlFor="Phone">
          <CiPhone />
          <input type="text" placeholder="Phone" />
        </label>
        <label htmlFor="Message">
          <BiMessage />
          <textarea placeholder="Message"></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default page;
