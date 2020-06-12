import * as React from "react";
import { Component } from "react";
import { ITile } from "../Compnents/Game/Board/Row/Tile/Tile";
import { initialTiles, allTiles } from "./BoardData";
import { IPlayer } from "../Compnents/Game/PlayersBar/PlayerTab/PlayerTab";
import { piecesData } from "../Compnents/Game/PlayersBar/PlayerTab/PiecesData";

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
const getRandomProp = () => allTiles[Math.floor(Math.random() * 40)];
const randomProps = () => [...Array()].map((_) => getRandomProp());
const initalPlayers: IPlayer[] = [
   {
      name: "Maheer",
      position: 12,
      props: allTiles,
      id: 0,
      piece: piecesData[0],
      money: 1000,
      haveJailFreeCard: false,
   },
   {
      name: "Maheer",
      position: 12,
      props: [],
      id: 1,
      piece: piecesData[1],
      money: 1000,
      haveJailFreeCard: false,
   },
];
export const initalGameState: IGameState = {
   tiles: allTiles,
   players: initalPlayers,
   turnsPlayed: 0,
   gameSettings: initialGameSettings,
};

const initalGameContext: IGameContext = [initalGameState, () => {}];
type ActionType = { name: string; data: any };
export type IGameContext = [IGameState, React.Dispatch<ActionType>];
export const GameReducer = (state: IGameState, action: ActionType) => state;

export const GameContext = React.createContext(initalGameContext);
