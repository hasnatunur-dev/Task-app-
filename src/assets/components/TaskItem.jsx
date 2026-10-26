import { useState } from "react";

function TaskItem({ task, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleSave = () => {
    if (editedText.trim() && editedText.trim() !== task.text) {
      onUpdate(task.id, editedText.trim());
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedText(task.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSave(); // Enter will save instead of cancel
    } else if (e.key === "Escape") {
      handleCancel(); // Escape can cancel
    }
  };

  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md border border-pink-200 hover:shadow-lg transition-shadow">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="w-5 h-5 text-pink-500 bg-pink-50 border-pink-300 rounded focus:ring-pink-400 focus:ring-2"
      />

      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1 px-2 py-1 text-black border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
          autoFocus
        />
      ) : (
        <span
          className={`flex-1 text-gray-800 cursor-pointer hover:text-pink-600 ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
          onClick={() => setIsEditing(true)}
        >
          {task.text}
        </span>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="px-3 py-1 text-sm text-pink-600 hover:text-white hover:bg-pink-500 rounded-md transition-colors"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-3 py-1 text-sm text-gray-600 hover:text-white hover:bg-gray-400 rounded-md transition-colors"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 text-sm text-pink-500 hover:text-#ffb7b7 hover:bg-pink-400 rounded-md transition-colors"
            >
              Update
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="px-3 py-1 text-sm text-rose-500 hover:text-#ffc6c6 hover:bg-rose-600 rounded-md transition-colors"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskItem;
