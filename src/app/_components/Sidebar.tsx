import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 h-screen p-4">
      <h2 className="font-bold mb-4 text-[#28E586]">Projects</h2>
      <ul>
        <li className="mb-2"><a href="#" className="text-[#28E586] hover:underline text-xl">Kanban</a></li>
        <li className="mb-2"><a href="#" className="text-[#28E586] hover:underline text-xl">Backlog</a></li>
        <li className="mb-2"><a href="#" className="text-[#28E586] hover:underline text-xl">Project 3</a></li>
      </ul>
      <button className="mt-4 bg-[#28E586] text-gray-900 w-full py-2 rounded">Add project</button>
    </aside>
  );
};

export default Sidebar;