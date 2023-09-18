import React from 'react';
import clsx from 'clsx';
import { Color } from 'src/types/color';
import { Badge } from './Badge';
import { ThermometerIcon } from './icons/Thermometer';
import { HumidityIcon } from './icons/Humidity';
import { Slider } from './Slider';
import { DropletIcon } from './icons/Droplet';
import { SunIcon } from './icons/Sun';

type FlowerCardProps = {
  open?: boolean;
  title: string;
  temperature: number;
  humidity: number;
  description?: string;
  color?: Color;
  backgroundUrl?: string;
  lightValue?: number;
  waterValue?: number;
  onLightChange?: (value: Array<number>) => void;
  onWaterChange?: (value: Array<number>) => void;
};

export const FlowerCard: React.FC<FlowerCardProps> = ({
  open = false,
  title,
  temperature,
  description,
  humidity,
  color = 'blue',
  backgroundUrl,
  lightValue,
  waterValue,
  onLightChange,
  onWaterChange,
}) => {
  const [openState, setOpenState] = React.useState(open);
  const classes = [];
  const descriptionClasses = [];

  switch (color) {
    case 'pink':
      classes.push('bg-pink-light text-pink-dark');
      classes.push('dark:bg-pink-dark dark:text-pink-light');
      descriptionClasses.push('bg-pink-dark text-pink-light');
      descriptionClasses.push('dark:bg-pink-light dark:text-pink-dark');
      break;
    case 'blue':
      classes.push('bg-blue-light text-blue-dark');
      classes.push('dark:bg-blue-dark dark:text-blue-light');
      descriptionClasses.push('bg-blue-dark text-blue-light');
      descriptionClasses.push('dark:bg-blue-light dark:text-blue-dark');
      break;
    case 'green':
      classes.push('bg-green-light text-green-dark');
      classes.push('dark:bg-green-dark dark:text-green-light');
      descriptionClasses.push('bg-green-dark text-green-light');
      descriptionClasses.push('dark:bg-green-light dark:text-green-dark');
      break;
  }

  // List flowers background images to force tailwind detect them
  // bg-[url('./img/chrysanthemum.png')]
  // bg-[url('./img/gerbera.png')]
  // bg-[url('./img/orchid.png')]
  // bg-[url('./img/tulip.png')]
  // bg-[url('./img/zinnia.png')]
  return (
    <div className={clsx(`rounded-2xl overflow-hidden`, ...classes)}>
      <div
        className={`flex flex-col gap-3 p-6 py-[29px] bg-[url('${backgroundUrl}')] bg-no-repeat bg-right-bottom bg-contain cursor-pointer`}
        onClick={() => {
          setOpenState(!openState);
        }}
      >
        <div className="text-title-2 font-extrabold">{title}</div>
        <div className="flex gap-1">
          <Badge
            label={temperature.toFixed(1) + '°C'}
            icon={<ThermometerIcon />}
            color={color}
          />
          <Badge
            label={humidity.toFixed(1) + '%'}
            icon={<HumidityIcon />}
            color={color}
          />
        </div>
      </div>
      {openState ? (
        <div>
          {description ? (
            <div className={clsx(descriptionClasses, 'px-6 py-4')}>
              <div className="text-text">{description}</div>
            </div>
          ) : null}
          <div className="flex flex-col gap-2 px-3 py-4 bg-white bg-opacity-20">
            <Slider
              startIcon={<SunIcon crossedOut />}
              endIcon={<SunIcon />}
              label="Light"
              color={color}
              value={lightValue}
              onChange={onLightChange}
            />
            <Slider
              startIcon={<DropletIcon crossedOut />}
              endIcon={<DropletIcon />}
              label="Water"
              color={color}
              value={waterValue}
              onChange={onWaterChange}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};
