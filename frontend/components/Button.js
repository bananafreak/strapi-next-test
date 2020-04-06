import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  border: none;
  border-radius: 28px;
  width: 100%;
  max-width: 300px;
  padding: 16px 34px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-transform: uppercase;
  background-color: ${({ inverted }) => (inverted ? '#fff' : '#5A008C')};
  color: ${({ inverted }) => (inverted ? '#5A008C' : '#fff')};
  box-shadow: 0 10px 24px 0 'rgba(95, 0, 140, 0.2)';
  outline: none;
  cursor: pointer;
`;

const Button = ({ title, inverted }) => (
  <ButtonStyled inverted={inverted}>{title}</ButtonStyled>
);

export default Button;
