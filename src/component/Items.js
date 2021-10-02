import useFetch from "../hook/useFetch.js";
import Todo from "./Todo.js";

export default function Items({ status }) {
  var endpoint = `${process.env.REACT_APP_BACKEND_API_URI}/items`;
  if (status === "all") {
    endpoint = `${process.env.REACT_APP_BACKEND_API_URI}/items`;
  } else if (status === "todo") {
    endpoint = `${process.env.REACT_APP_BACKEND_API_URI}/items?status=todo`;
  } else {
    endpoint = `${process.env.REACT_APP_BACKEND_API_URI}/items?status=done`;
  }

  const data = useFetch(endpoint);

  Items.defaultProps = {
    status: "all",
  };

  return (
    <table>
      <td></td>
      <td>Task</td>
      <td>Due</td>
      <td></td>
      {data.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </table>
  );
}
