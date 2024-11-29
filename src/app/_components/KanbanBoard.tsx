import React from "react";
import TaskColumn from "./TaskColumn";

const KanbanBoard: React.FC = () => {
  const todoTasks = ['Task 1', 'Task 2'];
  const inProgressTasks = ['Task 3'];
  const doneTasks = ['Task 4'];

  return(
    <main className="glex-grow p-4">
      <div className="flex slace-x-4">
        <TaskColumn title="To Do" tasks={todoTasks} />
        <TaskColumn title="In Progress" tasks={inProgressTasks} />
        <TaskColumn title="Done" tasks={doneTasks} />
      </div>
    </main>
  );
};

export default KanbanBoard;