import { useState } from "react";
import TodoItem from "./TodoItem";
export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    setTodos([...todos, todo]); // Add the current todo to the todos array
    setTodo(""); // Clear the todo input field
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)} // Update the state with the current value of the input field
          value={todo}
          type="text"
        />
        <button>Add</button>
      </form>
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
