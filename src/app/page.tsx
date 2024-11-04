import React from "react";
import KanbanBoard from "./_components/KanbanBoard";
import RootLayout from "./layout";

const Kanban: React.FC = (props) => {
  return (

      <div className="flex flex-col h-screen bg-gray-900">
        <div className="flex flex-grow">
          <KanbanBoard />
        </div>
      </div>
   
  );
};

export default Kanban;
