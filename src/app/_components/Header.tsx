import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-700 text-white">
      <h1 className="text-xl font-bold">
        Tab[<span className="text-green-300">i</span>]ca
      </h1>
      <div>
        <Link href="/signin">
          <Button >
            Sign In
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;