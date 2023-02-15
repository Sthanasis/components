import { useState, MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'src/context/theme';
import { defaultTheme } from 'src/utilities/theme';
import Popover from 'src/components/Popover';
import Button from 'src/components/Button';
import useAnchoreElement from 'src/utilities/hooks/useAnchorElement';
import { Box } from 'src';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Popover',
  component: Popover,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Popover>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Popover> = () => {
  const { anchorEl, showPopover, closePopover, visible } =
    useAnchoreElement(null);
  const [position, setPosition] = useState('middle');

  const show = (e: MouseEvent<HTMLButtonElement>, position: string) => {
    setPosition(position);
    showPopover(e);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div style={{ display: 'flex' }}>
        <Button
          style={{
            marginRight: 'auto',
          }}
          variant={'contained'}
          onClick={(e) => show(e, 'right')}
        >
          RIGHT
        </Button>
        <Button
          style={{
            margin: 'auto',
          }}
          variant={'contained'}
          onClick={(e) => show(e, 'middle')}
        >
          MIDDLE
        </Button>
        <Button
          style={{
            marginLeft: 'auto',
          }}
          variant={'contained'}
          onClick={(e) => show(e, 'left')}
        >
          LEFT
        </Button>
      </div>

      <Popover visible={visible} onClose={closePopover} anchorEl={anchorEl}>
        <Box style={{ padding: 10 }}>Popup extending to the {position}</Box>
      </Popover>
    </ThemeProvider>
  );
};

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {};
