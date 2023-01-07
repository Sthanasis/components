import Flexbox from '../../src/components/Flexbox';
import { render } from 'test-utils';

describe('Flexbox component', () => {
  it('renders a flexbox with children', () => {
    const { getByText } = render(<Flexbox>TEST</Flexbox>);
    expect(getByText('TEST')).toMatchSnapshot();
  });
});
