import { ILabelProps } from 'src/types';
import { StyledLabelContainer } from './StyledLabel';

const Label = ({
  labelText,
  withIcon = false,
  hasError = false,
  variant = 'filled',
  color = 'primary',
  ...rest
}: ILabelProps) => {
  return labelText ? (
    <StyledLabelContainer
      withIcon={withIcon}
      hasError={hasError}
      variant={variant}
      color={color}
      {...rest}
    >
      <label>{labelText}</label>
    </StyledLabelContainer>
  ) : null;
};

export default Label;
