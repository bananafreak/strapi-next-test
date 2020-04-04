import React from 'react';
import styled from 'styled-components';

export const Heading = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #2d322d;
  max-width: 700px;
  margin-bottom: 2.4rem;
  text-align: left;
  @media screen and (min-width: ${({ theme }) => theme.bp.sm}px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 3.2rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  padding: 4rem 2.4rem;
  @media screen and (min-width: ${({ theme }) => theme.bp.sm}px) {
    padding: 8rem 3.2rem;
  }
`;

const Body = styled.div`
  width: 100%;
  max-width: 1100px;
`;

const Section = ({ color = '#fff', children, heading, id }) => (
  <Wrapper color={color} id={id}>
    {heading && <Heading>{heading}</Heading>}
    <Body>{children}</Body>
  </Wrapper>
);

export default Section;
