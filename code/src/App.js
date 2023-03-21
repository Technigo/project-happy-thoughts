import React, { useState, useEffect } from 'react';
import { Submit } from 'components/Submit';
import { Thoughts } from 'components/Thoughts';

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => { setThoughtsList(data) })
      .catch((error) => console.log(error))
      .finally(() => {
        console.log('fetch successful');
        setLoading(false)
      })
  }, []);

  return (
    <>
      <Submit />
      <Thoughts message="thoughts to come" />
      {!loading && thoughtsList.map((thought) => {
        return (
          // eslint-disable-next-line no-underscore-dangle
          <p key={thought._id}>Thought message is: {thought.message}</p>
        )
      })}
      {loading && (
        <h2>Loading...</h2>
      )}
    </>
  );
}
