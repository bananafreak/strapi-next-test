import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  max-width: 1366px;
  width: 100%;
  background-color: rgb(201, 253, 233);
  padding: 5rem 2rem;
  border-radius: 30px;
  margin: 4rem auto;
`;

const Potato = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Potato;
