import React, { useState } from 'react';
import FetchAPIData from 'components/FetchAPIData';

export const App = () => {
  const [happyThoughtsList, setHappyThoughtsList] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <h1>YO</h1>
      <FetchAPIData
        happyThoughtsList={happyThoughtsList}
        setHappyThoughtsList={setHappyThoughtsList}
        loading={loading}
        setLoading={setLoading} />
    </>
  )
}