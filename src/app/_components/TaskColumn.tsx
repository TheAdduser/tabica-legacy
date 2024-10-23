import React from "react";
import Task from "./Task";
import { ScrollArea, ScrollBar } from "./ui/scroll-area"


interface TaskColumnProps {
  title: string;
  tasks: string[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks}) => {
  return (
    <div className="bg-gray-800 w-full p-4 m-2 rounded whadow">
      <h3 className="font-bold b-2 text-[#28E586] mb-2">{title}</h3>
      <ScrollArea>
      {tasks.map((task,index) => (
        <Task key={index} title={task} />
      ))}
      <ScrollBar orientation="vertical"/>
      </ScrollArea>
    </div>
  );
};

export default TaskColumn;