import { NextPage } from "next";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { socket } from "../util/socket";

const Index: NextPage = () => {
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="w-full flex-1 px-2 py-2"></div>
      <Footer />
    </div>
  );
};

export default Index;
