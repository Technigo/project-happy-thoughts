import React, { useEffect, useState } from "react";
import moment from "moment";
import { NewThought } from "components/NewThought";
import { LikeButton } from "components/LikeButton";
import { CircularLoader } from "components/CircularLoader";
import { API_URL } from "./utils/links";
import { API_LIKES } from "./utils/links";
// CircularLoader

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [myLikes, setMyLikes] = useState(parseInt(localStorage.getItem("likes") || 0));
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setThoughts(data);
        setVisible(true);
        setIsLoading(false);
      });
  }, [setIsLoading]);

  const onLikeButtonClick = (thought) => {
    fetch(API_LIKES(thought), { method: "POST" })
      .then((res) => res.json())
      .then((newThought) => {
        setMyLikes(myLikes + 1);
        localStorage.setItem("likes", myLikes + 1);
        setThoughts([
          ...thoughts.map((d) => {
            /*https://www.pluralsight.com/guides/manipulating-arrays-and-objects-in-state-with-react*/
            if (d._id === newThought._id) {
              return newThought;
            } else {
              return d;
            }
          }),
        ]);
      });
  };

  return (
    <div>
      <div>
        <CircularLoader isLoading={isLoading} />
      </div>
      <div className={isVisible ? null : "hide-content"}>
        <div>
          You liked <span className="highlight">{myLikes}</span> thoughts
        </div>
        <div>
          <NewThought thoughts={thoughts} setThoughts={setThoughts} />
        </div>
        {thoughts.map((thought) => (
          <div key={thought._id}>
            <p>{thought.message}</p>
            <div>
              <LikeButton onLikeButtonClick={onLikeButtonClick} thought={thought} />
            </div>
            <p className="date">{moment(thought.createdAt).fromNow()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
