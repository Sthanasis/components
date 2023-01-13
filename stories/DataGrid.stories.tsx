import { ComponentStory, ComponentMeta } from '@storybook/react';
import { fakeData } from 'src/assets/data/dummyData';
import { ThemeProvider } from 'src/context/theme';
import { defaultTheme } from 'src/utilities/theme';
import DataGrid from 'src/components/DataGrid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/DataGrid',
  component: DataGrid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DataGrid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DataGrid> = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <DataGrid {...args}>I am a DataGrid</DataGrid>
  </ThemeProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  rows: fakeData,
  columns: [
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
  ],
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
