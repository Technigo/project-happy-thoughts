import React, { useState, useEffect } from 'react';

import ThoughtsList from 'components/ThoughtsList';
import Form from 'components/Form';
import Main from 'components/Styled/Main';
import Card from 'components/Styled/Card';

import { URL } from 'helpers/reusables';

const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchThoughts = () => {
    setLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setThoughts(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <Main>
      <Form fetchThoughts={fetchThoughts} />
      {loading ? (
        <Card>
          <Card.Title>Loading</Card.Title>
        </Card>
      ) : (
        <ThoughtsList thoughts={thoughts} setThoughts={setThoughts} />
      )}
    </Main>
  );
};

export default App;
