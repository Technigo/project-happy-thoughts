import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import RefreshIcon from "@material-ui/icons/Refresh";
import SendIcon from "@material-ui/icons/Send";

const PostForm = ({
  postFormValue,
  setPostFormValue,
  postRequest,
  refreshPosts,
}) => {
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
            <ButtonGroup variant="text" color="default" aria-label="">
              <Button
                startIcon={<SendIcon />}
                variant="contained"
                color="primary"
                onClick={postRequest}
              >
                Send
              </Button>
              <Button
                startIcon={<RefreshIcon />}
                variant="contained"
                color="primary"
                onClick={refreshPosts}
              >
                Refresh
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PostForm;
