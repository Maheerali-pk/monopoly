import { IGameState } from "../GameContext";

export type EndTurnAction = { "end-turn": "" };

export function endTurn(state: IGameState): IGameState {
   const { currentTurn } = state;
   let newTurn: number;
   if (currentTurn === state.players.length - 1) {
      newTurn = 0;
   } else {
      newTurn = currentTurn + 1;
   }
   return { ...state, currentTurn: newTurn, canRollDice: true };
}
