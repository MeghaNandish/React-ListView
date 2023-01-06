import React from "react";

function ListView(props) {
  return (
    <ul>
      {props.data.map((item) => (
        <li key={item.id}>
          <p>ID: {item.id}</p>
          <p>First Name: {item.first_name}</p>
          <p>Last Name: {item.last_name}</p>
          <p>Email: {item.email}</p>
        </li>
      ))}
    </ul>
  );
}

export default ListView;
