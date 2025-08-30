import React from "react";

export default function UserList({ users }) {
  return (
    <>
      <ul>
        {users.map((u, index) => (
          <li key={index}>
            {" "}
            id: {index + 1} {u}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}
