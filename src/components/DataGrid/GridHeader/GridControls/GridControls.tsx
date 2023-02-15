import MenuItem from 'src/components/MenuItem';
import PopoverMenu from 'src/components/PopoverMenu';
import { useDatagrid } from 'src/context/datagrid';
import { IBaseProps } from 'src/types';
import { DensityType } from 'src/types/types';
import { StyledGridControls } from './GridControls.styled';

const GridControls = (props: IBaseProps): JSX.Element => {
  const { density, handleDensityChange } = useDatagrid();

  return (
    <StyledGridControls {...props}>
      <PopoverMenu
        label="DENSITY"
        onChange={(v) => handleDensityChange(v as DensityType)}
      >
        <MenuItem value="sm" selected={density === 'sm'}>
          Compact
        </MenuItem>
        <MenuItem value="md" selected={density === 'md'}>
          Standard
        </MenuItem>
        <MenuItem value="lg" selected={density === 'lg'}>
          Comfortable
        </MenuItem>
      </PopoverMenu>
    </StyledGridControls>
  );
};

export default GridControls;
