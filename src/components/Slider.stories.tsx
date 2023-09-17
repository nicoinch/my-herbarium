import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';
import { darkModeDecorator } from '../../.storybook/dark-mode-decorator';
import { SunIcon } from './icons/Sun';
import { DropletIcon } from './icons/Droplet';

const Story: Meta<typeof Slider> = {
  component: Slider,
  title: 'Slider',
  decorators: [
    (Story) => (
      <div className="p-4 flex flex-col gap-3">
        <Story />
      </div>
    ),
    darkModeDecorator,
  ],
  argTypes: { onChange: { action: 'Changed' } },
};

export default Story;

export const Basic: StoryObj<typeof Slider> = {
  name: '🧰 Basic',
  args: {
    color: 'pink',
    startIcon: <SunIcon crossedOut />,
    endIcon: <SunIcon />,
  },
};

export const VariantColor: StoryObj<typeof Slider> = {
  name: '🎭 Variant - Color',
  render: () => (
    <div className="flex flex-col gap-3">
      <Slider
        startIcon={<DropletIcon crossedOut />}
        endIcon={<DropletIcon />}
        label="Pink"
        color="pink"
      />
      <Slider
        startIcon={<DropletIcon crossedOut />}
        endIcon={<DropletIcon />}
        label="Blue"
        color="blue"
      />
      <Slider
        startIcon={<DropletIcon crossedOut />}
        endIcon={<DropletIcon />}
        label="Green"
        color="green"
      />
    </div>
  ),
};

export const StateWithValue: StoryObj<typeof Slider> = {
  name: '🔁 State - With value',
  render: () => (
    <div className="flex flex-col gap-3">
      <Slider
        startIcon={<DropletIcon crossedOut />}
        endIcon={<DropletIcon />}
        label="Pink"
        color="pink"
        value={10}
      />
      <Slider
        startIcon={<DropletIcon crossedOut />}
        endIcon={<DropletIcon />}
        label="Blue"
        color="blue"
        value={20}
      />
      <Slider
        startIcon={<DropletIcon crossedOut />}
        endIcon={<DropletIcon />}
        label="Green"
        color="green"
        value={30}
      />
    </div>
  ),
};
