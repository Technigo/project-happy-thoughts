// import React from 'react';
import { API_URL_LIKE } from 'utils/urls';

const LikeAPost = ({ thoughtID, recentThoughts }) => {
  const options = {
    method: 'POST',
  };

  fetch(API_URL_LIKE(thoughtID), options)
    .then((res) => res.json())
    .then((json) => {
      const updateLikes = recentThoughts.map((thought) => {
        // eslint-disable-next-line no-underscore-dangle
        if (thought._id === json._id) {
          thought.hearts += 1;
          return thought;
        } else {
          return thought;
        }
      });
      return updateLikes;
      // setRecentThoughts(updateIncreaseLikes);
    });
};

export default LikeAPost;
