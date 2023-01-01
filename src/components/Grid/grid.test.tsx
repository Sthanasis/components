import Grid from '.';
import { render } from 'test-utils';

describe('Grid component', () => {
  it('renders', () => {
    const { queryByText } = render(<Grid>Test</Grid>);
    expect(queryByText('Test')).toBeInTheDocument();
  });
});
