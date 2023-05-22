/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { MessageCard } from 'components/Messagecard';
import { Card } from 'components/Card';

export const App = () => {
  const [stateVariable, setStateVariable] = useState('');
  const [thoughtsList, setThoughtsList] = useState([]);
  const [likedThoughts, setLikedThoughts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState('');
  const [username, setUsername] = useState('');
  const [tag, setTag] = useState('');
  const happyEndpoint = 'https://happy-thoughts-urhkb27xua-lz.a.run.app/thoughts';
  const [likedPostsCount, setLikedPostsCount] = useState(
    Number(localStorage.getItem('likedPostsCount')) || 0
  );

  const fetchHappy = () => {
    fetch(`${happyEndpoint}?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setThoughtsList(data.thoughts);
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
      })
      .catch((error) => console.log(error))
      .finally(() => { console.log('fetch was successful') });
  }

  useEffect(() => {
    fetchHappy();
  }, [currentPage]);

  const onPreviousPageClick = () => {
    setCurrentPage(parseInt(currentPage, 10) - 1);
  };

  const onNextPageClick = () => {
    setCurrentPage(parseInt(currentPage, 10) + 1);
  };

  const sendHappy = () => {
    fetch(happyEndpoint, {
      method: 'POST',
      body: JSON.stringify({ message: stateVariable, username, tag }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
      .then(() => {
        setStateVariable('');
        setUsername('');
        setTag('');
        fetchHappy();
      })
      .finally(() => {
        console.log('POST request was successful');
      })
  }

  const increaseLike = (thought) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(`https://happy-thoughts-urhkb27xua-lz.a.run.app/thoughts/${thought._id}/like`, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to like the post');
        }
        return response.json();
      })
      .then(() => {
        if (!likedThoughts.includes(thought._id)) {
          setLikedThoughts([...likedThoughts, thought._id]);
          setLikedPostsCount(likedPostsCount + 1);
          localStorage.setItem('likedPostsCount', likedPostsCount + 1);
        }
        fetchHappy();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  // excecute the fetch happy on the first render since the array is empty
  useEffect(fetchHappy, []);
  const formatTimestamp = (timestamp) => {
    const currentTime = new Date();
    const messageTime = new Date(timestamp);
    const diffInMilliseconds = currentTime - messageTime;

    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays > 0) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    } else if (diffInHours > 0) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else if (diffInMinutes > 0) {
      return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    } else {
      return `${diffInSeconds} second${diffInSeconds > 1 ? 's' : ''} ago`;
    }
  };

  return (
    <div className="cards">
      <p className="header"> Make stranger&apos;s hearts beat by clicking the ❤️! Your love counter here: {likedPostsCount}</p>
      <div className="page-buttons-wrapper">
        <p>Page {currentPage} of {totalPages}</p>
        <div>
          <button className="page-button" type="button" onClick={onPreviousPageClick} disabled={currentPage === 1}>Prev</button>
          <button className="page-button" type="button" onClick={onNextPageClick} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
      <div>
        <Card
          stateVariable={stateVariable}
          setStateVariable={setStateVariable}
          setUsername={setUsername}
          setTag={setTag}
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