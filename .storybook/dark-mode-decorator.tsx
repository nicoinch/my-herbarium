import React from 'react';
import { Decorator, StoryFn } from '@storybook/react';

export const darkModeDecorator: Decorator = (Story: StoryFn) => {
  return (
    <div className="flex">
      <div className="w-1/2 bg-light">
        <Story />
      </div>
      <div className="w-1/2 dark bg-dark">
        <Story />
      </div>
    </div>
  );
};
