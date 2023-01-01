import { render } from 'test-utils';
import Input from '../Input';

describe('Input Component', () => {
  it('renders without crashing', () => {
    const { getByPlaceholderText } = render(<Input placeholder="test" />);
    expect(getByPlaceholderText('test')).toMatchSnapshot();
  });

  it('passes the classes correctly', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="test" className="test test2" />
    );
    expect(getByPlaceholderText('test')).toHaveClass('test');
  });

  it('takes the fullwidth prop correctly', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="test" fullwidth />
    );
    expect(getByPlaceholderText('test')).toHaveClass('fullwidth');
  });
});
