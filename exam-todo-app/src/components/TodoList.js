import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = ["Study React", "Math Revision"];

  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo} />
      ))}
    </div>
  );
}