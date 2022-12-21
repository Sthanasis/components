import { render } from '@testing-library/react';
import Loader from '../Loader';
describe('Loader component', () => {
  it('renders a spinner loader', () => {
    const { getByLabelText } = render(<Loader />);
    expect(getByLabelText('spinner')).toBeTruthy();
  });
  it('renders a linear loader', () => {
    const { getByLabelText } = render(<Loader type="linear" />);
    expect(getByLabelText('linear')).toBeTruthy();
  });
});
