import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'src/context/theme';
import { defaultTheme } from 'src/assets/theme';
import Search from 'src/components/Search';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Search',
  component: Search,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: ['outlined', 'filled'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Search>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Search> = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <Search {...args} />
  </ThemeProvider>
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  variant: 'outlined',
  color: 'primary',
};
