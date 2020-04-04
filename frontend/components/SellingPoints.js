import React from 'react';
import styled from 'styled-components';
import { Heading } from './Section';
import SellingPoint from './SellingPoint';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  flex-basis: 100%;
  @media screen and (min-width: 600px) {
    flex-basis: 50%;
  }
  @media screen and (min-width: ${({ theme }) => theme.bp.md}px) {
    flex-basis: 25%;
  }
`;

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SellingPoints = ({ list, heading }) => (
  <Wrapper>
    <Heading>{heading}</Heading>
    <ItemList>
      {list.map((item, index) => (
        <Item key={index}>
          <SellingPoint
            image={item.image}
            heading={item.heading}
            description={item.description}
            link={item.link}
          />
        </Item>
      ))}
    </ItemList>
  </Wrapper>
);

export default SellingPoints;
