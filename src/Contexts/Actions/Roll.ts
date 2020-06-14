import { IGameState } from "../GameContext";

export function getRandom(min: number, max: number) {
   return Math.floor(Math.random() * max) + min;
}

export type RollAction = { roll: "" };

export function roll(state: IGameState): IGameState {
   const randomRoll: [number, number] = [getRandom(1, 6), getRandom(1, 6)];
   if (randomRoll[0] !== randomRoll[1]) {
      state.canRollDice = false;
   }

   const totalRoll = randomRoll[0] + randomRoll[1];
   const currentPlayer = state.players[state.currentTurn];
   currentPlayer.position += totalRoll;
   if (currentPlayer.position > 39) {
      currentPlayer.position = currentPlayer.position - 39;
   }
   return { ...state, lastRoll: randomRoll };
}
