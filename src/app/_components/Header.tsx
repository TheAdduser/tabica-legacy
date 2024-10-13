import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text=x1 font-bold"> Tab[i]ca</h1>
      <div>
        <button className="bg-[#28E586] text-gray-900 px-4 py-2 rounded"> Sign In</button> 
      </div>
    </header>
  );
};

export default Header;