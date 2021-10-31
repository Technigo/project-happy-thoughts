import React, { useEffect } from "react";
import { API_URL } from "utils/urls";
import moment from "moment";

//  display a list of happy thoughts as component. sends request to get happy thoughts from api.

export const ThoughtList = ({ thoughts, setThoughts }) => {
  // const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  });

  const onLikesIncrease = (thoughtId) => {
    const options = {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
    };
    fetch(
      `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        // v1 increase likes only

        const updatedThoughts = thoughts.map((item) => {
          if (item._id === data._id) {
            item.hearts += 1;
            return item;
          } else {
            return item;
          }
        });
        setThoughts(updatedThoughts);
      });
  };

  return (
    <div className="thoughtsContainer">
      {thoughts.map((thought) => (
        <div className="thoughtWrapper" key={thought._id}>
          <p className="messageText">{thought.message}</p>
          <div className="likesWrapper">
            <button
              onClick={() => onLikesIncrease(thought._id)}
              className="hearts"
            >
              <span role="img" aria-label="heart emoji">
                💗
              </span>{" "}
            </button>
            <p className="numberOfLikes">x {thought.hearts}</p>
            <p className="date">
              Posted: {moment(thought.createdAt).fromNow()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThoughtList;
