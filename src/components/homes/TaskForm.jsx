import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ text: task, priority, category, completed: false });

    setTask('');
    setPriority("Medium");
    setCategory("General");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-4xl mx-auto p-6 bg-white  rounded-2xl space-y-4"
    >
      <h2 className="text-2xl font-bold text-cyan-700 text-center">
        Add New Task
      </h2>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex w-full md:w-1/2">
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            className="flex-1 border border-cyan-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none px-4 py-2 rounded-l-lg shadow-sm"
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="bg-cyan-600 hover:bg-cyan-700 transition-colors text-white font-semibold px-5 py-2 rounded-r-lg shadow-md">
            Add
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
          <select
            value={priority}
            className="border border-cyan-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none px-3 py-2 rounded-lg shadow-sm"
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Select Priority</option>
            <option value="high"> High</option>
            <option value="medium"> Medium</option>
            <option value="low"> Low</option>
          </select>

          <select
            value={category}
            className="border border-cyan-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none px-3 py-2 rounded-lg shadow-sm"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="General"> General</option>
            <option value="Work"> Work</option>
            <option value="Personal"> Personal</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
