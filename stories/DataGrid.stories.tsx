import { ComponentStory, ComponentMeta } from '@storybook/react';
import { fakeData } from 'src/assets/data/dummyData';
import { ThemeProvider } from 'src/context/theme';
import { defaultTheme } from 'src/utilities/theme';
import DataGrid from 'src/components/DataGrid';
import { useEffect, useState } from 'react';
import { RowType } from 'src/components/DataGrid/utilities/types';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/DataGrid',
  component: DataGrid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DataGrid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DataGrid> = () => {
  const columns = [
    { field: 'id', name: 'id' },
    { field: 'first_name', name: 'First Name' },
    {
      field: 'last_name',
      name: 'last name',
    },
    {
      field: 'email',
      name: 'email',
    },
    {
      field: 'gender',
      name: 'gender',
    },
    {
      field: 'ip_address',
      name: 'ip',
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
    worker?.postMessage(fakeData);
    if (worker)
      worker.onmessage = (e: MessageEvent<RowType[]>) => {
        setRows(e.data);
      };
    return () => {
      worker?.terminate();
    };
  }, [worker]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <DataGrid columns={columns} rows={rows} />
    </ThemeProvider>
  );
};

export const Basic = Template.bind({});
