/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { MessageCard } from 'components/Messagecard';
import { Card } from 'components/Card';

export const App = () => {
  const [stateVariable, setStateVariable] = useState('');
  const [thoughtsList, setThoughtsList] = useState([]);
  const [likedThoughts, setLikedThoughts] = useState([]);
  const happyEndpoint = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts';
  const [likedPostsCount, setLikedPostsCount] = useState(
    Number(localStorage.getItem('likedPostsCount')) || 0
  );

  const fetchHappy = () => {
    fetch(happyEndpoint)
      .then((response) => response.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.log(error))
      .finally(() => { console.log('fetch was successful') });
  }

  const sendHappy = () => {
    fetch(happyEndpoint, {
      method: 'POST',
      body: JSON.stringify({ message: stateVariable }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
      .then(() => {
        setStateVariable(''); // Clear the input after the message has been sent to the API.
        fetchHappy(); // Update/Bring me the thought list with the new ones
      })
      .finally(() => {
        console.log('POST request was successful');
      })
  }
  const increaseLike = (thought) => {
    const options = {
      method: 'POST'
    }

    // eslint-disable-next-line no-underscore-dangle
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like
    `, options)
      .then((response) => response.json())
      .then((data) => { console.log(data) })
      .catch((error) => console.log(error))
      .finally(() => {
        fetchHappy();
        console.log('heart count increased');
      })
    setLikedThoughts([...likedThoughts, thought._id]);

    // Update the liked posts count
    if (!likedThoughts.includes(thought._id)) {
      setLikedPostsCount(likedPostsCount + 1);
      localStorage.setItem('likedPostsCount', likedPostsCount + 1);
    }

    setTimeout(() => {
      setLikedThoughts(likedThoughts.filter((id) => id !== thought._id));
    }, 1000);
  }

  // excecute the fetch happy on the first render since the array is empty
  useEffect(fetchHappy, []);
  const formatTimestamp = (timestamp) => {
    const currentTime = new Date();
    const messageTime = new Date(timestamp);
    const diffInMilliseconds = currentTime - messageTime;
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    return `${diffInMinutes}`;
  };

  return (
    <div className="cards">
      <p className="header"> Make stranger&apos;s hearts beat by clicking the ❤️! Your beat counter here: {likedPostsCount}</p>
      <div>
        <Card
          stateVariable={stateVariable}
          setStateVariable={setStateVariable}
          sendHappy={sendHappy} />
      </div>
      <div>
        {thoughtsList.map((thought) => (
          <MessageCard
            thought={thought}
            likedThoughts={likedThoughts}
            increaseLike={increaseLike}
            formatTimestamp={formatTimestamp} />
        ))}
      </div>
    </div>
  )
}