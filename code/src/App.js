import React, { useEffect, useState } from "react";
import { API_URL, LIKES_URL } from "utils/urls";
import moment from "moment";
import List from "components/List";

export const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  const handleLikesIncrease = (listId) => {
    const options = {
      method: "POST",
    };

    fetch(LIKES_URL(listId), options)
      .then((res) => res.json())
      .then((data) => {
        const updatedList = list.map((item) => {
          if (item._id === data._id) {
            item.hearts += 1;
            return item;
          } else {
            return item;
          }
        });

        setList(updatedList);
      });
  };

  return (
    <>
      <header>
        <h1>Happy thoughts!</h1>
      </header>
      <div className="container">
        <List />
      </div>
      <footer>
        <h1>
          Hedvig Mejstedt
          <span role="img" aria-label="lion emoji">
            🦁
          </span>
        </h1>
      </footer>
    </>
  );
};
