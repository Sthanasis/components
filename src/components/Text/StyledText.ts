import styled from 'styled-components';
import type { TextTagType } from './Text';

const StyledSpan = styled.span`
  font-size: 18px;
`;
const StyledParagraph = styled.p`
  font-size: 15px;
`;
const StyledH1 = styled.h1`
  font-weight: inherit;
`;
const StyledH2 = styled.h2`
  font-weight: inherit;
`;
const StyledH3 = styled.h3`
  font-weight: inherit;
`;
const StyledH4 = styled.h4`
  font-weight: inherit;
`;
const StyledH5 = styled.h5`
  font-weight: inherit;
`;
const StyledH6 = styled.h6`
  font-weight: inherit;
`;
export const getStyledText = (tag: TextTagType) => {
  const componentMap = {
    span: StyledSpan,
    p: StyledParagraph,
    h1: StyledH1,
    h2: StyledH2,
    h3: StyledH3,
    h4: StyledH4,
    h5: StyledH5,
    h6: StyledH6,
  };
  return componentMap[tag];
};
