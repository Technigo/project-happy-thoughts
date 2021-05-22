import React from 'react'

import ThoughtsElement from './ThoughtsElement'

const ThoughtsList = ({ handleHeartsIncrease, thoughtsList, username }) => {
  return (
    <>
    {thoughtsList.map(sentmessage => ( 
      <ThoughtsElement
      key={sentmessage._id}
      sentmessage={sentmessage}
      handleHeartsIncrease={handleHeartsIncrease}
      username={username}
      />
      ))}
  </>
  )
}

export default ThoughtsList