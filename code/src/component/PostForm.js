import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FavoriteIcon from "@material-ui/icons/Favorite";

const PostForm = ({ postFormValue, setPostFormValue, postRequest }) => {
  const postFormValueChange = (event) => {
    setPostFormValue(event.target.value);
  };

  return (
    <Grid container justify="center">
      <Paper square elevation={10} className="postCard">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container justify="center">
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
              <Grid container justify="center">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={postRequest}
                >
                  <FavoriteIcon />
                  &nbsp; Send happy thought &nbsp;
                  <FavoriteIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PostForm;
