import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="app-wrapper">
      <h1>Tasks</h1>

      <Form />

      <Todo />
    </div>
  );
}

const Form = () => {
  return (
    <form className="form-wrapper">
      <input className="input" type="text" placeholder="Add a task" />
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

const Todo = () => {
  return (
    <div>
      <Checkbox />
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
