import type { Meta, StoryObj } from '@storybook/react';
import { Home } from './Home';
import { darkModeDecorator } from '../../.storybook/dark-mode-decorator';

const Story: Meta<typeof Home> = {
  component: Home,
  title: 'Pages/🦠 Home',
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

export const Basic: StoryObj<typeof Home> = {
  name: '🧰 Basic',
  args: {
    title: 'My Herbarium',
    flowers: [
      {
        id: 'fec8f7235bf8769c101b2eaa014edbeb2d540a02',
        name: 'Tulip',
        color: 'pink',
        temperature: 25.32,
        humidity: 33,
        description:
          'Tulips (Tulipa) are a genus of spring-blooming perennial herbaceous bulbiferous geophytes. The flowers are usually large, showy and brightly colored, generally red, pink, yellow, or white.',
        lightValue: 12,
        waterValue: 15,
      },
      {
        id: '9ad170f59c13b9cc9f354a4f6fc7ded3df6409e9',
        name: 'Gerbera',
        color: 'green',
        temperature: 23.6666667,
        humidity: 32.5,
        description:
          'Gerbera is a genus of plants in the Asteraceae (Compositae) family. Gerbera species are tufted, caulescent, perennial herbs, often with woolly crown, up to 80 cm high.',
        lightValue: 12,
        waterValue: 15,
      },
      {
        id: 'c0458e3064a7da61b9e97ba0c7c2fbb19cb9984b',
        name: 'Orchid',
        color: 'blue',
        temperature: 31.1,
        humidity: 83,
        description:
          'Orchids is a genus of plants, that are easily distinguished from other plants, as they share some very evident derived characteristics or synapomorphies.',
        lightValue: 12,
        waterValue: 15,
      },
      {
        id: 'a00a9516d5990b2a3bc0d650adfa6a2661dd10fe123xc',
        name: 'Chrysanthemum',
        color: 'pink',
        temperature: 22.32,
        humidity: 45.11,
        description:
          'Chrysanthemums are flowering plants of the genus Chrysanthemum in the family Asteraceae. They are native to East Asia and northeastern Europe and the center of diversity is in China.',
        lightValue: 12,
        waterValue: 15,
      },
      {
        id: 'd793dc12cb58062cc2a64d438d541dc8ad4daa95',
        name: 'Zinnia',
        color: 'green',
        temperature: 26,
        humidity: 39.5,
        description:
          "Zinnias are annuals which flower officially in summer, but with the number of cultivars available you're covered for spring into autumn.",
        lightValue: 12,
        waterValue: 15,
      },
      {
        id: 'duf69eda0kcvuz8dz8a64d438d541dc8ad4daa95',
        name: 'Red Viburnum',
        color: 'yellow',
        temperature: 23,
        humidity: 43.9,
        description:
          'Red Viburnum (Viburnum dentatum) is a member of the Adoxaceae family. This deciduous shrub is found in natural habitats in Eurasia, and some regions in North Africa.',
        lightValue: 12,
        waterValue: 15,
      },
    ],
  },
};
