import { render } from 'test-utils';
import Text from '../Text';

describe('Text component', () => {
  it('renders the inside text', () => {
    const { getByText } = render(<Text>TEST</Text>);
    expect(getByText('TEST')).toBeInTheDocument();
  });
  it('renders an element based on the variant prop', () => {
    const { container } = render(<Text tag="h1">TEST</Text>);
    expect(container.firstChild?.nodeName.toLowerCase()).toBe('h1');
  });
  it('renders passes the className prop to element classes', () => {
    const { getByText } = render(<Text className="test test1">TEST</Text>);
    const el = getByText('TEST');
    const includesClasses =
      el.classList.contains('test') && el.classList.contains('test1');
    expect(includesClasses).toBe(true);
  });
});
