import React from 'react'
import { Emoji } from './Emoji'

export const Loading = ({ loading }) => {
  return (
    <>

      <section className="loading-container">

        <div className="loader">
          <Emoji label="Thought balloon" symbol="💭" />
          <Emoji label="Thought balloon" symbol="💭" />
          <Emoji label="Thought balloon" symbol="💭" />
        </div>

        <p>Loading posts...</p>

      </section>

    </>
  )
}