import React from 'react';

import ThoughtsElement from './ThoughtsElement';

const ThoughtsList =  ({ thoughtsList, onHeartLikes }) => {
  return (
    <>
      {thoughtsList.map(message => (
        <ThoughtsElement
          key={message._id}
          message={message}
          onHeartLikes={onHeartLikes}
        />
      ))}
    </>
  )
}

export default ThoughtsList
