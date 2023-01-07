import { render } from 'test-utils';
import Icon from '../../src/components/Icon';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

describe('Icon component', () => {
  it('renders', () => {
    const { queryByLabelText } = render(
      <Icon icon={faAdd} aria-label="test icon" />
    );
    expect(queryByLabelText('test icon')).toBeInTheDocument();
  });
});
