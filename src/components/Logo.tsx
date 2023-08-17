import React from "react";
import styled from "styled-components";
import ghost from "../assets/Ghost-3.svg";

function Logo() {
  return (
    <Wrapper>
      <img src={ghost} alt="Logo of Brand" />
      <span>Ghost</span>/X
    </Wrapper>
  );
}

const Wrapper = styled.h3`
  position: relative;
  margin-bottom: 0;
  color: var(--clr-grey-1);
  span {
    color: var(--clr-primary-5);
  }
  img {
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    width: 10rem;
    top: -20px;
    height: 8rem;
    opacity: 0.3;
    /* left: -6rem; */
  }
`;
export default Logo;
