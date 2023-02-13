import MenuItem from 'src/components/MenuItem';
import PopoverMenu from 'src/components/PopoverMenu';
import { useDatagrid } from 'src/context/datagrid';
import { Density, IBaseProps } from 'src/types';
import { DensityImage, StyledGridControls } from './GridControls.styled';

const GridControls = (props: IBaseProps): JSX.Element => {
  const { density, handleDensityChange } = useDatagrid();

  return (
    <StyledGridControls {...props}>
      <PopoverMenu label="DENSITY" onChange={(v) => handleDensityChange(+v)}>
        <MenuItem value={Density.sm} selected={density === Density.sm}>
          <DensityImage>Compact</DensityImage>
        </MenuItem>
        <MenuItem value={Density.md} selected={density === Density.md}>
          Standard
        </MenuItem>
        <MenuItem value={Density.lg} selected={density === Density.lg}>
          Comfortable
        </MenuItem>
      </PopoverMenu>
    </StyledGridControls>
  );
};

export default GridControls;
