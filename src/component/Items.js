import useFetch from "../hook/useFetch.js";
import Todo from "./Todo.js";

export default function Items({ status }) {
  const data = useFetch(`${process.env.REACT_APP_BACKEND_API_URI}/items`)

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
        if ((status === todo.status) | (status === "all")) {
          return <Todo key={todo.id} todo={todo} />;
        } else {
          return null;
        }
      })}
    </table>
  );
}
