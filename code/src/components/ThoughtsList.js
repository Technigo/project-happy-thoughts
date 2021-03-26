import React from 'react'

import ThoughtsElement from './ThoughtsElement'

const ThoughtsList = ({ handleHeartsIncrease, thoughtsList }) => {
  return (
    <>
    {thoughtsList.map(sentmessage => (
      <ThoughtsElement
      key={sentmessage._id}
      sentmessage={sentmessage}
      handleHeartsIncrease={handleHeartsIncrease}
      />
      ))}
  </>
  )
}

export default ThoughtsList