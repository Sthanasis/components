import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'src/context/theme';
import { defaultTheme } from 'src/assets/theme';
import Text from 'src/components/Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'default'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <Text {...args} tag="span">
      This is a span text
    </Text>
    <Text {...args} tag="p">
      This is a p text
    </Text>
    <Text {...args} tag="h1">
      This is a h1 text
    </Text>
    <Text {...args} tag="h2">
      This is a h2 text
    </Text>
    <Text {...args} tag="h3">
      This is a h3 text
    </Text>
    <Text {...args} tag="h4">
      This is a h4 text
    </Text>
    <Text {...args} tag="h5">
      This is a h5 text
    </Text>
    <Text {...args} tag="h6">
      This is a h6 text
    </Text>
  </ThemeProvider>
);

export const TextElements = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextElements.args = {
  variant: 'default',
};
