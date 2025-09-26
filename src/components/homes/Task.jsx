import React, { useState } from "react";

function Task() {

  const deleteTodo = (id) => {
    setTodos((arr) => arr.filter((t) => t.id !== id));
  };


  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTodo = {
      id: Date.now(),
      title,
      priority,
      dueDate,

      status: "Not Started",

    };

    setTodos([newTodo, ...todos]);
    setTitle("");
    setPriority("Low");
    setDueDate("");


  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center text-sky-700 mb-6">
        Task Manager 
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <form onSubmit={addTodo} className="bg-white p-4 rounded-xl shadow border space-y-3">
          <h2 className="text-lg font-semibold">Add New Task</h2>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title *"
            className="w-full px-3 py-2 border rounded-md"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-cyan-700 cursor-pointer text-white rounded-md hover:bg-cyan-800"
          >
            Add Task
          </button>
        </form>
        <div className="md:col-span-2 space-y-4">
          {todos.length === 0 && <p className="text-gray-500 text-center">No tasks yet </p>}
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="bg-white p-4 rounded-xl shadow border flex justify-between items-start"
            >
              <div>
                <h3 className="font-semibold text-lg">{todo.title}</h3>
                <div className="flex gap-2 mt-2 text-sm text-gray-600">
                  <span className="px-2 py-1 rounded-full text-xs bg-gray-100">
                    {todo.priority}
                  </span>
                  <span>
                    Due:{" "}
                    {todo.dueDate
                      ? new Date(todo.dueDate).toLocaleDateString()
                      : "No due date"}
                  </span>
                  <span>Status: {todo.status}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100">
                  Edit
                </button>
                <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100">
                  Complete
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="px-3 py-1 text-sm bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Task;

