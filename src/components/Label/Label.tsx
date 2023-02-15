import { ILabelProps } from 'src/types';
import { useTheme } from 'styled-components';
import { StyledLabelContainer } from './StyledLabel';

const Label = ({
  labelText,
  withIcon = false,
  hasError = false,
  variant = 'filled',
  color = 'primary',
  ...rest
}: ILabelProps) => {
  const theme = useTheme();
  return labelText ? (
    <StyledLabelContainer
      withIcon={withIcon}
      hasError={hasError}
      variant={variant}
      color={color}
      theme={theme}
      {...rest}
    >
      <label>{labelText}</label>
    </StyledLabelContainer>
  ) : null;
};

export default Label;
