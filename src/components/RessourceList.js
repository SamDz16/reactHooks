import React from "react";
import { useResources } from "./useResources";

const RessourceList = ({ resource }) => {
  return (
    <ul>
      {useResources(resource).map((record) => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default RessourceList;
