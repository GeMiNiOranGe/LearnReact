import React from 'react';

import type { TicTacToeTileProps } from '@/types';
import '@/styles/TicTacToeTile.css';

function TicTacToeTile({
  key,
  children,
  onClick,
}: TicTacToeTileProps): React.JSX.Element {
  return (
    <div key={key} className="tile" onClick={onClick}>
      {children}
    </div>
  );
}

export default React.memo(TicTacToeTile);
