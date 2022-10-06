import React, { useState } from 'react';
import HappyThoughts from './HappyThoughts';
import HappyThoughtsForm from './HappyThoughtsForm';
import { useState } from 'react';

const [loading, setLoading] = useState(false);

useEffect(() => {
    fetchHappyThoughts();
  }, []);

  const fetchHappyThoughts = () => {
    setLoading(true);
    fetch('https://api-happy-tweets.herokuapp.com/thoughts')
    .then(res => res.json())
    .then(data => setThoughts(data.response))
    .catch(error => console.error(error))
    .finally(() => setLoading(''));
  };


export default Container;