import React from 'react';
import moment from 'moment';

const List = ({ list, handleLikesIncrease }) => {
  console.log(list);

  return (
    <div>
      {list.map((list) => (
        <div className='list grid' key={list._id}>
          <p className='message'>{list.message}</p>
          <div>
            <button
              className={list.hearts > 0 ? 'heart-liked' : 'heart'}
              onClick={() => handleLikesIncrease(list._id)}
            >
              <span role='img' aria-label='heart emoji'>
                {' '}
                ❤️
              </span>
            </button>
            x {list.hearts}
          </div>
          <p className='date'>{moment(list.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
