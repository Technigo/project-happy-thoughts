import React, { useState, useEffect } from 'react';
import ThoughtList from 'components/ThoughtList';
import ThoughtForm from 'components/ThoughtForm';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [thoughtList, setThoughtList] = useState([]);
  const [newThought, setNewThought] = useState('');

  const fetchData = () => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setThoughtList(transformedData))
      .catch((error) => console.error(error))
      .finally(() => console.log('everything is fine in fetch'));
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // console.log('change effect with counter change')
  }, [counter]);

  const handleCounterIncreaseButtonClick = () => {
    setCounter(counter + 1);
  }

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: newThought
      }),
      headers: {
        'Content-Type': 'application/json'
      }

    }
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((data) => data.json())
      .then(() => fetchData())
      .catch((error) => console.error(error))
      .finally(() => setNewThought(''));
  }
  return (
    <div className="wrapper">
      <ThoughtForm
        handleFormSubmit={handleFormSubmit}
        newThought={newThought}
        onNewThoughtChange={onNewThoughtChange} />
      {counter >= 1 && (<ThoughtList thought={thoughtList} />)}
      <p>{counter}</p>
      <button onClick={handleCounterIncreaseButtonClick} type="button">Counter increase</button>
    </div>
  );
}
