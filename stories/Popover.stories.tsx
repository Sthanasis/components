import { useState, MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'src/assets/theme';
import Popover from 'src/components/Popover';
import Button from 'src/components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Popover',
  component: Popover,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Popover>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Popover> = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [position, setPosition] = useState('middle');
  const visible = Boolean(anchorEl);

  const showPopover = (e: MouseEvent<HTMLButtonElement>, position: string) => {
    setPosition(position);
    setAnchorEl(e.currentTarget);
  };

  const closePopover = () => setAnchorEl(null);
  return (
    <ThemeProvider theme={defaultTheme}>
      <div style={{ display: 'flex' }}>
        <Button
          style={{
            marginRight: 'auto',
          }}
          buttonType={'contained'}
          onClick={(e) => showPopover(e, 'right')}
        >
          LEFT
        </Button>
        <Button
          style={{
            margin: 'auto',
          }}
          buttonType={'contained'}
          onClick={(e) => showPopover(e, 'middle')}
        >
          MIDDLE
        </Button>
        <Button
          style={{
            marginLeft: 'auto',
          }}
          buttonType={'contained'}
          onClick={(e) => showPopover(e, 'left')}
        >
          RIGHT
        </Button>
      </div>

      <Popover visible={visible} onClose={closePopover} anchorEl={anchorEl}>
        <div>Popup with {position} position</div>
      </Popover>
    </ThemeProvider>
  );
};

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {};
