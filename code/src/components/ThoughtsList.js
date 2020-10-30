import React, { useState, useEffect } from 'react';

import { ThoughtForm } from 'components/ThoughtForm';
import { Thought } from "components/Thought";
import { ThoughtsUrl} from 'Urls';

import "styles/thoughtsList.css";

export const ThoughtsList = () => {
    const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(ThoughtsUrl)
      .then(results => results.json())
      .then(data => setThoughts(data))
      .catch(error => console.error(error));
    }

    const postThoughts = (newThought) => {
      fetch(ThoughtsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ message: newThought })
       })
        .then(() => fetchThoughts())
        .catch(error => console.error(error));
    }

    return (
    <>
        <ThoughtForm onThoughtChange={postThoughts}/>
        <Thought happyThoughts={thoughts}/>
    </>
    );
};