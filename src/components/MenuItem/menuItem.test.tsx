import { render } from '@testing-library/react';
import MenuItem from './MenuItem';

describe('MenuItem component', () => {
  it('takes the selected class', () => {
    const { container } = render(<MenuItem selected />);
    expect(container.querySelector('.selected')).toBeInTheDocument();
  });
});
