/* eslint-disable linebreak-style */
import React from 'react';

const HappyList = ({ happyList }) => {
  return (
    <section className="list-wrapper">
      {happyList.map((event) => {
        return (
        // eslint-disable-next-line no-underscore-dangle
          <div className="list-box" key={event._id}>
            <p className="message"> {event.message}</p>
          </div>
        )
      })}
    </section>
  );
}

export default HappyList;