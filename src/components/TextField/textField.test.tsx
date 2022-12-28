import { render, fireEvent } from '@testing-library/react';
import TextField from '../TextField';

const mockChange = jest.fn();

const setup = () => {
  const utils = render(
    <TextField label="Test" value="test" onChange={mockChange} />
  );
  const input = utils.getByRole('textbox');
  return {
    input,
    utils,
  };
};

describe('TextField component', () => {
  it('Creates a label from the placeholder prop', () => {
    const { queryByText } = render(<TextField placeholder="Test" />);
    expect(queryByText('Test')).toBeInTheDocument();
  });

  it('gives the parent of the label element the hasValue class when value is provided', () => {
    const { utils } = setup();
    expect(utils.queryByText('Test')?.parentNode).toHaveClass('hasValue');
  });

  it('changes the value via the change event and triggers the onChange prop', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'new test' } });

    expect(input).toHaveValue('new test');
    expect(mockChange).toHaveBeenCalled();
  });

  it('passes the fullwidth the contrast and the className prop class', () => {
    const { container } = render(
      <TextField
        label="Test"
        value="test"
        fullwidth
        contrast
        className="test"
      />
    );
    expect(container.firstChild).toHaveClass('fullwidth', 'contrast', 'test');
  });

  it('passes the error class if invalid value on blur', () => {
    const { getByRole, container } = render(
      <TextField label="Test" value="test" onChange={mockChange} required />
    );
    const input = getByRole('textbox');
    fireEvent.blur(input, { target: { value: '' } });
    expect(container.querySelector('.error')).not.toBeNull();
  });

  it('does not pass the error class if there is a valid value on blur', () => {
    const { getByRole, container } = render(
      <TextField label="Test" value="test" onChange={mockChange} required />
    );
    const input = getByRole('textbox');
    fireEvent.blur(input, { target: { value: 'test' } });
    expect(container.querySelector('.error')).toBeNull();
  });

  it('renders a button when type is submit', () => {
    const { getByRole } = render(
      <TextField
        label="Test"
        value="test"
        type="submit"
        onChange={mockChange}
      />
    );

    expect(getByRole('button')).toBeTruthy();
  });
  it('passes the error class on validate fail', () => {
    const { container } = render(
      <TextField
        label="Test"
        value="test"
        validate={(v) => v === 'correctValue'}
        onChange={mockChange}
      />
    );
    expect(container.getElementsByClassName('error')).toHaveLength(1);
  });
  it('does not pass the error class on validate success', () => {
    const { container } = render(
      <TextField
        label="Test"
        value="test"
        validate={(v) => v === 'test'}
        onChange={mockChange}
      />
    );
    expect(container.getElementsByClassName('error')).toHaveLength(0);
  });
  it('passes the error class on validate fail after blur', () => {
    const { container, queryByRole } = render(
      <TextField
        label="Test"
        value=""
        validate={(v) => v === 'test'}
        onChange={mockChange}
      />
    );

    const input = queryByRole('textbox');
    if (input) fireEvent.blur(input, { target: { value: 'wrong' } });
    expect(container.getElementsByClassName('error')).toHaveLength(1);
  });
  it('does not pass the error class on validate success after blur', () => {
    const { container, queryByRole } = render(
      <TextField
        label="Test"
        value=""
        validate={(v) => v !== 'test'}
        onChange={mockChange}
      />
    );

    const input = queryByRole('textbox');
    if (input) fireEvent.blur(input, { target: { value: 'tests' } });
    expect(container.getElementsByClassName('error')).toHaveLength(0);
  });
});
