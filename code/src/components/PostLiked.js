import React, { useState } from 'react';

import Button from './Button';

const PostLiked = ({ hearts, id }) => {
  const [likes, setLikes] = useState(hearts);

  const handleLike = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: '',
    });
    setLikes(likes + 1);
  };

  return (
    <div>
      <Button
        type="button"
        className=""
        click={handleLike}
        text={
          <span role="img" aria-label="Heart">
            ❤️
          </span>
        }
      />
      <p>x{likes}</p>
    </div>
  );
};

export default PostLiked;
