import React from 'react';
import { formatRelative } from 'date-fns';

const ThoughtsFlow = ({ loading, thoughtsFlow, /* setThoughtsFlow, */ onLikesIncrease }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  } 
  return (
    <section>
      {thoughtsFlow.reverse().map((list) => (
        <div className="Thoughts" key={list._id}>
          <h4>{list.message}</h4>
          <div className="likes">
            <div className="heartlikes">
              <button className={(list.likes === 0 ? 'like-btn' : 'red-likebtn')} onClick={() => onLikesIncrease(list._id)}>
                <span className="emoji" role="img">❤️</span>
              </button>
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

export default ThoughtsFlow;

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