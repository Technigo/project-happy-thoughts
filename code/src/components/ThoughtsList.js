/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns'
import { Loading } from './Loading'
import '../index.css';
import './ThoughtsList.css';

export const ThoughtsList = ({ loading, thoughtsList, setThoughtsList, onHeartButtonClick, latestMessage }) => {
  if (loading) {
    return <Loading />
  }

  const onDeleteButtonClick = (thoughtId) => {
    setThoughtsList(thoughtsList.filter((thought) => thought._id !== thoughtId));
  };

  const handleDelete = (_id) => {
    const options = {
      method: 'DELETE'
    }
    fetch(`https://project-happy-thoughts-api-z266fupacq-uc.a.run.app/thoughts/${_id}`, options)
      .then((response) => response.json())
      .then(() => onDeleteButtonClick(_id))
      .catch((error) => console.log(error))
  };

  return (
    <div className="thoughts-list-wrapper">
      {thoughtsList.map((thought) => {
        return (
          <div className={`single-thought-div ${thought._id === latestMessage ? 'fade-in' : ''}`} key={thought._id}>
            <button type="button" className="delete-btn" onClick={() => handleDelete(thought._id)}>x</button>
            <p className="message-p">{thought.message}</p>
            <div className="thought-footer">
              <div className="heart-button">
                <button type="button" className="heart-emoji" onClick={() => onHeartButtonClick(thought._id)}>❤️</button>
                <p>x {thought.hearts}</p>
              </div>
              <p className="thought-date" key={thought.createdAt}>
              posted {formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })} by {thought.name}
              </p>
            </div>
          </div>)
      })}
    </div>
  )
}