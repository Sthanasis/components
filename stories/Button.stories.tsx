import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../theme';

import Button from '../src/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disabled: { control: 'boolean' },
    elevated: { control: 'boolean' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <Button {...args}>TEXT</Button>
    <hr />
    <Button {...args} variant="contained">
      CONTAINED
    </Button>
    <hr />
    <Button {...args} variant="outlined">
      OUTLINED
    </Button>
  </ThemeProvider>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: 'primary',
  variant: 'text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  variant: 'text',
};

// export const Large = Template.bind({});
// Large.args = {};

// export const Small = Template.bind({});
// Small.args = {};
