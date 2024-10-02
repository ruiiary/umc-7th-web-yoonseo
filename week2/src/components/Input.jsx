// src/components/Input.jsx
import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 500px;
  height: 30px;
  margin: 40px;
  padding: 10px;
  background-color: lightgray;
  border-radius: 10px;
  border: none;
`;

const Input = ({ value, onChange, placeholder }) => {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;

