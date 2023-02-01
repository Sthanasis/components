import { ComponentStory, ComponentMeta } from '@storybook/react';
import { fakeData, smallDataset } from 'src/assets/data/dummyData';
import { ThemeProvider } from 'src/context/theme';
import { defaultTheme } from 'src/utilities/theme';
import DataGrid from 'src/components/DataGrid';
import { useEffect, useState } from 'react';
import { ColumnType, RowType } from 'src/components/DataGrid/utilities/types';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/DataGrid',
  component: DataGrid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DataGrid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DataGrid> = (args) => {
  const columns: ColumnType[] = [
    { field: 'id', name: 'id', width: 90 },
    { field: 'first_name', name: 'First Name', width: 150 },
    {
      field: 'last_name',
      name: 'last name',
      width: 150,
    },
    {
      field: 'email',
      name: 'email',
      width: 200,
    },
    {
      field: 'gender',
      name: 'gender',
      width: 300,
    },
    {
      field: 'ip_address',
      name: 'ip',
      width: 300,
    },
  ];

  const [rows, setRows] = useState<RowType[]>([]);
  const [worker, setWorker] = useState<Worker>();
  useEffect(() => {
    setWorker(
      new Worker(
        new URL('../src/utilities/workers/dataWorker.ts', import.meta.url)
      )
    );
  }, []);
  useEffect(() => {
    if (args.bigDataset) {
      worker?.postMessage(fakeData);
      if (worker)
        worker.onmessage = (e: MessageEvent<RowType[]>) => {
          setRows(e.data);
        };
    } else {
      setRows(smallDataset);
    }

    return () => {
      worker?.terminate();
    };
  }, [worker]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <DataGrid columns={columns} rows={rows} {...args} />
    </ThemeProvider>
  );
};
export const Basic = Template.bind({});
Basic.args = {
  bigDataset: false,
};

export const VirtualTable = Template.bind({});

VirtualTable.args = {
  bigDataset: true,
};
