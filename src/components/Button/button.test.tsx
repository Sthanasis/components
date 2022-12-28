import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';
import { fa0 } from '@fortawesome/free-solid-svg-icons';

describe('Button Component', () => {
  it('renders an empty button', () => {
    const { queryByRole } = render(<Button />);
    expect(queryByRole('button')).toMatchSnapshot();
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
