import { render } from 'test-utils';
import Button from '.';

describe('Button Component', () => {
  it('renders an empty button', () => {
    const { queryByRole } = render(<Button />);
    expect(queryByRole('button')).toBeInTheDocument();
  });

  it('renders the children prop', () => {
    const { getByText } = render(<Button>TEST</Button>);
    expect(getByText('TEST')).toBeInTheDocument();
  });

  it('renders a button with red text when passed through style prop', () => {
    const { queryByRole } = render(
      <Button style={{ color: 'red' }}>TEST</Button>
    );
    expect(queryByRole('button')).toHaveAttribute('style', 'color: red;');
  });
});
