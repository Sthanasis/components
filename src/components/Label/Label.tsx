import { useTheme } from 'styled-components';
import { StyledLabelContainer } from './StyledLabel';

interface ILabelProps {
  labelText?: string;
  hasValue: boolean;
  hasFocus: boolean;
}

const Label = ({ labelText, ...rest }: ILabelProps) => {
  const theme = useTheme();
  return labelText ? (
    <StyledLabelContainer theme={theme} {...rest}>
      <label>{labelText}</label>
    </StyledLabelContainer>
  ) : null;
};

export default Label;
