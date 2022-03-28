import { NextPage } from "next";
import { useState } from "react";
import InputField from "../components/InputField";

const Login: NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <form className="flex flex-col items-center space-y-7 rounded bg-white px-10 py-5 shadow-lg shadow-gray-400">
        <h1 className="mb-1 text-2xl font-bold text-gray-800">Login Portal</h1>
        <InputField
          id="username"
          placeholder="Username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
          onBlur={(event) => {
            // TODO: Validate username
          }}
        />
        <InputField
          id="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          onBlur={(event) => {
            // TODO: Validate password
          }}
        />
        <button className="w-full rounded-sm bg-blue-600 px-2 py-1 text-white hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
