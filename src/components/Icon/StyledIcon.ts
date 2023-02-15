import { IconAlignType } from 'src/types/types';
import styled from 'styled-components';

interface IStyledIconProps {
  align: IconAlignType;
}

export const StyledIcon = styled.span(({ align }: IStyledIconProps) => {
  if (align === 'start') {
    return { marginRight: '10px' };
  } else if (align === 'end') {
    return { marginLeft: '10px' };
  } else {
    return { margin: '5px', display: 'flex' };
  }
});
