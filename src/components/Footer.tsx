import { FunctionComponent } from "react";
import SocketStatus from "./SocketStatus";

const Footer: FunctionComponent = () => {
  return (
    <div className="flex w-full justify-center bg-white px-2 text-gray-700">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <h1 className="flex-1">&copy; Copyright Xodius 2022</h1>
        <div className=" hidden items-center space-x-3">
          <h1>Server Status</h1>
          <SocketStatus />
        </div>
      </div>
    </div>
  );
};

export default Footer;
