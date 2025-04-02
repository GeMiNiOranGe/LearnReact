import React from 'react';

import { TicTacToeGameBoard } from '@/components';
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

  return (
    <div className="container">
      {winner && <span>Winner is {winner}</span>}

      <TicTacToeGameBoard tiles={tiles} onTileClick={onTileClick} />

      <button type="button" onClick={onResetButtonClick}>
        Reset game
      </button>
    </div>
  );
}

export default React.memo(TicTacToePage);
