import styled from 'styled-components';
import { IconAlignType } from './Icon';

interface IStyledIconProps {
  align: IconAlignType;
}

export const StyledIcon = styled.span(({ align }: IStyledIconProps) => {
  if (align === 'start') {
    return { marginRight: '10px' };
  } else if (align === 'end') {
    return { marginLeft: '10px' };
  } else {
    return { margin: '5px' };
  }
});
