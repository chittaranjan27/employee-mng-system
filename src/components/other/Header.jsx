import React from "react";

const Header = ({ username, changeUser }) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-[#1a1a2e] to-[#16213e] p-5 rounded-lg shadow-md">
      <div>
        <h1 className="text-2xl font-light text-white">
          Hello, <br />
          <span className="text-3xl font-semibold text-emerald-400">
            {username || "Admin"} 👋
          </span>
        </h1>
      </div>

      <button
        onClick={logOutUser}
        className="bg-red-600 text-base font-medium text-white px-6 py-2 rounded-md shadow-md hover:bg-red-700 transition"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
