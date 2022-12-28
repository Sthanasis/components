import { ThemeVariantType } from 'src/types/types';
import { useTheme } from 'styled-components';
import { TextfieldVariant } from '../TextField/TextField';
import { StyledLabelContainer } from './StyledLabel';

interface ILabelProps {
  labelText?: string;
  hasValue: boolean;
  hasFocus: boolean;
  hasError: boolean;
  variant: TextfieldVariant;
  color: ThemeVariantType;
  withIcon: boolean;
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
