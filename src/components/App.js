import React, { useState } from "react";
import RessourceList from "./RessourceList";
import UserList from "./UserList";

const App = () => {
  const [resource, setRessource] = useState("posts");

  return (
    <div className="ui container">
      <UserList />
      <div className="ui field">
        <button
          className="ui button primary"
          onClick={() => setRessource("posts")}
        >
          Posts
        </button>
        <button className="ui button red" onClick={() => setRessource("todos")}>
          Todos
        </button>
      </div>
      <RessourceList resource={resource} />
    </div>
  );
};

export default App;
