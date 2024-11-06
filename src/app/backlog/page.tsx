import React from 'react';
import { Button } from '../_components/ui/button';
import { Card, CardHeader, CardContent } from '../_components/ui/card';

// Sample task data
const tasks = [
  { id: 1, title: 'Task 1', description: 'Description for Task 1' },
  { id: 2, title: 'Task 2', description: 'Description for Task 2' },
  { id: 3, title: 'Task 3', description: 'Description for Task 3' },
];

const Backlog: React.FC = () => {
  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <Card className="bg-gray-800 p-4 rounded shadow">
        <CardHeader className="text-2xl font-bold text-white mb-4 ">Backlog</CardHeader>
        <div className="space-y-4">
          {tasks.map(task => (
            <Card key={task.id} className="bg-gray-700 text-white p-4 rounded shadow">
              <CardContent className="font-semibold text-lg">{task.title}</CardContent>
              <p className="text-gray-300">{task.description}</p>
              <Button variant="default" className="mt-2">View Task</Button>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Backlog;