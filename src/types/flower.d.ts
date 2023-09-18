import type Color from './color';

export type Flower = {
  id: string;
  name: string;
  color: Color;
  temperature: number;
  humidity: number;
  description?: string;
  lightValue?: number;
  waterValue?: number;
};
