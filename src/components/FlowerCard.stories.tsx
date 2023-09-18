import type { Meta, StoryObj } from '@storybook/react';
import { FlowerCard } from './FlowerCard';
import { darkModeDecorator } from '../../.storybook/dark-mode-decorator';

const Story: Meta<typeof FlowerCard> = {
  component: FlowerCard,
  title: 'Components/🧬 FlowerCard',
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

export const Basic: StoryObj<typeof FlowerCard> = {
  name: '🧰 Basic',
  args: {
    color: 'pink',
    title: 'Gerbera',
    temperature: 12.3,
    humidity: 10.3,
    description:
      'Gerbera is a genus of plants in the Asteraceae (Compositae) family. Gerbera species are tufted, caulescent, perennial herbs, often with woolly crown, up to 80 cm high.',
    backgroundUrl: './img/gerbera.png',
  },
};

export const VariantColor: StoryObj<typeof FlowerCard> = {
  name: '🎭 Variant - Color',
  render: () => (
    <div className="flex flex-col gap-3">
      <FlowerCard
        color="pink"
        title="Tulip"
        temperature={12.3}
        humidity={10.3}
        description="Tulips (Tulipa) are a genus of spring-blooming perennial herbaceous bulbiferous geophytes. The flowers are usually large, showy and brightly colored, generally red, pink, yellow, or white."
        backgroundUrl="./img/tulip.png"
        lightValue={23}
        waterValue={39}
      />
      <FlowerCard
        color="blue"
        title="Gerbera"
        temperature={12.3}
        humidity={10.3}
        description="Gerbera is a genus of plants in the Asteraceae (Compositae) family. Gerbera species are tufted, caulescent, perennial herbs, often with woolly crown, up to 80 cm high."
        backgroundUrl="./img/gerbera.png"
        lightValue={63}
        waterValue={79}
      />
      <FlowerCard
        color="green"
        title="Zinnia"
        temperature={12.3}
        humidity={10.3}
        description="Zinnias are annuals which flower officially in summer, but with the number of cultivars available you're covered for spring into autumn."
        backgroundUrl="./img/zinnia.png"
        lightValue={16}
        waterValue={87}
      />
    </div>
  ),
};

export const StateOpen: StoryObj<typeof FlowerCard> = {
  name: '🔁 State - Open',
  render: () => (
    <div className="flex flex-col gap-3">
      <FlowerCard
        color="pink"
        title="Tulip"
        temperature={12.3}
        humidity={10.3}
        description="Tulips (Tulipa) are a genus of spring-blooming perennial herbaceous bulbiferous geophytes. The flowers are usually large, showy and brightly colored, generally red, pink, yellow, or white."
        backgroundUrl="./img/tulip.png"
        lightValue={23}
        waterValue={39}
      />
      <FlowerCard
        color="pink"
        title="Tulip"
        temperature={12.3}
        humidity={10.3}
        backgroundUrl="./img/tulip.png"
        lightValue={23}
        waterValue={39}
        open
      />
      <FlowerCard
        color="pink"
        title="Tulip"
        temperature={12.3}
        humidity={10.3}
        description="Tulips (Tulipa) are a genus of spring-blooming perennial herbaceous bulbiferous geophytes. The flowers are usually large, showy and brightly colored, generally red, pink, yellow, or white."
        backgroundUrl="./img/tulip.png"
        lightValue={23}
        waterValue={39}
        open
      />
    </div>
  ),
};
