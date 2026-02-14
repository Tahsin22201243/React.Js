import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(56);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counter Component: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
