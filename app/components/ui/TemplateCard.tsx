import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuView } from "react-icons/lu";
import styled from "styled-components";

interface CardProps {
  link: string;
  name: string;
  handleShowTemplate: () => void;
}

const Card = ({ link, name, handleShowTemplate }: CardProps) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="sub-card category text-black">
          <span className="text_span">{name}</span>
          <LuView />
        </div>
        <Link href="#templateView">
          <div onClick={handleShowTemplate} className="card_container">
            <Image width={700} height={450} src={link} alt={name} />
          </div>
        </Link>
        <div className="sub-card named">
          <span className="text_span">View The full Template</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    --white: hsl(0, 0%, 83%);
    --black: hsl(240, 15%, 9%);
    --stone-300: hsl(24, 6%, 83%);
    --pink-500: hsl(299, 100%, 83%);

    cursor: pointer;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sub-card {
    display: flex;
    align-items: center;

    padding: 0.75rem;
    min-width: 30rem;
    height: 2.25rem;
    background-color: var(--pink-500);
  }
  .sub-card.category {
    justify-content: space-between;

    border-radius: 0.5rem 0.5rem 0rem 0rem;

    transition: all 0.5s cubic-bezier(1, 0, 0, 1);
  }
  .sub-card.named {
    justify-content: center;

    border-radius: 0rem 0rem 0.5rem 0.5rem;

    transition: all 0.5s cubic-bezier(1, 0, 0, 1);
  }

  .card:hover .sub-card.category {
    transform: translateY(100%);
  }
  .card:hover .sub-card.named {
    transform: translateY(-100%);
  }

  .sub-card .text_span {
    font-size: 1rem;
    font-weight: 600;
    color: var(--black);
    text-transform: capitalize;
  }

  .sub-card .icon_svg {
    width: 1rem;
    fill: var(--black);
  }

  .card_container {
    overflow: hidden;
    height: 450px;
    width: 700px;

    position: relative;
    z-index: 5;

    background-color: var(--pink-500);
  }
  .card_container::before {
    content: "";

    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 0rem;
    aspect-ratio: 1;
    background-color: hsl(240, 15%, 9%, 0.2);

    border-radius: 50%;
    transform-origin: center;

    transition: all 1s cubic-bezier(1, 0, 0, 1) 0.2s;
  }
  .card_container::after {
    content: "Click to View Template";

    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0rem;
    box-sizing: border-box;
    width: 0rem;
    aspect-ratio: 1;
    background-color: hsl(240, 15%, 9%, 0.5);

    font-size: 0rem;
    font-weight: bold;
    color: var(--white);
    text-align: center;

    border-radius: 50%;
    transform-origin: center;

    transition: all 1s cubic-bezier(1, 0, 0, 1) 0s;
  }

  .card:hover .card_container::before {
    width: 60rem;

    transition: all 1s cubic-bezier(1, 0, 0, 1) 0s;
  }
  .card:hover .card_container::after {
    padding: 2rem;
    width: 10rem;

    font-size: 1rem;

    transition: all 0.3s ease-in-out 0.4s;
  }

  .card_container .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 3rem;
    fill: var(--black);
  }
`;

export default Card;
