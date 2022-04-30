import { useState, useEffect } from "react";
import Item from "./Item.js";

export default function Items({ status }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_API_URI}/items?status=${status}`)
      .then((res) => {
        return res.json();
      })
      .then((json_response) => {
        setData(json_response);
      });
  }, [status]);

  return (
    <table>
      <thead>
        <tr>
          <td></td>
          <td>Task</td>
          <td>Due</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return <Item key={item.id} todo={item} />;
        })}
      </tbody>
    </table>
  );
}
