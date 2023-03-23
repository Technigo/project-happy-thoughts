/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { ThoughtList } from 'components/ThoughtsList'

export const App = () => {

  const [thoughtList, setThoughtsList] = useState ([]);
  const [loading, setLoading] = useState(false);

useEffect(() => {
  fetchThoughts();
}, []);

const fetchThoughts = () => {
  setLoading(true);
  fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
    .then(res => res.json())
    .catch(error => console.error(error))
    .finally(() => setLoading(false));
}
// add .then(data => setThoughtsList(data))


const handleFormSubmit = (event) => {
  event.preventDefault()
}


  return (
    <div>
      Here goes the heart ❤️
    </div>
  );
}

//button type="submit"
// Other components: ThoughtsList look at TaskList.js createdAt instead of date