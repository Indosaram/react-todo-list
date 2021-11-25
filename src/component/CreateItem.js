import { useRef, useState } from "react";
import { useNavigate } from "react-router";

export default function CreateItem() {
  const [values, setValues] = useState({
    task: "",
    due: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const history = useNavigate();

  function onSubmit(event) {
    event.preventDefault();

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
        history("/todo");
      }
    });
  }

  const taskRef = useRef(null);
  const dueRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <p>Task</p>
        <input
          type="text"
          name="task"
          ref={taskRef}
          value={values.task}
          onChange={handleChange}
        />
      </div>
      <div className="input_area">
        <p>Due</p>
        <input
          type="text"
          name="due"
          ref={dueRef}
          value={values.due}
          onChange={handleChange}
        />
      </div>
      <button>Create</button>
    </form>
  );
}
