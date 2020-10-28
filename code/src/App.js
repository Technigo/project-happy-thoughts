import React, { useState, useEffect } from 'react';

import "./index.css"
import { ThoughtsList } from "./components/js/ThoughtsList";
import { ThoughtsCard } from "./components/js/ThoughtsCard";
import { ThoughtsInput } from "./components/js/ThoughtsInput";
import { STATUS_URL } from "./components/js/urls";


export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetchThoughts();  
  });

  const fetchThoughts = () => {
    fetch(STATUS_URL)
      .then(res => res.json())
      .then(data => setThoughts(data.reverse()))
      console.log(data);
  }

  return (
    <div className="card">
      <ThoughtsInput />
      <ThoughtsList thoughtsList={thoughts} />
    </div>
  )
}
