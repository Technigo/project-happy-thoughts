import React from 'react';

import Message from './Message';
import ThoughtInfo from './ThoughtInfo';

const Thought = ({ id, created, likes, message, onLiked }) => {
  return (
    <article className="thought">
      <Message message={message} />
      <ThoughtInfo
        id={id}
        created={created}
        likes={likes}
        onLiked={onLiked}
      />
    </article>
  )
}

export default Thought;