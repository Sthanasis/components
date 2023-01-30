import { ThemeType } from 'src/utilities/theme';
import styled from 'styled-components';
import type { TextTagType, TextVariantType } from './Text';

interface IStyledTextProps {
  theme: ThemeType;
  variant: TextVariantType;
}

const getTextColor = ({ theme, variant }: IStyledTextProps) => {
  if (variant === 'primary') return theme.palette.primary.main;
  if (variant === 'secondary') return theme.palette.secondary.main;
  return 'inherit';
};

const StyledSpan = styled.span`
  color: ${getTextColor};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 15px;
`;
const StyledParagraph = styled.p`
  color: ${getTextColor};
  font-size: 15px;
`;
const StyledH1 = styled.h1`
  color: ${getTextColor};
  font-weight: inherit;
`;
const StyledH2 = styled.h2`
  color: ${getTextColor};
  font-weight: inherit;
`;
const StyledH3 = styled.h3`
  color: ${getTextColor};
  font-weight: inherit;
`;
const StyledH4 = styled.h4`
  color: ${getTextColor};
  font-weight: inherit;
`;
const StyledH5 = styled.h5`
  color: ${getTextColor};
  font-weight: inherit;
`;
const StyledH6 = styled.h6`
  color: ${getTextColor};
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
