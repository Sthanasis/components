import { PopoverMenu } from 'src';
import { render } from 'test-utils';
describe('PopoverMenu', () => {
  it('renders the label', () => {
    const { queryByText } = render(
      <PopoverMenu label="label">test</PopoverMenu>
    );
    expect(queryByText('label')).toBeInTheDocument();
  });
});
