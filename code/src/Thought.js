import React from 'react';

import Message from './Message';
import ThoughtInfo from './ThoughtInfo';

const Thought = (props) => {
  return (
    <article className="thought">
      <Message message={props.message} />
      <ThoughtInfo created={props.created} likes={props.likes} />
    </article>
  )
}

export default Thought;