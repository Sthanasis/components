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

  it('renders a button with classes based on given props', () => {
    const { queryByRole } = render(
      <Button variant="text" color="primary">
        TEST
      </Button>
    );
    const buttonClasses = queryByRole('button').className;
    const includesExpectedClasses =
      buttonClasses.includes('button') &&
      buttonClasses.includes('text') &&
      buttonClasses.includes('primary');

    expect(includesExpectedClasses).toBe(true);
  });

  it('renders and non elevated contained button', () => {
    const { queryByRole } = render(
      <Button variant="contained" elevated={false}>
        Non elevated button
      </Button>
    );

    expect(queryByRole('button').classList.contains('elevated')).toBe(false);
  });

  it('renders a contained elevated button', () => {
    const { queryByRole } = render(
      <Button variant="contained" elevated>
        Elevated button
      </Button>
    );
    const button = queryByRole('button');

    const includesRequiredClasses =
      button.classList.contains('elevated') &&
      button.classList.contains('contained');

    expect(includesRequiredClasses).toBe(true);
  });

  it('triggers the click event on click', () => {
    const mockFn = jest.fn();
    render(<Button onClick={mockFn}>TEST</Button>);
    const button = screen.queryByRole('button');
    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalled();
  });

  it('adds a class when passed as prop', () => {
    const { queryByRole } = render(
      <Button className="test-class">TEST</Button>
    );
    expect(queryByRole('button').classList.contains('test-class')).toBe(true);
  });

  it('passes the fullwidth the contrast and the disabled class', () => {
    const { queryByRole } = render(
      <Button fullwidth contrast disabled>
        TEST
      </Button>
    );
    const button = queryByRole('button');
    const includesClasses =
      button.classList.contains('fullwidth') &&
      button.classList.contains('contrast') &&
      button.classList.contains('disabled');
    expect(includesClasses).toBe(true);
  });
  it('renders the icons only', () => {
    const { queryByRole } = render(
      <Button
        fullwidth
        contrast
        disabled
        showOnlyIcons
        iconStart={fa0}
        iconEnd={fa0}
      >
        TEST
      </Button>
    );
    expect(queryByRole('button').querySelectorAll('.icon')).toHaveLength(2);
  });
});
