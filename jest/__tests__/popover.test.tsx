import { render } from 'test-utils';
import Popover from '../../src/components/Popover';

const setup = () => {
  const utils = render(
    <Popover aria-label="popover" visible={true}>
      Test
    </Popover>
  );
  return utils;
};

describe('Popover Component', () => {
  it('renders', () => {
    const { queryByLabelText } = setup();
    expect(queryByLabelText('popover')).toBeInTheDocument();
  });
});
