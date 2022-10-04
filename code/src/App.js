import React, { useEffect } from 'react';
import TaskList from 'components/TaskList.js'

export const App = () => {
  useEffect(() => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
    // .then((json) => setRecentThoughts(json.results) )
  }, []);

  return (
    <div>
      <TaskList />
    </div>
  )
}
