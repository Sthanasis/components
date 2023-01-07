import { fireEvent, render, waitFor } from 'test-utils';
import Search from '../../src/components/Search';

const mockOnSearch = jest.fn();
const searchLabel = 'test search';
const setup = () => {
  const utils = render(
    <Search aria-label={searchLabel} onSearch={mockOnSearch} />
  );
  const input = utils.getByRole('textbox');
  return { ...utils, input };
};
describe('Search Component', () => {
  it('renders', () => {
    const { queryByLabelText } = setup();
    expect(queryByLabelText(searchLabel)).toBeInTheDocument();
  });
  it('triggers onSearch method on change event', async () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'test' } });
    await waitFor(() => expect(mockOnSearch).toHaveBeenCalled());
  });
});
