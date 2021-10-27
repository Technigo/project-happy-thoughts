import React, { useState } from "react";

// MUI components import
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import Alert from "@mui/material/Alert";

import { API_URL } from "../utils/links";

export const NewThought = ({ thoughts, setThoughts }) => {
  const [newThought, setNewThought] = useState("");
  const [alertShown, setAlertShown] = useState("");

  const onButtonClick = (e) => {
    e.preventDefault();
    if (newThought === "") {
      setAlertShown("Ops , you forgot to type your thought.");
    } else if (newThought.length <= 5) {
      setAlertShown(`Your thought has only ${newThought.length} characters. Please add at least 5 symbols.`);
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
    <div className="grid new-thought-card">
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <form className="new-thought-container" onSubmit={onButtonClick}>
              <label className="new-thought-label" htmlFor="newThought">
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
              {alertShown !== "" && (
                <div style={{ marginLeft: -2 }}>
                  <Alert severity="error">{alertShown}</Alert>
                </div>
              )}
              <p className="symbols-counter" style={{ color: newThought.length >= 140 ? "red" : "inherit" }}>
                {newThought.length} out of 140
              </p>
              <CardActions>
                <div className="move-btn">
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
