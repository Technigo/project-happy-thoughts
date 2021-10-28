import React, { useEffect, useState } from "react";
import { API_URL, LIKES_URL } from "./utils/urls";
import ThoughtForm from "./components/ThoughtForm";
import ThoughtItem from "./components/ThoughtItem";
import LoadingItem from "./components/LoadingItem";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  const [count, setCount] =
    useState(0); /*set state for send thoughts counter */
  const [loading, setLoading] = useState(false);

  const handleIncrement = () =>
    setTimeout(() => setCount((currentCount) => currentCount + 1), 500);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .finally(() => setLoading(false));
  };

  const onFormSubmitt = (event) => {
    event.preventDefault();

    const thoughts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    };
    fetch(API_URL, thoughts)
      .then((res) => res.json())
      .then((data) => {
        // setThoughts([data, ...thoughts]);

        fetchThoughts();
      });
  };
  const onLikesIncrease = (thoughtId) => {
    const options = {
      method: "POST",
    };
    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        // const updatedThoughts = thoughts.map((item) => {
        //   if (item._id === data._id) {
        //     item.hearts += 1;
        //     return item;
        //   } else {
        //     return item;
        //   }
        // });

        // setThoughts(updatedThoughts);
        fetchThoughts();
      });
  };

  return (
    <div>
      {loading && <LoadingItem />}
      <div className="form">
        {/* <p>What's making you happy right now?</p> */}
        <ThoughtForm
          onFormSubmitt={onFormSubmitt}
          newThought={newThought}
          setNewThought={setNewThought}
          handleIncrement={handleIncrement}
          count={count}
        />
      </div>

      {thoughts.map((thought) => (
        <ThoughtItem
          key={thought._id}
          thought={thought}
          onLikesIncrease={onLikesIncrease}
        />
      ))}
    </div>
  );
};
