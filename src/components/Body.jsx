import React, { useEffect, useState } from "react";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import styles from "./Body.module.css";

export default function Body({ filtering }) {
  var savedData = JSON.parse(localStorage.getItem("todoList"));

  const [todo, setTodo] = useState([]);

  console.log(todo);
  useEffect(() => {
    setTodo(savedData); //props.datas = window.sessionStorage.getItem("data")
  }, []);

  const addTodo = (newTodo) => {
    // 처음에 빈값 처리를 위해
    todo === null ? setTodo([newTodo]) : setTodo([...todo, newTodo]);
    //setTodo([...todo, newTodo]);

    // Related localStorage
    let todoValuse = JSON.stringify([...todo, newTodo]);
    localStorage.setItem("todoList", todoValuse);
  };

  const completeTodo = (compleTodo) => {
    // setTodo(() =>
    //   todo.map((todos) => {
    //     if (todos.id === idx) {
    //       return { ...todos, status: "completed" };
    //     }
    //     return todos;
    //   })
    // );

    setTodo(
      todo.map((todos) => (todos.id === compleTodo.id ? compleTodo : todos))
    );

    // Related localStorage
    let todoValuse = JSON.stringify(
      todo.map((todos) => (todos.id === compleTodo.id ? compleTodo : todos))
    );
    localStorage.setItem("todoList", todoValuse);
  };

  const delTodo = (idx) => {
    setTodo(() => todo.filter((m) => m.id !== idx));

    // Related localStorage
    let todoValuse = JSON.stringify(todo.filter((m) => m.id !== idx));
    console.log(todoValuse);
    localStorage.setItem("todoList", todoValuse);
  };

  const filteredTodoList = filteringFunc(todo, filtering);

  return (
    <div>
      <ul className={styles.todoList}>
        {filteredTodoList &&
          filteredTodoList.map((i) => {
            return (
              <TodoList
                key={i.id}
                todo={i}
                onComplete={completeTodo}
                onDelete={delTodo}
              />
            );
          })}
      </ul>
      <TodoInsert onAdd={addTodo} todo={todo} />
    </div>
  );
}
const filteringFunc = (todo, filtering) => {
  if (filtering === "all") {
    return todo;
  }

  return todo && todo.filter((m) => m.status === filtering);
};
