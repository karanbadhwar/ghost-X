import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg from "../assets/hero-bcg.svg";
// import heroBcg2 from "../assets/hero-bcg-2.jpeg";
import ghost from "../assets/undraw_ghost.svg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          Kabooooom!!{" "}
          <span className="mini-logo">
            <img src={ghost} alt="" className="bounce-in-right" />
          </span>
          <br />
          Ghost T-shirts
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          rerum in ipsam ut explicabo obcaecati deserunt cupiditate vel aliquam
          modi.
        </p>
        <Link to="/products" className="btn hero-btn">
          Shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="Skull Changing clothes" className="main-img" />
        {/* <img src={heroBcg2} alt="Person Working" className="accent-img" /> */}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .mini-logo {
    width: 3rem;
    height: 3rem;
    position: relative;
    top: 1rem;
    left: 40%;
  }
  .bounce-in-right {
    animation: bounce-in-right 2s ease forwards;
  }
  @keyframes bounce-in-right {
    0% {
      opacity: 0;
      transform: translateX(2000px);
    }
    60% {
      opacity: 1;
      transform: translateX(-30px);
    }
    80% {
      transform: translateX(10px);
    }
    100% {
      transform: translateX(0);
    }
  }

  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .mini-logo {
      left: 0;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
