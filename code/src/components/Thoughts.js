
import React, { useState, useEffect } from 'react';

import { ThoughtsList } from './ThoughtsList'

export const Thoughts = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [thoughtsArray, setThoughtsArray] = useState([]);

  const fetchHappyThoughts = () => {
    setIsLoading(true);
    fetch(props.api_url)
      .then((response) => response.json())
      .then((data) => setThoughtsArray(data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchHappyThoughts();
  }, [])

  return (
    <ThoughtsList thoughts={thoughtsArray} loading={isLoading} />
  )
}