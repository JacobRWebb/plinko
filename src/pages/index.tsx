import { NextPage } from "next";
import React, { useEffect } from "react";
import { socket } from "../util/socket";

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
  useEffect(() => {
    socket.emit("room-check", { room: "plinko" }, (res: any) => {
      console.log(res);
    });
  }, []);

  const testSocketCache = () => {
    socket.emit("test-cache", (res: any) => {
      console.log(res);
    });
  };

  return (
    <div className="flex flex-1 flex-col items-center bg-gray-200">
      <h1>Test</h1>
      <div className="rounded bg-white px-10 py-2">
        <button
          className="h-fit w-fit rounded bg-blue-700 px-2 py-1 text-white"
          onClick={() => testSocketCache()}
        >
          Test Socket Cache
        </button>
      </div>
    </div>
  );
};

export default Index;
