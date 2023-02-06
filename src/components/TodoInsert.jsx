import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Body.module.css";
export default function TodoInsert({ onAdd }) {
  const [form, setFrom] = useState("");

  const handleChange = (e) => {
    setFrom(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.trim().length === 0) {
      //공백입력 x
      return;
    } else {
      onAdd({
        id: uuidv4(),
        content: form.trim(),
        status: "notDone",
      });
      setFrom("");
    }
  };

  return (
    <div className={styles.todoForm}>
      <form onClick={handleSubmit}>
        <input
          type="text"
          id="content"
          name="content"
          value={form}
          onChange={handleChange}
          placeholder="할일을 입력해주세요"
        />
        <button>submit</button>
      </form>
    </div>
  );
}
