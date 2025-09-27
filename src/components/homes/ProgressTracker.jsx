const ProgressTracker = ({ tasks }) => {
  const completedTasks = tasks.filter((t) => t.completed).length;
  const totalTasks = tasks.length;
  const percentage =
    totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
        <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <p className="text-gray-600 text-center mb-4">
        {completedTasks} of {totalTasks} tasks completed
      </p>

      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
        <div
          className="h-4 bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className="text-center mt-2 text-sm font-medium text-cyan-700">
        {Math.round(percentage)}%
      </p>
    </div>
  );
};

export default ProgressTracker;
