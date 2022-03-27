import { FunctionComponent } from "react";

const SocketStatus: FunctionComponent = () => {
  return (
    <span className="relative flex h-2 w-2 items-center justify-center">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600"></span>
    </span>
  );
};
