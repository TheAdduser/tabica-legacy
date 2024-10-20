import React from "react";
import { Button } from "./ui/button";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 h-screen p-4">
      <h2 className="font-bold mb-4 text-[#28E586]">Projects</h2>
      <ul>
        <li className="mb-2"><Button>Kanban Board</Button></li>
        <li className="mb-2"><Button>Backlog</Button></li>
        <li className="mb-2"><Button>Account</Button></li>
        <li className="mb-2 mt-5"><Button>Add Task</Button></li>
      </ul>
      
    </aside>
  );
};

export default Sidebar;