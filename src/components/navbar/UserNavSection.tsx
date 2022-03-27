import { FunctionComponent, useContext } from "react";
import { globalContext } from "../../globalContext";

const UserNavSection: FunctionComponent = () => {
  const context = useContext(globalContext);

  return (
    <div className="flex cursor-pointer select-none flex-row items-center justify-between space-x-2 rounded-sm bg-gray-200 px-2 py-1 shadow-sm shadow-gray-400 hover:shadow-md hover:shadow-gray-400">
      <h1 className="text-lg font-medium text-gray-800">Username</h1>
      {context.socketConnected ? (
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600"></span>
        </span>
      ) : (
        <span className="relative flex h-3 w-3 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600"></span>
        </span>
      )}
    </div>
  );
};

export default UserNavSection;
