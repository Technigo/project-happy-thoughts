import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [taskList, setTaskList] = useState([]);

  // dummy API https://week7-backend.herokuapp.com/tasks

  useEffect(() => {
    // creates promise
    fetch('https://week7-backend.herokuapp.com/tasks')
      .then((data) => data.json()) // Here we name the info from API and make it json.
    // New name and here we can set the data to a variable.
      .then((transformedData) => setTaskList(transformedData))
      // This happens if error occurs
      .catch((error) => console.log(error))
      .finally(() => console.log('everything is fine'))
  }, []); // will trigger always at the first time since it has a new value from start.

  useEffect(() => {
    console.log('test');
    // this will be excecuted every time anything inside the first brackets changes.
  // The moment the component become visible to browser the useEffect will be executed.
    // we can
  }, [counter]);

  const handleCounterIncreaseButtonClick = () => {
    setCounter(counter + 1);
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleCounterIncreaseButtonClick} type="button">Button increase</button>
      <TaskList list={taskList} />
    </div>
  );
}
