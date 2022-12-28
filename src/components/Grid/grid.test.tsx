import Grid from '../Grid';
import { render } from '@testing-library/react';

describe('Grid component', () => {
  it('renders a grid container', () => {
    const { queryByText } = render(<Grid container>TEST</Grid>);
    expect(queryByText('TEST')?.classList.contains('grid')).toBe(true);
  });
  it('renders a grid item', () => {
    const { queryByText } = render(<Grid>TEST</Grid>);
    expect(queryByText('TEST')?.classList.contains('grid')).toBe(false);
  });
});
