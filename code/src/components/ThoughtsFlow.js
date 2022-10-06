/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatRelative } from 'date-fns';

export const ThoughtsFlow = ({ loading, thoughts, onLikesIncrease }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }
  return (
    <section>
      {thoughts.map((list) => (
        <div className="Thoughts" key={list._id}>
          <p className="thought-text">{list.message}</p>
          <div className="likes">
            <div className="heartlikes">
              <button className="Heart-btn" type="button" onClick={() => onLikesIncrease(list._id)}>❤️</button>
              <p>x {list.likes}</p>
            </div>
            <p className="date">
              {formatRelative(new Date(list.createdAt), Date.now(), { addSuffix: true })}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

/*
    const onTaskCheckChange = (list) => {
        setThoughtsFlow(thoughtsFlow => thoughtsFlow.map(singleTask => {
            if(singleTask._id === list._id) {
                return {...singleTask, isChecked: !singleTask.isChecked};
            }
            return singleTask;
        }));
    } */

/*   <input onChange={() => onTaskCheckChange(task)} type="checkbox" checked={list.isChecked} />

<p>{formatRelative(list.date, new Date())}</p> */