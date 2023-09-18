import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    brandTitle: '🪴 My Herbarium',
    brandTarget: '_self',
  }),
});
