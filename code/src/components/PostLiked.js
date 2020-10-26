import React, { useState } from 'react';

import Button from './Button';

const PostLiked = ({ hearts, id }) => {
  const [likes, setLikes] = useState(hearts);

  if (!localStorage[id]) {
    localStorage.setItem(id, 0);
  }

  const handleLike = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: '',
    });
    setLikes(likes + 1);
    localStorage[id] = Number(localStorage[id]) + 1;
  };

  return (
    <div>
      <Button
        type="button"
        className="Button"
        click={handleLike}
        text={
          <span role="img" aria-label="Heart">
            ❤️
          </span>
        }
      />
      <p>x{likes}</p>
      <p>You liked this x{localStorage[id]}</p>
    </div>
  );
};

export default PostLiked;
