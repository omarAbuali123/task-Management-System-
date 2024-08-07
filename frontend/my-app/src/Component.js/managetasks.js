import React, { useState, useEffect } from 'react';
import axios from 'axios';

const inputClasses = "w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary";
const buttonClasses = "w-full bg-black text-white py-2 rounded-lg hover:bg-primary/80 transition duration-300";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await axios.get('http://localhost:3001/tasks');
        setTasks(response.data);
      } catch (err) {
        console.error('Error fetching tasks', err);
      }
    }
    fetchTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = localStorage.getItem('username'); // Ensure username is stored in localStorage
    try {
      await axios.post('http://localhost:3001/tasks', { username, title, description });
      setTitle('');
      setDescription('');
      // Fetch updated tasks list after adding new task
      const response = await axios.get('http://localhost:3001/tasks');
      setTasks(response.data);
    } catch (err) {
      console.error('Error creating task', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-primary text-center mb-6">Add Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-primary">Title</label>
            <input
              id="title"
              type="text"
              className={inputClasses}
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-primary">Description</label>
            <textarea
              id="description"
              className={inputClasses}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit" className={buttonClasses}>Add Task</button>
        </form>
        <h2 className="text-2xl font-bold text-primary text-center mt-6">Tasks</h2>
        <ul className="space-y-2 mt-4">
          {tasks.map(task => (
            <li key={task.id} className="p-4 bg-white rounded-lg shadow-md">
              {task.title}: {task.description} - {task.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tasks;
