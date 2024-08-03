import React, { useState } from 'react';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Review car offers', status: 'In Progress', createdAt: '2024-03-01' },
    { id: 2, title: 'Update price list', status: 'Completed', createdAt: '2024-02-28' },
    { id: 3, title: 'Contact new clients', status: 'Pending', createdAt: '2024-03-02' },
  ]);

  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editStatus, setEditStatus] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: Date.now(),
        title: newTask,
        status: 'Pending',
        createdAt: new Date().toISOString().split('T')[0]
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const startEditingTask = (task) => {
    setEditingTask(task.id);
    setEditTitle(task.title);
    setEditStatus(task.status);
  };

  const saveTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, title: editTitle, status: editStatus } : task
    ));
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Task Management</h1>

        {/* Create New Task */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Create New Task</h2>
          <div className="flex">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter task title"
            />
            <button
              onClick={addTask}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300"
            >
              Add
            </button>
          </div>
        </div>

        {/* Task List */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Task List</h2>
          <div className="space-y-4">
            {tasks.map(task => (
              <div key={task.id} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                {editingTask === task.id ? (
                  <div className="flex-grow flex flex-col">
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="mb-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      autoFocus
                    />
                    <select
                      value={editStatus}
                      onChange={(e) => setEditStatus(e.target.value)}
                      className="mb-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                    <button
                      onClick={() => saveTask(task.id)}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className="font-medium">{task.title}</h3>
                    <p className="text-sm text-gray-500">Status: {task.status} | Created At: {task.createdAt}</p>
                  </div>
                )}
                <div className="flex space-x-2">
                  <button
                    onClick={() => startEditingTask(task)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
