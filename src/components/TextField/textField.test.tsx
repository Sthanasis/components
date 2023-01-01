import { render, fireEvent } from 'test-utils';
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

  it('changes the value via the change event and triggers the onChange prop', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'new test' } });

    expect(input).toHaveValue('new test');
    expect(mockChange).toHaveBeenCalled();
  });
});
