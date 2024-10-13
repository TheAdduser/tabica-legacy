import React from "react";

interface TaskProps{
  title: string;
}

const Task: React.FC<TaskProps> = ({title}) => {
  return (
    <div className="bg-gray-700 p-2 rounded shadow mb-2 text-white">
    {title}
    </div>
  );
};

export default Task;