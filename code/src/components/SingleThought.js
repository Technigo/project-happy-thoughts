import React from 'react';
import { formatDistance } from 'date-fns';
import { Likes } from './likes';
/* eslint-disable-next-line no-underscore-dangle */

export const SingleThought = ({ thought }) => {
  const options = {
    method: 'POST'
  }

  console.log('options', options)
  // eslint-disable-next-line no-underscore-dangle
  fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like
    `, {
    method: 'POST'
  })
    .then((response) => response.json())
    .then((data) => { console.log(data) })
    .catch((error) => console.log(error))
    .finally(() => { console.log('heart count increased') })

  return (
    <div className="button-container">
      {/* eslint-disable-next-line no-underscore-dangle */}
      <p className="thoughts-p" key={thought._id}>{thought.message}</p>
      {/* eslint-disable-next-line no-underscore-dangle */}
      <Likes id={thought._id} hearts={thought.hearts} />
      <p className="time">{formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>
    </div>
  )
}
/* const postLike = () => {
    return fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${props._id}/like`, {
      method: 'POST'
    })

const toggleLike = () => {
    postLike().then((response) => response.json()).then((data) => {
      setHearts(data.hearts)
} */