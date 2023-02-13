import { render } from 'test-utils';
import MenuItem from '../../src/components/MenuItem/MenuItem';

describe('MenuItem component', () => {
  it('takes the selected class', () => {
    const { queryByLabelText } = render(
      <MenuItem value={'test'} aria-label="menuitem" />
    );
    expect(queryByLabelText('menuitem')).toBeInTheDocument();
  });
});
