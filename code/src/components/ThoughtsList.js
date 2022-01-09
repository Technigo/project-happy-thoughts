import React from 'react'

import ThoughtsItem from './ThoughtsItem'

const ThoughtsList = ({
  displayedThoughts,
  fetchThoughts,
  fetchDisplayedThoughts,
}) => {
  return (
    <div className="thoughts-list">
      {displayedThoughts.map((thought) => (
        <ThoughtsItem
          key={thought._id}
          thought={thought}
          thoughtId={thought._id}
          displayedThoughts={displayedThoughts}
          fetchThoughts={fetchThoughts}
          fetchDisplayedThoughts={fetchDisplayedThoughts}
        />
      ))}
    </div>
  )
}

export default ThoughtsList
