import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/assets/theme';
import Button from '../src/components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disabled: { control: 'boolean', defaultValue: false },
    elevated: {
      control: 'boolean',
      defaultValue: true,
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    buttonType: {
      options: ['text', 'outlined', 'contained'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <Button {...args}>{args.buttonType?.toUpperCase()}</Button>
    {/* <hr />
    <Button {...args} variant="contained">
      CONTAINED
    </Button>
    <hr />
    <Button {...args} variant="outlined">
      OUTLINED
    </Button> */}
  </ThemeProvider>
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  variant: 'primary',
  buttonType: 'text',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   color: 'secondary',
//   variant: 'text',
// };

// export const Large = Template.bind({});
// Large.args = {};

// export const Small = Template.bind({});
// Small.args = {};
