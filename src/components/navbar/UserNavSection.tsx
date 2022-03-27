import { FunctionComponent, useContext } from "react";
import { globalContext } from "../../globalContext";
import SocketStatus from "../SocketStatus";

const UserNavSection: FunctionComponent = () => {
  const context = useContext(globalContext);

  return (
    <div className="flex cursor-pointer select-none flex-row items-center justify-between space-x-2 rounded-sm bg-gray-100 px-2 py-1 shadow-sm shadow-gray-200 hover:shadow-md hover:shadow-gray-300">
      <h1 className="text-lg font-medium text-gray-800">Jacob Webb</h1>
      <SocketStatus />
    </div>
  );
};

export default UserNavSection;
