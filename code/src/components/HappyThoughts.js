import React, { useState, useEffect } from 'react';
import moment from 'moment';

export const HappyThoughts = () => {
  const happyThoughtsURL =
    'https://happy-thoughts-technigo.herokuapp.com/thoughts';
  const [happyThoughts, setHappyThoughts] = useState([]);

  useEffect(() => {
    fetch(happyThoughtsURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHappyThoughts(data);
      });
  }, []);

  return (
    <>
      {happyThoughts.map((happyThought) => (
        <article className="happy-thought-wrapper">
          <h3>{happyThought.message}</h3>
          <button type="button" className="button-heart">
            <span className="heart">&hearts;</span>
          </button>
          <p>x {happyThought.hearts}</p>
          <p>{moment(happyThought.createdAt).fromNow()}</p>
        </article>
      ))}
    </>
  );
};
