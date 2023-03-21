/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { ThoughtsOutput } from 'components/ThoughsOutput';
import { ThoughtsInput } from 'components/ThoughtsInput';

export const App = () => {
  const [thoughtList, setThoughtList] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, []);
  return (
    <div className="main-container">
      <ThoughtsInput />
      {!loading && ThoughtsOutput(thoughtList)}
      {loading && (<h2>LOADING</h2>)}
    </div>
  );
}
