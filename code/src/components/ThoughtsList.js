/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns'
import { Loading } from './Loading'
import '../index.css';
import './ThoughtsList.css';

export const ThoughtsList = ({ loading, thoughtsList, onHeartButtonClick, latestMessage }) => {
  if (loading) {
    return <Loading />
  }
  return (
    <div className="thoughts-list-wrapper">
      {thoughtsList.map((thought) => {
        return (
          <div className={`single-thought-div ${thought._id === latestMessage ? 'fade-in' : ''}`} key={thought._id}>
            <p>{thought.message}</p>
            <div className="thought-footer">
              <div className="heart-button">
                <button type="button" className="heart-emoji" onClick={() => onHeartButtonClick(thought._id)}>❤️</button>
                <p>x {thought.hearts}</p>
              </div>
              <p className="thought-date" key={thought.createdAt}>posted {formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>
            </div>
          </div>)
      })}
    </div>
  )
}