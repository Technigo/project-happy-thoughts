import React, { useState, useEffect } from 'react';

export const App = () => {
  const [thoughtList, setThoughtList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, [])

  return (
    <div>
      {!loading && thoughtList.map((thought) => {
        // eslint-disable-next-line no-underscore-dangle
        return (<p key={thought._id}>{thought.message}</p>)
      })}
      {loading && (<h2>Loading...</h2>)}
    </div>
  );
}
