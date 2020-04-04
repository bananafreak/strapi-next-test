import styled, { css } from 'styled-components';

export const typography = {
  h1: {
    fontSize: 60,
    lineHeight: 72,
    fontSizeMedium: 48,
    lineHeightMedium: 60,
    fontSizeMobile: 32,
    lineHeightMobile: 40,
  },
  h2: {
    fontSize: 40,
    lineHeight: 48,
    fontSizeMobile: 26,
    lineHeightMobile: 32,
  },
  h3: {
    fontSize: 28,
    lineHeight: 36,
    fontSizeMobile: 22,
    lineHeightMobile: 30,
  },
  h4: {
    fontSize: 24,
    lineHeight: 32,
    fontSizeMobile: 20,
    lineHeightMobile: 28,
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
  },
  textSM: {
    fontSize: 16,
    lineHeight: 20,
  },
  textXS: {
    fontSize: 14,
    lineHeight: 16,
  },
};

const sharedTypographyStyles = css`
  font-family: ${p => p.theme.font.fontFamily};
  text-align: ${p => p.textAlign || 'left'};
  margin: 0;
  max-width: ${({ theme, maxWidth }) => maxWidth || theme.layout.textWidth}px;
`;

// H1
export const H1Styles = css`
  ${sharedTypographyStyles};
  font-weight: ${p => p.fontWeight || 700};
  color: ${p => p.color || p.theme.colors.textBlack};
  font-size: ${typography.h1.fontSizeMobile}px;
  line-height: ${typography.h1.lineHeightMobile}px;
  @media (min-width: ${({ theme }) => theme.bp.md}px) {
    font-size: ${typography.h1.fontSizeMedium}px;
    line-height: ${typography.h1.lineHeightMedium}px;
  }
  @media (min-width: ${({ theme }) => theme.bp.lg}px) {
    font-size: ${typography.h1.fontSize}px;
    line-height: ${typography.h1.lineHeight}px;
  }
`;

export const H1 = styled.h1`
  ${H1Styles};
`;

// H2
export const H2Styles = css`
  ${sharedTypographyStyles};
  font-weight: ${p => p.fontWeight || 700};
  color: ${p => p.color || p.theme.colors.textBlack};
  font-size: ${typography.h2.fontSizeMobile}px;
  line-height: ${typography.h2.lineHeightMobile}px;
  @media (min-width: ${({ theme }) => theme.bp.md}px) {
    font-size: ${typography.h2.fontSize}px;
    line-height: ${typography.h2.lineHeight}px;
  }
`;

export const H2 = styled.h2`
  ${H2Styles};
`;

// H3
export const H3Styles = css`
  ${sharedTypographyStyles};
  font-weight: ${p => p.fontWeight || 700};
  color: ${p => p.color || p.theme.colors.textBlack};
  font-size: ${typography.h3.fontSizeMobile}px;
  line-height: ${typography.h3.lineHeightMobile}px;
  @media (min-width: ${({ theme }) => theme.bp.md}px) {
    font-size: ${typography.h3.fontSize}px;
    line-height: ${typography.h3.lineHeight}px;
  }
`;

export const H3 = styled.h3`
  ${H3Styles};
`;

// H4
export const H4Styles = css`
  ${sharedTypographyStyles};
  font-weight: ${p => p.fontWeight || 700};
  color: ${p => p.color || p.theme.colors.textBlack};
  font-size: ${typography.h4.fontSizeMobile}px;
  line-height: ${typography.h4.lineHeightMobile}px;
  @media (min-width: ${({ theme }) => theme.bp.md}px) {
    font-size: ${typography.h4.fontSize}px;
    line-height: ${typography.h4.lineHeight}px;
  }
`;

export const H4 = styled.h4`
  ${H4Styles};
`;

// Text
export const TextStyles = css`
  ${sharedTypographyStyles};
  color: ${p => p.color || p.theme.colors.textGray};
  font-size: ${typography.text.fontSize}px;
  line-height: ${typography.text.lineHeight}px;
  font-weight: ${p => p.fontWeight || 400};
`;

export const Text = styled.p`
  ${TextStyles};
`;

// TextSM
export const TextSMStyles = css`
  ${sharedTypographyStyles};
  color: ${p => p.color || p.theme.colors.textGray};
  font-size: ${typography.textSM.fontSize}px;
  line-height: ${typography.textSM.lineHeight}px;
  font-weight: ${p => p.fontWeight || 400};
`;

export const TextSM = styled.p`
  ${TextSMStyles};
`;

// TextXS
export const TextXSStyles = css`
  ${sharedTypographyStyles};
  color: ${p => p.color || p.theme.colors.textGray};
  font-size: ${typography.textXS.fontSize}px;
  line-height: ${typography.textXS.lineHeight}px;
`;

export const TextXS = styled.p`
  ${TextXSStyles};
`;
