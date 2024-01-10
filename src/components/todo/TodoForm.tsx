import React, { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);
  console.log(state);
  const [task, setTask] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };
    dispatch({ type: "addTodo", payload: todo });
    // console.log(todo);
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Todo">Task</label>
        <input
          className="border border-red-500"
          onBlur={(e) => setTask(e.target.value)}
          type="text"
          name="todo"
          id="todo"
        />
        <button className="bg-purple-500" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
