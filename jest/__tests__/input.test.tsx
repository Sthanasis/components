import { render } from 'test-utils';
import Input from '../../src/components/Input';

describe('Input Component', () => {
  it('renders without crashing', () => {
    const { getByPlaceholderText } = render(<Input placeholder="test" />);
    expect(getByPlaceholderText('test')).toBeInTheDocument();
  });

  it('passes the classes correctly', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="test" className="test test2" />
    );
    expect(getByPlaceholderText('test')).toHaveClass('test');
  });
});
