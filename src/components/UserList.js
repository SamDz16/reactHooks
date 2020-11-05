import React from "react";
import { useResources } from "./useResources";

const UserList = () => {
  return (
    <ul>
      {useResources("users").map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
};

export default UserList;
