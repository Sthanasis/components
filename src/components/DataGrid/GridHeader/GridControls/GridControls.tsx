import MenuItem from 'src/components/MenuItem';
import PopoverMenu from 'src/components/PopoverMenu';
import { useDatagrid } from 'src/context/datagrid';
import { Density } from 'src/types';
import { DensityImage, StyledGridControls } from './GridControls.styled';

const GridControls = (): JSX.Element => {
  const { density, handleDensityChange } = useDatagrid();

  return (
    <StyledGridControls>
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
