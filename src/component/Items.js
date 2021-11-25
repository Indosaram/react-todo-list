import { useState, useEffect } from "react";
import Item from "./Item.js";

export default function Items({status}) {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_API_URI}/items${status}`)
      .then((res) => {
        return res.json();
      })
      .then((json_response) => {
        setData(json_response);
      });
  });


  return (
    <table>
      <td></td>
      <td>Task</td>
      <td>Due</td>
      <td></td>
      {data.map((item) => {
        return <Item key={item.id} todo={item} />;
      })}
    </table>
  );
}
