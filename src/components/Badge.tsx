import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { Color } from 'src/types/color';

type BadgeProps = {
  label?: string;
  icon?: ReactNode;
  color?: Color;
} & (
  | {
      label: string;
      icon?: never;
    }
  | {
      label?: never;
      icon: ReactNode;
    }
  | {
      label: string;
      icon: ReactNode;
    }
);

export const Badge: React.FC<BadgeProps> = ({
  label,
  icon,
  color = 'blue',
}) => {
  const classes = [];

  switch (color) {
    case 'pink':
      classes.push(
        'bg-pink-dark-10 text-pink-dark stroke-pink-dark fill-pink-dark',
        'dark:bg-pink-medium dark:text-pink-light dark:stroke-pink-light dark:fill-pink-light'
      );
      break;
    case 'blue':
      classes.push(
        'bg-blue-dark-10 text-blue-dark stroke-blue-dark fill-blue-dark',
        'dark:bg-blue-medium dark:text-blue-light dark:stroke-blue-light dark:fill-blue-light'
      );
      break;
    case 'green':
      classes.push(
        'bg-green-dark-10 text-green-dark stroke-green-dark fill-green-dark',
        'dark:bg-green-medium dark:text-green-light dark:stroke-green-light dark:fill-green-light'
      );
      break;
  }

  return (
    <div
      className={clsx(
        'rounded-lg p-1 flex gap-[2px] w-min',
        label ? 'pr-[10px]' : '',
        label && !icon ? 'pl-[10px]' : '',
        ...classes
      )}
    >
      {icon ? <div className="w-6">{icon}</div> : null}
      <span className="text">{label}</span>
    </div>
  );
};
