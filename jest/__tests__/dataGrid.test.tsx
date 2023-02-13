import DataGrid from 'src/components/DataGrid';
import { render } from 'test-utils';

describe('Datagrid', () => {
  it('renders', () => {
    const { queryByLabelText } = render(
      <DataGrid rows={[]} columns={[]} aria-label="datagrid" />
    );
    expect(queryByLabelText('datagrid')).toBeInTheDocument();
  });
});
