/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Submit } from 'components/Submit';
import { Thoughts } from 'components/Thoughts';
import { myApi } from 'components/apiList';

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchThoughts = () => {
    setLoading(true);
    fetch(myApi)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setThoughtsList(data)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false)
      })
  };
  // Triggers fetch on rerender
  useEffect(() => {
    fetchThoughts()
  }, []);

  return (
    <div className="main-container">
      <Submit thoughtsList={thoughtsList} setThoughtsList={setThoughtsList} />
      <Thoughts
        thoughtsList={thoughtsList}
        setThoughtsList={setThoughtsList}
        loading={loading} />
    </div>
  );
};