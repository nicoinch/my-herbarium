import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { darkModeDecorator } from '../../.storybook/dark-mode-decorator';
import { ThermometerIcon } from './icons/Thermometer';
import { HumidityIcon } from './icons/Humidity';

const Story: Meta<typeof Badge> = {
  component: Badge,
  title: 'Badge',
  decorators: [
    (Story) => (
      <div className="p-4 flex flex-col gap-3">
        <Story />
      </div>
    ),
    darkModeDecorator,
  ],
};
export default Story;

export const Basic: StoryObj<typeof Badge> = {
  name: '🧰 Basic',
  args: { label: 'Badge', color: 'pink', icon: <ThermometerIcon /> },
};

export const VariantColor: StoryObj<typeof Badge> = {
  name: '🎭 Variant - Color',
  render: () => (
    <div className="flex gap-3">
      <Badge icon={<HumidityIcon />} label="Pink" color="pink" />
      <Badge icon={<HumidityIcon />} label="Blue" color="blue" />
      <Badge icon={<HumidityIcon />} label="Green" color="green" />
    </div>
  ),
};

export const VariantIconOnly: StoryObj<typeof Badge> = {
  name: '🎭 Variant - Icon only',
  render: () => (
    <div className="flex gap-3">
      <Badge icon={<HumidityIcon />} color="pink" />
      <Badge icon={<HumidityIcon />} color="blue" />
      <Badge icon={<HumidityIcon />} color="green" />
    </div>
  ),
};

export const VariantLabelOnly: StoryObj<typeof Badge> = {
  name: '🎭 Variant - Label only',
  render: () => (
    <div className="flex gap-3">
      <Badge label="Pink" color="pink" />
      <Badge label="Blue" color="blue" />
      <Badge label="Green" color="green" />
    </div>
  ),
};
