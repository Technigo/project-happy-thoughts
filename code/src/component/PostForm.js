import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const PostForm = ({ postFormValue, setPostFormValue }) => {
  const postFormValueChange = (event) => {
    setPostFormValue(event.target.value);
  };

  return (
    <Paper square elevation={10} className="postCard">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid container>
            <TextField
              variant="outlined"
              id="input"
              label="What's on your mind?"
              value={postFormValue}
              onChange={postFormValueChange}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Button variant="contained" color="primary">
              Send
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PostForm;
