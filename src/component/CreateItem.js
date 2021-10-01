import { useRef } from "react";
import { useHistory } from "react-router";

export default function CreateItem() {
    const history = useHistory();

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
            })
        }).then(res => {
            if (res.ok) {
                alert("Created new item!");
                history.push("/todo")
            }
        })
    }
    
    const taskRef = useRef(null);
    const dueRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Task</label>
        <input type="text" ref={taskRef} />
      </div>
      <div className="input_area">
        <label>Due</label>
        <input type="text" ref={dueRef} />
      </div>
      <button>Create</button>
    </form>
  );
}
