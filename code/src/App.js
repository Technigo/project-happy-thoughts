import React, { useState, useEffect } from 'react';
import { Thoughts } from './components/Thoughts';

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [thoughtsArray, setThoughtsArray] = useState([]);

  const API_URL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

  const fetchHappyThoughts = () => {
    setIsLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setThoughtsArray(data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchHappyThoughts();
  }, [])

  return (
    <div className="app-container">
      <div className="thought-container">
        <Thoughts loading={isLoading} thoughts={thoughtsArray} />
      </div>
    </div>
  );
}
