/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns'
import { LikeButton } from './LikeButton'
import { Loading } from './Loading'
import '../index.css';
import './ThoughtsList.css';

export const ThoughtsList = ({ loading, thoughtsList }) => {
  if (loading) {
    return <Loading />
  }
  return (
    <div className="thoughts-list-wrapper">
      {thoughtsList.map((thought) => {
        return (
          <div className="single-thought-div">
            <p key={thought._id}>{thought.message}</p>
            <div className="thought-footer">
              <LikeButton thought={thought} />
              <p className="thought-date" key={thought.createdAt}>posted {formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>
            </div>
          </div>)
      })}
    </div>
  )
}