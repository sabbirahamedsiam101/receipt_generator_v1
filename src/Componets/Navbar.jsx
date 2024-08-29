import React, { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
function Navbar() {
  const { user, logOut } = useContext(authContext);
  function habdleLogOut() {
    logOut();
  }
  return (
    <nav className=" fixed top-0 left-0 w-full py-5 border-b-2 border-orange-500 bg-black ">
      {" "}
      <h1 className="text-white text-2xl font-bold">
        {user ? "Already You Are LogedIn" : "Please Login first"}
        <span className="text-lg ml-4 text-orange-400"> Email: {user?.email}</span>
        {user && (
          <button
            className="btn ml-4 bg-orange-300 hover:bg-orange-500 duration-500 text-black "
            onClick={habdleLogOut}
          >
            LogOut
          </button>
        )}
      </h1>
    </nav>
  );
}

export default Navbar;
