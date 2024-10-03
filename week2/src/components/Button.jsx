import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 70px;
  height: 40px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
`;

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
