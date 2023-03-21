/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

const Feed = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, [])

  return (
    <>
      {!loading && thoughtsList.map((thought) => {
        return (<p key={thought._id}>{thought.message}</p>)
      })}
      {loading && (<p>Loading..</p>)}
    </>
  )
};

export default Feed;