import React, { useState } from "react";
import "./Main.css";
import { ThoughtsList } from "../ThoughtsList/ThoughtsList";
import { PostNewThought } from "../PostNewThought/PostNewThought";
import { API_URL } from "../../utils/urls";

export const Main = () => {
  const [thoughtList, setThoughtList] = useState([]);
  const [likedPostValue, setLikedPostValue] = useState(0);

  return (
    <div className="wrapper">
      <PostNewThought
        API_URL={API_URL}
        onSetThoughtList={setThoughtList}
        thoughtList={thoughtList}
        likedPostValue={likedPostValue}
      />
      <ThoughtsList
        API_URL={API_URL}
        onSetThoughtList={setThoughtList}
        thoughtList={thoughtList}
        likedPostValue={likedPostValue}
        onSetLikedPostValue={setLikedPostValue}
      />
    </div>
  );
};
