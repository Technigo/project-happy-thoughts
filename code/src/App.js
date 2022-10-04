import React, { useState, useEffect } from 'react';
import ThoughtList from 'components/ThoughtList';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [thoughtList, setThoughtList] = useState([]);

  useEffect(() => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setThoughtList(transformedData))
      .catch((error) => console.error(error))
      .finally(() => console.log('everything is fine'))
  }, []);

  useEffect(() => {
    // window.alert(`the current counter is ${counter}`)
  }, [counter]);
  const handleCounterIncreaseButtonClick = () => {
    setCounter(counter + 1);
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleCounterIncreaseButtonClick} type="button">Counter increase</button>
      <ThoughtList list={thoughtList} />
    </div>
  );
}
