import React, { useEffect, useState } from "react";
// MUI components import
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
// Internal components
import { NewThought } from "components/NewThought";
import { ThoughtItem } from "components/ThoughtItem";
import { Heading } from "components/Heading";
import { UpdateButton } from "components/UpdateButton";
import { LikesCounter } from "components/LikesCounter";
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

  // if you want to see a loader , comment out lines 36-42 and line 47 (fetch and fetch function call)
  const handleFetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setThoughts(data);
        setVisible(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    handleFetchThoughts();
  }, [setIsLoading]);

  const handleLikeButtonClick = (thought) => {
    fetch(API_LIKES(thought), { method: "POST" })
      .then((res) => res.json())
      .then((newThought) => {
        setMyLikes(myLikes + 1);
        localStorage.setItem("likes", myLikes + 1);
        setThoughts(
          thoughts.map((item) => {
            if (item._id === newThought._id) {
              return { ...newThought, liked: true };
            } else {
              return item;
            }
          })
        );
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <CircularLoader isLoading={isLoading} />
        {isVisible && (
          <div className="grid">
            <Heading text={"Happy Thoughts App"} />
            <LikesCounter myLikes={myLikes} />
            <div className="new-thought-space">
              <NewThought thoughts={thoughts} setThoughts={setThoughts} />
            </div>
            <div>
              {thoughts.map((thought) => (
                <div className="each-thought-wrapper" key={thought._id}>
                  <Box sx={{ minWidth: 275 }}>
                    <ThoughtItem thought={thought} onLikeButtonClick={handleLikeButtonClick} />
                  </Box>
                </div>
              ))}
            </div>
            <UpdateButton onFetchThought={handleFetchThoughts} />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};
