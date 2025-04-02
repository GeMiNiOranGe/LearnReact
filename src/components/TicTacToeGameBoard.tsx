import React from 'react';

import { TicTacToeGameBoardProps } from '@/types/PropsTypes';
import TicTacToeTile from './TicTacToeTile';
import '@/styles/TicTacToeGameBoard.css';

function TicTacToeGameBoard({
  tiles,
  onTileClick,
}: TicTacToeGameBoardProps): React.JSX.Element {
  const renderTicTacToeTile = (
    item: string,
    index: number,
  ): React.JSX.Element => (
    <TicTacToeTile
      key={index}
      value={item}
      onClick={() => onTileClick(index)}
    />
  );

  return <div className="game-board">{tiles.map(renderTicTacToeTile)}</div>;
}

export default React.memo(TicTacToeGameBoard);
