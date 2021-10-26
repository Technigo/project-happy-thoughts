import React, { useEffect, useState } from "react";
import moment from "moment";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NewThought } from "components/NewThought";
import { LikeButton } from "components/LikeButton";
import { CircularLoader } from "components/CircularLoader";
import { API_URL } from "./utils/links";
import { API_LIKES } from "./utils/links";

// material UI theme modification

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#f53536",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Fira Code",
  },
});

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
              return { ...newThought, liked: true };
            } else {
              return d;
            }
          }),
        ]);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <CircularLoader isLoading={isLoading} />
        {isVisible && (
          <div>
            <div className="grid heading-container">
              <span className="heading-style">
                <p className="heading">Happy Thoughts App</p>
              </span>
              <div>
                You liked <span className="highlight">{myLikes}</span> thoughts
              </div>
              <div className="new-thought-space">
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
        )}
      </div>
    </ThemeProvider>
  );
};
