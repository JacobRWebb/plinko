import { NextPage } from "next";
import React, { useEffect } from "react";
import { socket } from "../util/socket";

const Index: NextPage = () => {
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="rounded bg-white px-10 py-2"></div>
    </div>
  );
};

export default Index;
