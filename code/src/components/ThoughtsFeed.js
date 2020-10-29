import React from 'react';
import moment from 'moment';

export const ThoughtsFeed = ({ thoughtsFeed }) => {

  return (
    <section>
    <div>
      {
        thoughtsFeed.map(thoughts => (
          <p className="thoughts" key={thoughts.createdAt}>
            {thoughts.message}
              <span className="message-time">
              {moment(thoughts.created).fromNow()}
              </span>
          </p>
          ))
      }
    </div>
    </section>
    );
}

