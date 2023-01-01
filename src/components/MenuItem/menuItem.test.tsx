import { render } from 'test-utils';
import MenuItem from './MenuItem';

describe('MenuItem component', () => {
  it('takes the selected class', () => {
    const { container } = render(<MenuItem selected />);
    expect(container.querySelector('.selected')).toBeInTheDocument();
  });
});
