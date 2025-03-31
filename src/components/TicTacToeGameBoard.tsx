import React from 'react';

import { TicTacToeTileProps } from '@/types/PropsTypes';
import TicTacToeTile from './TicTacToeTile';
import '@/styles/TicTacToeGameBoard.css';

function TicTacToeGameBoard(): React.JSX.Element {
  const renderTicTacToeTile = (
    item: TicTacToeTileProps,
    index: number,
  ): React.JSX.Element => <TicTacToeTile key={index} value="TicTacToeTile" />;

  return (
    <div className="game-board">
      {Array(9).fill(undefined).map(renderTicTacToeTile)}
    </div>
  );
}

export default React.memo(TicTacToeGameBoard);
