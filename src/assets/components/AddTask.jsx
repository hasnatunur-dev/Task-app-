import { useState } from "react";
function AddTask ({onAddTask}){
    const [text,setText] = useState('')

    const handleSubmit =(e) => {
        e.preventDefault() 
        if (text.trim()) {
            onAddTask(text.trim())
            setText('')
        }
    }

   return (
  <form onSubmit={handleSubmit} className="mb-6">
    <div className="flex items-center gap-3 bg-white shadow-md rounded-2xl p-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="💖 Write your task..."
        className="flex-1 px-4 py-2 text-gray-700 bg-transparent border-none rounded-lg focus:outline-none focus:ring-0 placeholder:text-gray-400"
      />
      <button
        type="submit"
        className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-400 to-rose-500 text-#e26e6e font-medium rounded-xl shadow-lg hover:from-pink-500 hover:to-rose-600 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 transition-all"
      >
        🌸 Add
      </button>
    </div>
  </form>
)

}
export default AddTask