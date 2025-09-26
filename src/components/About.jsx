import React from 'react'

const About = () => {
  return (
    <div>
       <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-sky-700 mb-4">
          About Task Manager
        </h1>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Task Manager is a simple web application built with{" "}
          <span className="font-semibold">React</span> and{" "}
          <span className="font-semibold">TailwindCSS</span>. It helps you
          organize your daily activities by adding tasks with priority levels
          and due dates. You can also manage tasks by editing, completing, or
          deleting them.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          This project is mainly built for learning purposes. It demonstrates
          the use of React Hooks (<code>useState</code> and{" "}
          <code>useEffect</code>), React Router for navigation, and TailwindCSS
          for responsive UI design.
        </p>
        <h2 className="text-xl font-semibold text-sky-600 mt-6 mb-2">
          Features
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Add tasks with title, priority, and due date</li>
          <li>View tasks in a clean card layout</li>
          <li>Delete tasks easily</li>
          <li>Future scope: edit and mark tasks as completed</li>
        </ul>

        <h2 className="text-xl font-semibold text-sky-600 mt-6 mb-2">
          Developer Info
        </h2>
        <p className="text-gray-700">
          Developed as a student assignment project. <br />
          Focus: clean code, simple UI, and easy learning.
        </p>
      </div>
    </div>
    </div>
  )
}

export default About