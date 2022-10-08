// import React, { useState, useEffect } from 'react';
import React from 'react';

const ThoughtList = ({ thought }) => {
  return (
    <section>
      {thought.map((singleThought) => {
        return (
          <div className="singleThought" key={singleThought._id}>
            <p>{singleThought.message}</p>
            <div className="heartBtn">
              <button>{singleThought.hearts}</button>
              <p>{singleThought.createdAt}</p>
            </div>

          </div>
        )
      })}
    </section>
  )
}

export default ThoughtList