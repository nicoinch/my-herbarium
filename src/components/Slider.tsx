import React, { ReactNode } from 'react';
import clsx from 'clsx';
import * as RadixSlider from '@radix-ui/react-slider';
import { Color } from 'src/types/color';

type SliderProps = {
  label: string;
  startIcon: ReactNode;
  endIcon: ReactNode;
  color?: Color;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: Array<number>) => void;
};

// Slider component using RadixUI Slider component as a base
export const Slider: React.FC<SliderProps> = ({
  label,
  startIcon,
  endIcon,
  color = 'blue',
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  onChange,
}) => {
  const classesTrack: Array<string> = [];
  const classesRange: Array<string> = [];
  const classesIcon: Array<string> = [];

  switch (color) {
    case 'pink':
      classesTrack.push('bg-pink-dark', 'dark:bg-light');
      classesRange.push('bg-pink-highlight');
      classesIcon.push(
        'stroke-pink-dark fill-pink-dark',
        'dark:stroke-light dark:fill-light'
      );
      break;
    case 'blue':
      classesTrack.push('bg-blue-dark', 'dark:bg-light');
      classesRange.push('bg-blue-highlight');
      classesIcon.push(
        'stroke-blue-dark fill-blue-dark',
        'dark:stroke-light dark:fill-light'
      );
      break;
    case 'green':
      classesTrack.push('bg-green-dark', 'dark:bg-light');
      classesRange.push('bg-green-highlight');
      classesIcon.push(
        'stroke-green-dark fill-green-dark',
        'dark:stroke-light dark:fill-light'
      );
      break;
  }

  return (
    <div className="flex gap-2 p-1 items-center justify-center">
      <div className={clsx('w-6', classesIcon)}>{startIcon}</div>
      <RadixSlider.Root
        className="w-full h-8 relative user-select-none touch-none flex items-center"
        defaultValue={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={onChange}
      >
        <RadixSlider.Track
          className={clsx('h-[2px] rounded-full relative grow', classesTrack)}
        >
          <RadixSlider.Range
            className={clsx('h-full absolute rounded-full', classesRange)}
          />
        </RadixSlider.Track>
        <RadixSlider.Thumb
          className={clsx(
            'block w-6 h-6 shadow rounded-full z-10 bg-light focus:outline-none'
          )}
          style={{
            boxShadow: '2px 2px 4px 0px rgba(0, 0, 0, 0.15)',
          }}
          aria-label={label}
        />
      </RadixSlider.Root>
      <div className={clsx('w-6', classesIcon)}>{endIcon}</div>
    </div>
  );
};