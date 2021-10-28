import { API_URL_LIKE } from 'utils/urls';

const likeAPost = ({ thoughtID, recentThoughts }) => {
  const options = {
    method: 'POST',
  };

  return fetch(API_URL_LIKE(thoughtID), options)
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
    });
};

export default likeAPost;
