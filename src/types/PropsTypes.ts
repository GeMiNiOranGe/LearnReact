import React from 'react';

export type YoutubeCardProps = React.Attributes & {
  videoId: string;
  title: string;
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
};

export type TicTacToeTileProps = React.Attributes & {
  children?: React.JSX.Element;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export type IconProps = React.SVGProps<SVGSVGElement> & {
  className?: string;
  size?: string | number;
  color?: string;
};
