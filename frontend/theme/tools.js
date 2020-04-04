import styled from 'styled-components';

export const Box = styled.div`
  display: ${({ display }) => display || 'block'};
  ${({ position }) => (position ? `position: ${position}` : '')};
  flex-direction: ${({ flexDirection }) => flexDirection || ''};
  align-items: ${({ alignItems }) => alignItems || ''};
  justify-content: ${({ justifyContent }) => justifyContent || ''};
  ${({ margin }) => (margin ? `margin: ${margin}` : '')};
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}rem` : '')};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}rem` : ''};
  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}rem` : '')};
  margin-right: ${({ marginRight }) =>
    marginRight ? `${marginRight}rem` : ''};
`;
