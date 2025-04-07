import { ReducerAction, ReducerActionWithoutPayload } from '.';
import { TicTacToePageActionType } from './Enums';

export type TicTacToePageAction =
  | ReducerAction<
      TicTacToePageActionType.OnTileClick,
      {
        index: number;
        winner: string | undefined;
      }
    >
  | ReducerActionWithoutPayload<TicTacToePageActionType.OnResetButtonClick>;
