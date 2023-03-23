import React from 'react'
// import { formatDistance } from 'date-fns';
import { SingleThought } from './SingleThought';
// npm install date-fns
/* eslint-disable no-underscore-dangle */

export const HappyList = ({ loading, happyList }) => {
  if (loading) {
    return <h1 className="loading">Happy thoughts coming soon</h1>
  }
  return (
    <div>
      <section className="thoughts-container">
        {happyList.map((thought) => (
          <div key={thought._id} className="thoughts">
            <SingleThought key={thought._id} thought={thought} />
          </div>
        ))}
      </section>
    </div>

  )
}

// här vill vi få upp listan av texter som skrivs och fetchas från apin post
/* I set my my heart fetch to: .finally(() => fetchThoughts(''))
 and it refreshes the page with the new heart likes
 */