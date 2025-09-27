const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updatedTask, index);
  };

  return (
    <ul className="space-y-3 mt-6">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex items-center justify-between bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition"
        >
          <div className="flex flex-col">
            <span
              className={`font-semibold text-lg ${
                task.completed ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {task.text}
            </span>
            <small className="text-sm text-gray-500">
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  task.priority === "high"
                    ? "bg-red-100 text-red-700"
                    : task.priority === "medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-cyan-700"
                }`}
              >
                {task.priority}
              </span>{" "}
              |{" "}
              <span className="px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-700 text-xs font-medium">
                {task.category}
              </span>
            </small>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => toggleComplete(index)}
              className={`px-4 py-1 rounded-lg text-sm font-medium transition cursor-pointer ${
                task.completed
                  ? "bg-yellow-500 text-white hover:bg-yellow-600"
                  : "bg-cyan-600 text-white hover:bg-cyan-900"
              }`}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button
              onClick={() => deleteTask(index)}
              className="px-4 py-1 rounded-lg text-sm font-medium bg-red-600 cursor-pointer text-white hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
