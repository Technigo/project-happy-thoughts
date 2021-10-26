import React, { useState } from "react";

// MUI components import
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";

import { API_URL } from "../utils/links";

export const NewThought = ({ thoughts, setThoughts }) => {
  const [newThought, setNewThought] = useState("");

  const onButtonClick = (e) => {
    e.preventDefault();
    if (newThought === "") {
      alert("Ops , you forgot to type your thought.");
    } else if (newThought.length <= 4) {
      alert(`Your thought is only ${newThought.length}. Please be more descriptive;)`);
    } else {
      onFormSubmit();
    }
  };

  const onFormSubmit = () => {
    setNewThought("");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    };
    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]));
  };

  return (
    <div className="grid ">
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <form className="new-thought-container" onSubmit={onButtonClick}>
              <label class="new-thought-label" htmlFor="newThought">
                What's making you happy right now?
              </label>
              <textarea
                id="newThought"
                type="text"
                placeholder="Share positive vibes"
                value={newThought}
                onChange={(e) => setNewThought(e.target.value)}
                style={{ borderColor: newThought.length >= 140 ? "red" : "inherit" }}
              />
              <p className="symbols-counter" style={{ color: newThought.length >= 140 ? "red" : "inherit" }}>
                {newThought.length} out of 140
              </p>
              <CardActions>
                <div className="move">
                  <Button type="submit" variant="contained" startIcon={<Icon>favorite</Icon>} endIcon={<Icon>favorite</Icon>}>
                    Send Happy Thought!
                  </Button>
                </div>
              </CardActions>
            </form>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};
