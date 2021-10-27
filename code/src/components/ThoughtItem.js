import React from "react";
import moment from "moment";
import { LikeButton } from "components/LikeButton";

//MUI components

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export const ThoughtItem = ({ thought, onLikeButtonClick }) => {
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <div className="inner-each-thought-container">
            <p className="thought-text">{thought.message}</p>
            <div className="like-btn-post-moment-container">
              <CardActions>
                <div className="likes-info-wrapper">
                  <LikeButton onLikeButtonClick={onLikeButtonClick} thought={thought} />
                </div>
              </CardActions>
              <p className="date sub-text-styling">{moment(thought.createdAt).fromNow()}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
