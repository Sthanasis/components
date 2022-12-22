import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/assets/theme';
import Input from '../src/components/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <Input {...args}>{args.type?.toUpperCase()}</Input>
  </ThemeProvider>
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  placeholder: 'Input',
};
