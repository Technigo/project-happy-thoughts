import React, { useState, useEffect } from 'react';
import Header from 'components/Header';
import ThoughtList from 'components/ThoughtList';
import NewThought from 'components/NewThought';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [thoughtList, setThoughtList] = useState([]);
  const [newThought, setNewThought] = useState('');

  useEffect(() => {
    // window.alert(`the current counter is ${counter}`)
  }, [counter]);
  const handleCounterIncreaseButtonClick = () => {
    setCounter(counter + 1);
  }
  return (
    <div>
      <Header />
      <p>{counter}</p>
      <button onClick={handleCounterIncreaseButtonClick} type="button">Counter increase</button>
      <NewThought newThought={newThought} setNewThought={setNewThought} />
      <ThoughtList thoughtList={thoughtList} setThoughtList={setThoughtList} />
    </div>
  );
}
