import React from 'react';
import { Circle, Refresh } from 'iconoir-react';

import { Button, RadiantParticle, TicTacToeTile } from '@/components';
import { checkTicTacToeWinner } from '@/utilities';
import { Cross } from '@/assets/icons';
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
    <TicTacToeTile key={index} onClick={() => onTileClick(index)}>
      {item === 'X' ? (
        <Cross className="tile-icon" />
      ) : item === 'O' ? (
        <Circle className="tile-icon" />
      ) : undefined}
    </TicTacToeTile>
  );

  const renderResetIcon = React.useCallback(() => <Refresh />, []);

  return (
    <div className="container tic-tac-toe-page">
      <div className="turn-box center">
        {isXPlayerTurn && (
          <RadiantParticle height="100vh" width="66vh" size={10} speed={20} />
        )}
        <Cross className={`turn-icon ${isXPlayerTurn ? 'playing' : ''}`} />
      </div>

      <div className="display-flex flex-column align-center">
        {winner && <span>Winner is {winner}</span>}

        <div className="game-board">{tiles.map(renderTicTacToeTile)}</div>

        <div className="button-box">
          <Button
            className="button"
            label="Reset 1"
            Icon={renderResetIcon}
            onClick={onResetButtonClick}
          />

          <Button
            className="button"
            label="Reset 2"
            Icon={() => <Refresh />}
            onClick={onResetButtonClick}
          />

          <Button
            className="button"
            label="Reset 3"
            Icon={<Refresh />}
            onClick={onResetButtonClick}
          />

          <Button
            className="button"
            label="Reset 4"
            Icon={Refresh}
            onClick={onResetButtonClick}
          />
        </div>
      </div>

      <div className="turn-box center">
        {!isXPlayerTurn && (
          <RadiantParticle height="100vh" width="66vh" size={10} speed={20} />
        )}
        <Circle className={`turn-icon ${!isXPlayerTurn ? 'playing' : ''}`} />
      </div>
    </div>
  );
}

export default React.memo(TicTacToePage);
