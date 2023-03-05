import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'src/context/theme';
import { defaultTheme } from 'src/utilities/theme';
import VirtualList from 'src/components/VirtualList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/VirtualList',
  component: VirtualList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof VirtualList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VirtualList> = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <VirtualList {...args} />
  </ThemeProvider>
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  rows: [...new Int32Array(1000000)],
  rowHeight: 40,
  height: 500,
  renderAhead: 30,
};
