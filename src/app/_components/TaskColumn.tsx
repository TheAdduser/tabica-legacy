import React from "react";
import Task from "./Task";

interface TaskColumnProps {
  title: string;
  tasks: string[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks}) => {
  return (
    <div className="bg-gray-800 w-full p-4 rounded whadow">
      <h3 className="font-bold b-2 text-[#28E586]">{title}</h3>
      {tasks.map((task,index) => (
        <Task key={index} title={task} />
      ))}
      <button className="mt-4 bg-[#28E586] text-gray-900 w-full py-2 rounded"> Add Task </button>
    </div>
  );
};

export default TaskColumn;