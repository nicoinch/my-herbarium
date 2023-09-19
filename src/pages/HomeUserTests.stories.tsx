import type { Meta, StoryObj } from '@storybook/react';
import { Home, HomeProps } from './Home';

import React from 'react';

const lightDecorator = (Story: React.ComponentType) => (
  <div className="flex flex-col mx-auto max-w-md">
    <Story />
  </div>
);

const darkDecorator = (Story: React.ComponentType) => (
  <div className="dark bg-dark">
    <div className="flex flex-col mx-auto max-w-md">
      <Story />
    </div>
  </div>
);

const argsFactory = ({
  withDescription = false,
  title = 'My Herbarium',
}: {
  withDescription?: boolean;
  title?: string;
}): HomeProps => ({
  title,
  flowers: [
    {
      id: 'fec8f7235bf8769c101b2eaa014edbeb2d540a02',
      name: 'Tulip',
      color: 'pink',
      temperature: 25.32,
      humidity: 33,
      lightValue: 12,
      waterValue: 15,
      description: withDescription
        ? 'Tulips (Tulipa) are a genus of spring-blooming perennial herbaceous bulbiferous geophytes. The flowers are usually large, showy and brightly colored, generally red, pink, yellow, or white.'
        : undefined,
    },
    {
      id: '9ad170f59c13b9cc9f354a4f6fc7ded3df6409e9',
      name: 'Gerbera',
      color: 'green',
      temperature: 23.6666667,
      humidity: 32.5,
      lightValue: 12,
      waterValue: 15,
      description: withDescription
        ? 'Gerbera is a genus of plants in the Asteraceae (Compositae) family. Gerbera species are tufted, caulescent, perennial herbs, often with woolly crown, up to 80 cm high.'
        : undefined,
    },
    {
      id: 'c0458e3064a7da61b9e97ba0c7c2fbb19cb9984b',
      name: 'Orchid',
      color: 'blue',
      temperature: 31.1,
      humidity: 83,
      lightValue: 12,
      waterValue: 15,
      description: withDescription
        ? 'Orchids is a genus of plants, that are easily distinguished from other plants, as they share some very evident derived characteristics or synapomorphies.'
        : undefined,
    },
    {
      id: 'a00a9516d5990b2a3bc0d650adfa6a2661dd10fe123xc',
      name: 'Chrysanthemum',
      color: 'pink',
      temperature: 22.32,
      humidity: 45.11,
      lightValue: 12,
      waterValue: 15,
      description: withDescription
        ? 'Chrysanthemums are flowering plants of the genus Chrysanthemum in the family Asteraceae. They are native to East Asia and northeastern Europe and the center of diversity is in China.'
        : undefined,
    },
    {
      id: 'd793dc12cb58062cc2a64d438d541dc8ad4daa95',
      name: 'Zinnia',
      color: 'green',
      temperature: 26,
      humidity: 39.5,
      lightValue: 12,
      waterValue: 15,
      description: withDescription
        ? "Zinnias are annuals which flower officially in summer, but with the number of cultivars available you're covered for spring into autumn."
        : undefined,
    },
    {
      id: 'duf69eda0kcvuz8dz8a64d438d541dc8ad4daa95',
      name: 'Red Viburnum',
      color: 'yellow',
      temperature: 23,
      humidity: 43.9,
      lightValue: 12,
      waterValue: 15,
      description: withDescription
        ? 'Red Viburnum (Viburnum dentatum) is a member of the Adoxaceae family. This deciduous shrub is found in natural habitats in Eurasia, and some regions in North Africa.'
        : undefined,
    },
  ],
});

const Story: Meta<typeof Home> = {
  component: Home,
  title: 'User Tests/🚸 Home',
  parameters: {
    layout: 'fullscreen',
  },
};

export default Story;

export const MyLightWithDescription: StoryObj<typeof Home> = {
  name: '🧑‍🔬 My Herbarium light with description',
  args: argsFactory({ withDescription: true }),
  decorators: [lightDecorator],
};

export const MyDarkWithDescription: StoryObj<typeof Home> = {
  name: '🧑‍🔬 My Herbarium dark with description',
  args: argsFactory({ withDescription: true }),
  decorators: [darkDecorator],
};

export const MyLightWithoutDescription: StoryObj<typeof Home> = {
  name: '🧑‍🔬 My Herbarium light without description',
  args: argsFactory({ withDescription: false }),
  decorators: [lightDecorator],
};

export const MyDarkWithoutDescription: StoryObj<typeof Home> = {
  name: '🧑‍🔬 My Herbarium dark without description',
  args: argsFactory({ withDescription: false }),
  decorators: [darkDecorator],
};

export const YourLightWithDescription: StoryObj<typeof Home> = {
  name: '🧑‍🔬 Your Herbarium light with description',
  args: argsFactory({ withDescription: true, title: 'Your Herbarium' }),
  decorators: [lightDecorator],
};

export const YourDarkWithDescription: StoryObj<typeof Home> = {
  name: '🧑‍🔬 Your Herbarium dark with description',
  args: argsFactory({ withDescription: true, title: 'Your Herbarium' }),
  decorators: [darkDecorator],
};

export const YourLightWithoutDescription: StoryObj<typeof Home> = {
  name: '🧑‍🔬 Your Herbarium light without description',
  args: argsFactory({ withDescription: false, title: 'Your Herbarium' }),
  decorators: [lightDecorator],
};

export const YourDarkWithoutDescription: StoryObj<typeof Home> = {
  name: '🧑‍🔬 Your Herbarium dark without description',
  args: argsFactory({ withDescription: false, title: 'Your Herbarium' }),
  decorators: [darkDecorator],
};
