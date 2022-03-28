import { FunctionComponent, useContext } from "react";
import { globalContext } from "../../globalContext";
import UserNavSection from "./UserNavSection";

const Navbar: FunctionComponent = () => {
  const context = useContext(globalContext);

  return (
    <div className="flex w-full justify-center bg-white shadow-lg">
      <div className="flex w-full max-w-7xl flex-row items-center justify-between py-2 px-2">
        <h1 className="text-3xl font-medium text-blue-800">Plinko</h1>
        <UserNavSection />
      </div>
    </div>
  );
};

export default Navbar;
