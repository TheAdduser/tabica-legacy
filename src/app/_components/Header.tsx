import React from "react";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-700 text-white">
      <h1 className="text=x1 font-bold"> Tab[i]ca</h1>
      <div>
        <Button>Sign In </Button> 
      </div>
    </header>
  );
};

export default Header;