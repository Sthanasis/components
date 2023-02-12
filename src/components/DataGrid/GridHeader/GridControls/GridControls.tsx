import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'src/components/Button';
import Popover from 'src/components/Popover';
import { useDatagrid } from 'src/context/datagrid';
import { StyledGridControls } from './GridControls.styled';

const GridControls = (): JSX.Element => {
  const { handleDensityChange } = useDatagrid();
  return (
    <StyledGridControls>
      <Popover>
        <Button icon={} onClick={handleDensityChange} />
        <Button icon={} onClick={handleDensityChange} />
        <Button icon={} onClick={handleDensityChange} />
      </Popover>
    </StyledGridControls>
  );
};

export default GridControls;
