import { ComponentStory, ComponentMeta } from '@storybook/react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from 'src/context/theme';
import { defaultTheme } from 'src/utilities/theme';
import Button from 'src/components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disabled: { control: 'boolean', defaultValue: false },
    elevated: {
      control: 'boolean',
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['text', 'outlined', 'contained'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <Button {...args}>I am a Button</Button>
  </ThemeProvider>
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  color: 'primary',
  variant: 'contained',
  elevated: true,
};

export const WithIconStart = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithIconStart.args = {
  color: 'primary',
  variant: 'contained',
  iconStart: faCoffee,
  elevated: true,
};
export const WithIconEnd = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithIconEnd.args = {
  color: 'primary',
  variant: 'contained',
  iconEnd: faCoffee,
  elevated: true,
};

export const WithIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithIcon.args = {
  color: 'primary',
  variant: 'contained',
  icon: faCoffee,
  elevated: true,
};
