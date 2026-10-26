import TaskItem from './TaskItem'

function TaskList({ tasks, onToggle, onDelete, onUpdate }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 bg-pink-50 rounded-xl border border-pink-200 shadow-inner">
        <div className="text-6xl mb-4">🌸</div>
        <p className="text-pink-500 text-lg font-medium">
          No tasks yet. Add something cute above!
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  )
}

export default TaskList
 