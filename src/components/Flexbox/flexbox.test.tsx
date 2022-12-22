import Flexbox from '../Flexbox';
import { render } from '@testing-library/react';

describe('Flexbox component', () => {
  it('renders a flexbox with children', () => {
    const { getByText } = render(<Flexbox>TEST</Flexbox>);
    expect(getByText('TEST')).toMatchSnapshot();
  });
});
