import { createContext, FunctionComponent, useEffect, useState } from "react";
import { socket } from "./util/socket";

export interface IGlobalContext {
  socketConnected: boolean;
}

export const globalContext = createContext<IGlobalContext>({
  socketConnected: false,
});

export const GlobalContextProvider: FunctionComponent = ({ children }) => {
  const [socketConnected, setSocketConnected] = useState(false);

  useEffect(() => {
    let watchSocket = setInterval(() => {
      if (socketConnected !== socket.connected) {
        setSocketConnected(socket.connected);
      }
    }, 500);

    return () => {
      clearInterval(watchSocket);
    };
  }, [socket.connected, socket.disconnected]);

  return (
    <globalContext.Provider
      value={{
        socketConnected: socket.connected,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
