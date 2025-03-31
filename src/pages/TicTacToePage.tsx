import React from 'react';

import { TicTacToeGameBoard } from '@/components';
import '@/styles/global.css';
import '@/styles/TicTacToePage.css';

function TicTacToePage(): React.JSX.Element {
  return (
    <div className="container">
      <TicTacToeGameBoard />
    </div>
  );
}

export default React.memo(TicTacToePage);
