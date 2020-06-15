import * as React from "react";
import { Component } from "react";
import { ITile } from "../Compnents/Game/Board/Row/Tile/Tile";
import { initialTiles, allTiles } from "./BoardData";
import { IPlayer } from "../Compnents/Game/PlayersBar/PlayerTab/PlayerTab";
import { piecesData } from "../Compnents/Game/PlayersBar/PlayerTab/PiecesData";
import { AllActions, FunctionsObject, ActionKeys } from "./AllActions";

export interface IGameSettings {
   houses: number;
   hotels: number;
   startingFunds: number;
   freeParkingMoney: number;
   maxTurns: number;
}

export interface IGameState {
   lastRoll: [number, number] | null;
   tiles: ITile[];
   players: IPlayer[];
   turnsPlayed: number;
   gameSettings: IGameSettings;
   currentTurn: number;
   canRollDice: boolean;
   propCardShowing?: number;
}

const initialGameSettings: IGameSettings = {
   houses: 32,
   hotels: 12,
   startingFunds: 500,
   freeParkingMoney: 50,
   maxTurns: 35,
};
const getRandomProp = () => allTiles[Math.floor(Math.random() * 40)];
const randomProps = () => [...Array()].map((_) => getRandomProp());
const initalPlayers: IPlayer[] = [
   {
      name: "Maheer",
      position: 0,
      props: allTiles,
      id: 0,
      piece: piecesData[0],
      money: 1000,
      haveJailFreeCard: false,
   },
   {
      name: "Maheer",
      position: 0,
      props: [],
      id: 1,
      piece: piecesData[1],
      money: 1000,
      haveJailFreeCard: false,
   },
   {
      name: "Maheer",
      position: 0,
      props: [],
      id: 2,
      piece: piecesData[2],
      money: 1000,
      haveJailFreeCard: false,
   },
];
export const initalGameState: IGameState = {
   tiles: allTiles,
   players: initalPlayers,
   turnsPlayed: 0,
   gameSettings: initialGameSettings,
   currentTurn: 0,
   canRollDice: true,
   lastRoll: null,
};

const initalGameContext: IGameContext = [initalGameState, () => {}];
export type IGameContext = [IGameState, React.Dispatch<Partial<AllActions>>];
export const GameReducer = (state: IGameState, action: Partial<AllActions>) => {
   let tempState: IGameState = JSON.parse(JSON.stringify(state));
   console.log("reducer called", action);
   for (let key in action) {
      key = key as ActionKeys;
      const func = FunctionsObject[key as ActionKeys];
      tempState = func(state, action[key as ActionKeys]);
   }
   return tempState;
};

export const GameContext = React.createContext(initalGameContext);
