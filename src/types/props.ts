import React from 'react';
import { PicsumPhoto, YoutubeVideo } from './other';

export type YoutubeCardProps = React.Attributes & {
  item: YoutubeVideo;
};

export type ToggleProps = {
  size?: 'small' | 'medium' | 'large';
  onChange?: (event: boolean) => void;
};

export type RadiantParticleProps = {
  width: string;
  height: string;
  speed?: number;
  size?: number;
  numberOfParticles?: number;
};

export type TicTacToeTileProps = React.Attributes & {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export type IconProps = React.SVGProps<SVGSVGElement> & {
  className?: string;
  size?: string | number;
  color?: string;
};

export type ButtonProps = {
  className?: string;
  label: string;
  Icon?: React.ElementType | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type PicsumPhotoCardProps = {
  item: PicsumPhoto;
};
