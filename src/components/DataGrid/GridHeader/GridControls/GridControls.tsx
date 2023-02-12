import MenuItem from 'src/components/MenuItem';
import PopoverMenu from 'src/components/PopoverMenu';
import { useDatagrid } from 'src/context/datagrid';
import { Density } from 'src/types';
import { DensityImage, StyledGridControls } from './GridControls.styled';

const DensityControls = ({ closePopover }: { closePopover: () => void }) => {
  const { handleDensityChange, density } = useDatagrid();
  const changeDensity = (d: Density) => {
    handleDensityChange(d);
    closePopover();
  };

  return (
    <>
      <MenuItem
        value={Density.sm}
        selected={density === Density.sm}
        onClick={() => changeDensity(Density.sm)}
      >
        <DensityImage>Compact</DensityImage>
      </MenuItem>
      <MenuItem
        value={Density.md}
        selected={density === Density.md}
        onClick={() => changeDensity(Density.md)}
      >
        Standard
      </MenuItem>
      <MenuItem
        value={Density.lg}
        selected={density === Density.lg}
        onClick={() => changeDensity(Density.lg)}
      >
        Comfortable
      </MenuItem>
    </>
  );
};

const GridControls = (): JSX.Element => (
  <StyledGridControls>
    <PopoverMenu
      label="DENSITY"
      content={({ closePopover }) => (
        <DensityControls closePopover={closePopover} />
      )}
    />
  </StyledGridControls>
);

export default GridControls;
