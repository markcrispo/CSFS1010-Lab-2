import "./App.css";

import ToDoItem from "./ToDoItem";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todos, setTodos] = useState([
    { title: "get groceries", isChecked: false, uuid: uuidv4() },
    { title: "walk the dog", isChecked: false, uuid: uuidv4() },
  ]);

  console.log("todos:", todos);

  return (
    <div>
      <h4>Task Tracker</h4>

      {todos.map(({ title, isChecked, uuid }, index) => (
        <ToDoItem
          key={uuid}
          title={title}
          isChecked={isChecked}
          setIsChecked={(newIsChecked) => {
            const copyOfTodos = [...todos];
            copyOfTodos[index].isChecked = newIsChecked;
            setTodos(copyOfTodos);
          }}
          setTitle={(newTitle) => {
            const copyOfTodos = [...todos];
            copyOfTodos[index].title = newTitle;
            setTodos(copyOfTodos);
          }}
          handleRemove={() => {
            const copyOfTodos = [...todos];
            copyOfTodos.splice(index, 1);
            setTodos(copyOfTodos);
          }}
        />
      ))}
      <button
        onClick={() => {
          setTodos([...todos, { title: "", isChecked: false, uuid: uuidv4() }]);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          const copyOfTodos = [...todos];
          copyOfTodos.pop();
          setTodos(copyOfTodos);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default App;
