import React from 'react';
import styled from 'styled-components';
import { Box } from '../theme/tools';
import { TextStyles } from '../theme/typography';
import ReactMarkdown from 'react-markdown';

const Link = styled.a`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 2.4rem;
  width: 65px;
  height: 65px;
`;

const ItemWrapper = styled.div`
  margin-bottom: 3.2rem;
  max-width: 320px;
  @media screen and (min-width: 600px) {
    max-width: 220px;
  }
  @media screen and (min-width: ${({ theme }) => theme.bp.md}px) {
    margin-bottom: 0;
  }
`;

const Text = styled.div`
  ${TextStyles};
`;

const SellingPoint = ({ heading, description, link, image }) => (
  <ItemWrapper>
    <IconWrapper>
      <img src={process.env.API_URL + image.url} alt={'icon'} />
    </IconWrapper>
    <Text fontWeight={700} color='#2D322D'>
      {heading}
    </Text>
    <Box margin='0.8rem 0 1.6rem'>
      <ReactMarkdown source={description} />
    </Box>
    <Link href={link.to}>{link.label}</Link>
  </ItemWrapper>
);

export default SellingPoint;
