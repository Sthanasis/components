import { render, fireEvent } from 'test-utils';
import Backdrop from '.';

const mockClose = jest.fn();

const setup = () => {
  const utils = render(<Backdrop aria-label="backdrop" onClose={mockClose} />);
  return utils;
};

describe('Backdrop Component', () => {
  it('renders', () => {
    const { queryByLabelText } = setup();
    expect(queryByLabelText('backdrop')).toBeInTheDocument();
  });
  it('removes the backdrop on esc key', () => {
    const { queryByLabelText } = setup();
    const el = queryByLabelText('backdrop');
    if (el) fireEvent.keyUp(el, { code: '27' });
    expect(mockClose).toHaveBeenCalled();
  });
});
