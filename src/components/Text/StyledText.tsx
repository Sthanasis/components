import styled from 'styled-components';

export type TextVariantType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span';

interface IStyledTextProps {
  variant: TextVariantType;
}

export const StyledSpan = styled.span`
  font-size: 18px;
`;
export const StyledParagraph = styled.p`
  font-size: 15px;
`;
export const StyledH1 = styled.h1`
  font-weight: inherit;
`;
export const StyledH2 = styled.h2`
  font-weight: inherit;
`;
export const StyledH3 = styled.h3`
  font-weight: inherit;
`;
export const StyledH4 = styled.h4`
  font-weight: inherit;
`;
export const StyledH5 = styled.h5`
  font-weight: inherit;
`;
export const StyledH6 = styled.h6`
  font-weight: inherit;
`;
