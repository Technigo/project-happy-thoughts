/* eslint-disable */
import React, { useState, useEffect } from 'react';
import ThoughtForm from 'components/ThoughtForm';
import ThoughtList from 'components/ThoughtList';
import Picture from './assets/dog.png';

export const App = () => {
  const [thoughtList, setThoughtList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setThoughtList(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  /* eslint-disable no-unused-vars */
  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  }

  const handleFormCleanup = (event) => {
    setNewThought('');
    setLoading(false);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    }

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .finally(() => handleFormCleanup());
  }

  const handleLikes = (_id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${_id}/like`, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const updatedThoughtList = thoughtList.map((thought) => {
          if (thought._id === data._id) {
            return {
              ...thought,
              hearts: data.hearts
            };
          }
          return thought;
        });
        setThoughtList(updatedThoughtList);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="outer-wrapper">
      <a href="<a href='https://pngtree.com/so/Cute'>" title="creativity stickers"> <img src={Picture} alt="noding head" className="picture" /> </a>
      <div className="inner-wrapper">
        <ThoughtForm 
          newThought={newThought}
          setNewThought={setNewThought}
          onFormSubmit={onFormSubmit} />
        <ThoughtList
          loading={loading}
          thoughtList={thoughtList}
          handleLikes={handleLikes} />
      </div>
    </div>
  );
}