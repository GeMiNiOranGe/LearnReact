import React from 'react';

import { TicTacToeTile } from '@/components';
import { checkTicTacToeWinner } from '@/utilities';
import '@/styles/global.css';
import '@/styles/TicTacToePage.css';

function TicTacToePage(): React.JSX.Element {
  const [tiles, setTiles] = React.useState<string[]>(Array(9).fill(undefined));
  const [isXPlayerTurn, setIsXPlayerTurn] = React.useState(true);

  const winner = checkTicTacToeWinner(tiles);

  const onTileClick = React.useCallback<(index: number) => void>(
    index => {
      const tilesCopy = [...tiles];
      if (winner || tilesCopy[index]) {
        return;
      }
      tilesCopy[index] = isXPlayerTurn ? 'X' : 'O';
      setTiles(tilesCopy);
      setIsXPlayerTurn(!isXPlayerTurn);
    },
    [tiles, isXPlayerTurn, winner],
  );

  const onResetButtonClick = React.useCallback(() => {
    setTiles(Array(9).fill(undefined));
    setIsXPlayerTurn(true);
  }, []);

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

  return (
    <div className="container center">
      {winner && <span>Winner is {winner}</span>}

      <div className="game-board">{tiles.map(renderTicTacToeTile)}</div>

      <button onClick={onResetButtonClick}>Reset game</button>
    </div>
  );
}

export default React.memo(TicTacToePage);
