import { useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import ProgressTracker from './ProgressTracker';
import Container from '../global/Container';

const Task = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newTask = [...tasks];
    newTask[index] = updatedTask;
    setTasks(newTask);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <Container>
      <div className="min-h-screen py-10 px-4 bg-gradient-to-br from-cyan-50 via-white to-cyan-100">
        <header className="mb-10 text-black">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-cyan-700 drop-shadow-md">
              Task Manager
            </h1>
            <p className="mt-3 text-lg md:text-xl font-medium text-gray-600">
              Your Friendly Task Organizer 
            </p>
          </div>
        </header>

        <div className="mb-8">
          <TaskForm addTask={addTask} />
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-bold text-cyan-700 mb-4">
              Your Tasks
            </h2>
            <TaskList
              tasks={tasks}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />

            {tasks.length > 0 && (
              <div className="mt-6 flex justify-end">
                <button
                  onClick={clearTasks}
                  className="bg-red-600 hover:bg-red-700 cursor-pointer transition-colors text-white px-5 py-2 rounded-lg font-medium shadow-md"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6">
            <ProgressTracker tasks={tasks} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Task;
