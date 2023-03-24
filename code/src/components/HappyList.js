/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
import React from 'react';
// import { formatRelative } from 'date-fns'

export const HappyList = ({ loading, happyThoughts, setHappyThoughts }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  const onHappyListChange = (happy) => {
    setHappyThoughts((happyThoughts) => happyThoughts.map((individualHappy) => {
      if (individualHappy._id === happy._id) {
        return {
          individualHappy
        }
      }
      return individualHappy
    }))
  }
  return (
    <section>
      {happyThoughts.map((happy) => (
        <div key={happy._id}>
          <h4>{happy.description}</h4>
          <input onChange={() => onHappyListChange(happy)} />
        </div>
      )).reverse()}
    </section>
  )
}