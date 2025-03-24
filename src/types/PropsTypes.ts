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
  width: number;
  height: number;
  speed?: number;
  size?: number;
};
