import type { Meta, StoryObj } from '@storybook/react';
import { NxWelcome } from './nx-welcome';
import { darkModeDecorator } from '../../.storybook/dark-mode-decorator';

const Story: Meta<typeof NxWelcome> = {
  component: NxWelcome,
  title: 'NxWelcome',
};
export default Story;

export const Primary: StoryObj<typeof NxWelcome> = {
  args: {},
  decorators: [darkModeDecorator],
};
