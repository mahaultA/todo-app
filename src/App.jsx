import "./App.css";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="app-wrapper">
      <h1>Tasks</h1>

      <Form
        addTodo={(todo) => {
          setTodos((prev) => [...prev, todo]);
        }}
      />

      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo
            onDelete={() => {
              setTodos((prev) => {
                return prev.filter((_, y) => i !== y);
              });
            }}
            key={i}
          >
            {todo}
          </Todo>
        ))}
      </div>
    </div>
  );
}

const Form = ({ addTodo }) => {
  const onSubmit = (event) => {
    event.preventDefault();

    const todoText = event.currentTarget.elements.todoToAdd.value;
    addTodo(todoText);
  };

  return (
    <form className="form-wrapper" onSubmit={onSubmit}>
      <input
        id="todoToAdd"
        className="input"
        type="text"
        placeholder="Add a task"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

const Button = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};

const Todo = ({ children, onDelete }) => {
  return (
    <div className="todo-wrapper">
      <Checkbox />
      <label className="todo-text">{children}</label>
      <button onClick={onDelete} className="todo-delete">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1rem"
          height="1rem"
        >
          <path
            fill="currentColor"
            d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"
          />
        </svg>
      </button>
    </div>
  );
};

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const onChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </div>
  );
};
