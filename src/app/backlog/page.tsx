import React from 'react';
import { Button } from '../_components/ui/button';
import { Card, CardHeader,CardContent } from '../_components/ui/card';

// Sample task data
const tasks = [
  { id: 1, title: 'Task 1', description: 'Description for Task 1' },
  { id: 2, title: 'Task 2', description: 'Description for Task 2' },
  { id: 3, title: 'Task 3', description: 'Description for Task 3' },
];

const Backlog: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-white">
      <CardHeader className="text-2xl font-bold mb-4">Backlog</CardHeader>
      <div className="space-y-4">
        {tasks.map(task => (
          <Card key={task.id} className="bg-gray-800 p-4 rounded shadow">
            <CardContent className="font-semibold">{task.title}</CardContent>
            <p>{task.description}</p>
            <Button className="mt-2">View Task</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Backlog;