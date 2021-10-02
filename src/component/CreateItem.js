import { useRef, useState } from "react";
import { useHistory } from "react-router";
import "./CreateItem.css";

function validate(name, value) {
  let errors = {};

  if (name === "task") {
    if (!value) {
      errors.task = "Task required";
    }
  } else if (name === "due") {
    if (!value) {
      errors.due = "Due required";
    } else if (value < 8) {
      errors.due = "Invalid: date should be format of YYYYMMDD";
    }
  }
  return errors;
}

export default function CreateItem() {
  const [values, setValues] = useState({
    task: "",
    due: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setErrors(validate(name, value));
    setValues({
      ...values,
      [name]: value,
    });
  };
  const history = useHistory();

  function onSubmit(event) {
    event.preventDefault();

    if (
      Object.keys(errors).length > 0 ||
      Object.values(values).some((x) => x === "")
    ) {
      alert("Invalud inputs");
      return;
    }

    fetch(`${process.env.REACT_APP_BACKEND_API_URI}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: taskRef.current.value,
        due: dueRef.current.value,
        status: "todo",
      }),
    }).then((res) => {
      if (res.ok) {
        alert("Created new item!");
        history.push("/todo");
      }
    });
  }

  const taskRef = useRef(null);
  const dueRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Task</label>
        <input
          type="text"
          name="task"
          ref={taskRef}
          value={values.task}
          onChange={handleChange}
        />
        {errors.task && <p>{errors.task}</p>}
      </div>
      <div className="input_area">
        <label>Due</label>
        <input
          type="text"
          name="due"
          ref={dueRef}
          value={values.due}
          onChange={handleChange}
        />
        {errors.due && <p>{errors.due}</p>}
      </div>
      <button>Create</button>
    </form>
  );
}
