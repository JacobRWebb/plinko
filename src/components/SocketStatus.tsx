import { FunctionComponent, useContext } from "react";
import { globalContext } from "../globalContext";
import { clsxm } from "../util/helpers";

const SocketStatus: FunctionComponent = () => {
  const context = useContext(globalContext);

  return (
    <span className="relative flex h-2 w-2 items-center justify-center">
      <span
        className={clsxm(
          "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
          context.socketConnected ? "bg-green-500" : "bg-red-500"
        )}
      ></span>
      <span
        className={clsxm(
          "relative inline-flex h-2 w-2 rounded-full",
          context.socketConnected ? "bg-green-500" : "bg-red-500"
        )}
      ></span>
    </span>
  );
};

export default SocketStatus;
