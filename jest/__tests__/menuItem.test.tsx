import { render } from 'test-utils';
import MenuItem from '../../src/components/MenuItem/MenuItem';

describe('MenuItem component', () => {
  it('takes the selected class', () => {
    const { container } = render(<MenuItem selected />);
    expect(container.querySelector('.selected')).toBeInTheDocument();
  });
});
