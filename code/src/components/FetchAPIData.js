import React, { useEffect } from 'react';

const FetchAPIData = ({ happyThoughtsList, setHappyThoughtsList, loading, setLoading }) => {
  useEffect(() => {
    setLoading(true);
    console.log(happyThoughtsList);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setHappyThoughtsList(data))
      .catch((error) => console.log(error))
      .finally(() => {
        console.log('it worked');
        setLoading(false);
        console.log(loading);
      });
  }, []);

  return (
    <div>
      {!loading && happyThoughtsList.map((thought) => {
        return (<p key={thought.createdAt}>{thought.message}</p>)
      })}
    </div>
  );
};

export default FetchAPIData;