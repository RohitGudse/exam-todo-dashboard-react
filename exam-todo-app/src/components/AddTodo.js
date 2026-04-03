import { useState } from "react";

export default function AddTodo() {
  const [task, setTask] = useState("");

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add Task"
      />
      <button>Add</button>
    </div>
  );
}