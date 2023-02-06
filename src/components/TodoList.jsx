import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
export default function TodoList({ todo, onComplete, onDelete }) {
  const { status, id, content } = todo;
  const handleChange = (e) => {
    console.log(e.target.checked);
    onComplete({ ...todo, status: e.target.checked ? "completed" : "notDone" });
  };
  const checkBoxID = `checkBox${id}`;

  return (
    <>
      <li key={todo.id}>
        <input
          type="checkBox"
          id={checkBoxID}
          checked={status === "completed"}
          onChange={handleChange}
        />
        <label htmlFor={checkBoxID}> {content}</label>
        <button onClick={() => onDelete(id)}>
          <BsFillTrashFill />
        </button>
      </li>
    </>
  );
}
