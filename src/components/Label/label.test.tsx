import { render } from '@testing-library/react';
import Label from '../Label';

describe('Label Component', () => {
  it('renders the label', () => {
    const { queryByText } = render(
      <Label labelText="test" hasValue={false} hasFocus={false} />
    );
    expect(queryByText('test')).toBeTruthy();
  });
});
