import VirtualList from 'src/components/VirtualList';
import { render } from 'test-utils';

describe('VirtaulList component', () => {
  it('renders', () => {
    const { queryByLabelText } = render(
      <VirtualList
        aria-label="virtualList"
        rows={[]}
        rowHeight={20}
        renderAhead={30}
        height={10}
      />
    );
    expect(queryByLabelText('virtualList')).toBeInTheDocument();
  });
});
