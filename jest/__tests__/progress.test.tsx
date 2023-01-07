import { render } from 'test-utils';
import Progress from '../../src/components/Progress';
describe('Progress component', () => {
  it('renders a spinner Progress', () => {
    const { getByLabelText } = render(<Progress />);
    expect(getByLabelText('spinner')).toBeTruthy();
  });
  it('renders a linear Progress', () => {
    const { getByLabelText } = render(<Progress type="linear" />);
    expect(getByLabelText('linear')).toBeTruthy();
  });
});
