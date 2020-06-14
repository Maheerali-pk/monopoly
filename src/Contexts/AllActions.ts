import { roll, RollAction } from "./Actions/Roll";
import { EndTurnAction, endTurn } from "./Actions/EndTurn";

export type AllActions = RollAction & EndTurnAction;

export type ActionKeys = keyof AllActions;

export const FunctionsObject: { [k in ActionKeys]: Function } = {
   "end-turn": endTurn,
   roll: roll,
};
