import React, { useState } from "react";
import "./Main.css";
import { ThoughtsList } from "../ThoughtsList/ThoughtsList";
import { PostNewThought } from "../PostNewThought/PostNewThought";
import { API_URL } from "../../utils/urls";

export const Main = () => {
  const [thoughtList, setThoughtList] = useState([]);
  return (
    <div className="wrapper">
      <PostNewThought
        API_URL={API_URL}
        onSetThoughtList={setThoughtList}
        thoughtList={thoughtList}
      />
      <ThoughtsList
        API_URL={API_URL}
        onSetThoughtList={setThoughtList}
        thoughtList={thoughtList}
      />
    </div>
  );
};
