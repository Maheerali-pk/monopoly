import * as React from "react";
import { Component } from "react";
import { ITile } from "../Compnents/Game/Board/Row/Tile/Tile";
import { initialTiles } from "./BoardData";

interface IPlayer {}
interface IGameSettings {
   houses: number;
   hotels: number;
   startingFunds: number;
   freeParkingMoney: number;
   maxTurns: number;
}

interface IGameState {
   tiles: ITile[];
   players: IPlayer[];
   turnsPlayed: number;
   gameSettings: IGameSettings;
}

const initialGameSettings: IGameSettings = {
   houses: 32,
   hotels: 12,
   startingFunds: 500,
   freeParkingMoney: 50,
   maxTurns: 35,
};
export const initalGameState: IGameState = {
   tiles: initialTiles,
   players: [],
   turnsPlayed: 0,
   gameSettings: initialGameSettings,
};
const initalGameContext: IGameContext = [initalGameState, () => {}];
type ActionType = { name: string; data: any };
export type IGameContext = [IGameState, React.Dispatch<ActionType>];
export const GameReducer = (state: IGameState, action: ActionType) => state;

export const GameContext = React.createContext(initalGameContext);
