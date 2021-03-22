import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Post = ({ message, likes, timeStamp, key }) => {
  return (
    <Paper square elevation={10} className="postCard">
      <Grid container spacing={1} key={key}>
        <Grid item xs={12}>
          {message}
        </Grid>
        <Grid item xs={6}>
          {likes}
        </Grid>
        <Grid item xs={6}>
          {timeStamp}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Post;
