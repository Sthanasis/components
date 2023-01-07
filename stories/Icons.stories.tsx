import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'src/context/theme';
import { defaultTheme } from 'src/utilities/theme';
import IconList from './IconList/IconList';

export default {
  title: 'Example/Icons',
  component: IconList,
  argTypes: {
    size: {},
  },
} as ComponentMeta<typeof IconList>;

const Template: ComponentStory<typeof IconList> = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <IconList {...args} />
  </ThemeProvider>
);

export const Solid = Template.bind({});
Solid.args = {
  iconType: 'solid',
  size: '2x',
};
export const Regular = Template.bind({});
Regular.args = {
  iconType: 'regular',
  size: '2x',
};
