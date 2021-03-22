import React from "react";

import moment from "moment";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";

const Post = ({ message, likes, timeStamp, key }) => {
  return (
    <Paper square elevation={10} className="postCard">
      <Grid container spacing={1} key={key}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="initial">
            {message}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container justify="flex-start">
            {<FavoriteIcon className="heartIcon" />} x {likes}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container justify="flex-end">
            <Typography variant="body2" color="initial">
              {moment({ timeStamp }).fromNow()}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Post;
