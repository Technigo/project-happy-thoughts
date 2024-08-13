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
    const updatedThoughtsList = thoughtsList.map((thought) => {
      if (thought._id === thoughtId) {
        return { ...thought, isDeleting: true };
      }
      return thought;
    });
    setThoughtsList(updatedThoughtsList);
    const options = {
      method: 'DELETE'
    };
    fetch(`https://project-happy-thoughts-api-z266fupacq-uc.a.run.app/thoughts/${thoughtId}`, options)
      .then((response) => response.json())
      .then(() => {
        setThoughtsList(updatedThoughtsList.filter((thought) => thought._id !== thoughtId));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="thoughts-list-wrapper">
      {thoughtsList.map((thought) => {
        return (
          <div
            className={`single-thought-div ${thought._id === latestMessage ? 'fade-in' : ''}
          ${thought.isDeleting ? 'fade-out' : ''}`}
            key={thought._id}>
            <button type="button" className="delete-btn" onClick={() => onDeleteButtonClick(thought._id)}>x</button>
            <p className="message-p">{thought.message}</p>
            <div className="thought-footer">
              <div className="heart-button">
                <button type="button" className="heart-emoji" onClick={() => onHeartButtonClick(thought._id)}>❤️</button>
                <p className="thought-date">x {thought.hearts}</p>
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