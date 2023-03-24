/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Submit } from 'components/Submit';
import { Thoughts } from 'components/Thoughts';

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const thoughtAdder = (newThought) => {
    setThoughtsList([newThought, ...thoughtsList]);
  };

  useEffect(() => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => { setThoughtsList(data) })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false)
      })
  }, []);

  return (
    <div className="main-container">
      <Submit thoughtAdder={thoughtAdder} />
      <Thoughts
        thoughtsList={thoughtsList}
        setThoughtsList={setThoughtsList}
        loading={loading} />
    </div>

  );
}
