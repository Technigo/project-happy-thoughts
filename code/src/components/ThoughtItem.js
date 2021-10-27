import React from "react";
import moment from "moment";
import { LikeButton } from "components/LikeButton";

//MUI components

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export const ThoughtItem = ({ thought, onLikeButtonClick }) => {
  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <div className="inner-uploaded-thought-container">
            <p>{thought.message}</p>
            <CardActions>
              <div>
                <LikeButton onLikeButtonClick={onLikeButtonClick} thought={thought} />
              </div>
            </CardActions>
            <p className="date">{moment(thought.createdAt).fromNow()}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
