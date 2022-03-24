import { io } from "socket.io-client";

export let socket = io("ws://localhost:3000", {
  upgrade: true,
  rememberUpgrade: true,
  withCredentials: true,
  multiplex: true,
  protocols: ["websocket"],
  transports: ["websocket"],
});
