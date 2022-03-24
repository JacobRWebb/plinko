import { NextPage } from "next";
import React from "react";

export interface IPlayer {
  id: string;
  name: string;
  socketId: string;
}

export interface IRoom {
  id: string;
  name: string;
  players: IPlayer[];
}

const Index: NextPage = () => {
  return <div className="flex-1"></div>;
};

export default Index;
