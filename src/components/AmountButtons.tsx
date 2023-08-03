import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

//Interface for props
interface IButton {
  amount: number;
  increase: () => void;
  decrease: () => void;
  stock?: number;
}

const AmountButtons = ({ amount, increase, decrease, stock }: IButton) => {
  return (
    <Wrapper className="amount-btns">
      <button
        className="amount-btn"
        type="button"
        onClick={decrease}
        disabled={amount === 1}
      >
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button
        className="amount-btn"
        type="button"
        onClick={increase}
        disabled={amount >= stock!}
      >
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`;

export default AmountButtons;
