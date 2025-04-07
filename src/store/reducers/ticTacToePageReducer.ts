import { TicTacToePageAction } from '@/types/Action';
import { TicTacToePageActionType } from '@/types/Enums';
import { TicTacToePageState } from '@/types/StateTypes';

export default function ticTacToePageReducer(
  state: TicTacToePageState,
  action: TicTacToePageAction,
): TicTacToePageState {
  switch (action.type) {
    case TicTacToePageActionType.OnTileClick: {
      if (action.payload.winner || state.tiles[action.payload.index]) {
        return state;
      }

      const tiles = [...state.tiles];
      tiles[action.payload.index] = state.isXPlayerTurn ? 'X' : 'O';

      return { ...state, tiles, isXPlayerTurn: !state.isXPlayerTurn };
    }
    case TicTacToePageActionType.OnResetButtonClick: {
      return {
        tiles: Array(9).fill(undefined),
        isXPlayerTurn: true,
      };
    }
    default: {
      return state;
    }
  }
}
