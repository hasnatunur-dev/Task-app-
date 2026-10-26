import { useState } from "react";
import './App.css'
import AddTask from "./assets/components/AddTask";
import TaskList from "./assets/components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="min-w-screen min-h-screen bg-pink-50">
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-200 rounded-full mb-6 shadow-md">
            <span className="text-4xl text-pink-700">✅</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-800 mb-3">
            Task Manager
          </h1>
          <p className="text-pink-600 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Stay organized and boost your productivity with ease ✨
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-2xl mx-auto">
          <div className="bg-pink-100 rounded-2xl p-8 md:p-10 shadow-lg border border-pink-200">
            <AddTask onAddTask={addTask} />

            {/* Filter Buttons */}
            <div className="flex gap-2 mb-6 mt-6">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  filter === 'all'
                    ? 'bg-pink-600 text-white shadow-md'
                    : 'bg-pink-200 text-pink-800 hover:bg-pink-300'
                }`}
              >
                All ({tasks.length})
              </button>
              <button
                onClick={() => setFilter('incomplete')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  filter === 'incomplete'
                    ? 'bg-pink-500 text-white shadow-md'
                    : 'bg-pink-200 text-pink-800 hover:bg-pink-300'
                }`}
              >
                Pending ({tasks.filter(t => !t.completed).length})
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  filter === 'completed'
                    ? 'bg-pink-700 text-#cc8f8f shadow-md'
                    : 'bg-pink-200 text-pink-800 hover:bg-pink-300'
                }`}
              >
                Completed ({tasks.filter(t => t.completed).length})
              </button>
            </div>

            <TaskList
              tasks={filteredTasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
              onUpdate={updateTask}
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center mt-12 text-pink-600 text-sm">
          <p>🚀 Built with React & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
