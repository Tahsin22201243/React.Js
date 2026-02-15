import React, { useState } from "react";
export default function Form() {
  const [name, setName] = useState("");
  function handlechange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <form>
        <input onChange={(e) => handlechange(e)} type="text" value={name} />
      </form>
    </div>
  );
}
