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

export type TicTacToeTileProps = React.Attributes & {
  children?: React.JSX.Element;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export type TicTacToeGameBoardProps = {
  tiles: string[];
  onTileClick: (index: number) => void;
};
