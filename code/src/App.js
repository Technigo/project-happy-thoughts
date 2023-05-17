/* eslint-disable no-underscore-dangle */
// The imports:
import React, { useState, useRef, useEffect } from 'react';
import { SendThought } from './components/SendThought';
import { ThoughtsList } from './components/ThoughtsList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import backgroundMusic from './background-music.mp3';
import bunnyIcon from './bunny_icon.gif';
import './index.css';

// A variable importing the music file outside of the App function
// because the toggling didn't work inside it for some reason:
const bgMusic = new Audio(backgroundMusic);
bgMusic.loop = true;

export const App = () => {
  const [sendThought, setSendThought] = useState('');
  const [sendName, setSendName] = useState('');
  const [thoughtsList, setThoughtsList] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [latestMessage, setLatestMessage] = useState(null)
  const audioRef = useRef(bgMusic);

  // This little function plays the music when pressing the music button,
  // and turns it off when pressing again.
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://project-happy-thoughts-api-z266fupacq-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }

  useEffect(() => {
    fetchThoughts();
  }, [])

  const onDeleteButtonClick = (thoughtId) => {
    setThoughtsList(thoughtsList.filter((thought) => thought._id !== thoughtId));
  };

  const onHeartButtonClick = (thoughtId) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }
    }
    fetch(`https://project-happy-thoughts-api-z266fupacq-uc.a.run.app/thoughts/${thoughtId}/like`, options)
      .then((response) => response.json())
      .then(() => fetchThoughts())
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
        console.log('new like');
      });
  };

  // The function below sends the message to the API and updates the thoughtsList-component
  // automatically, so that the user's message shows up in the array of messages.
  const handleFormSubmit = (event) => {
    event.preventDefault()
    fetch('https://project-happy-thoughts-api-z266fupacq-uc.a.run.app/thoughts', {
      method: 'POST',
      body: JSON.stringify({
        message: `${sendThought}`,
        name: `${sendName}`
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .then((data) => {
        setThoughtsList([data, ...thoughtsList])
        setLatestMessage(data._id)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
        setSendThought('')
        setSendName('');
      })
  }

  return (
    <div>
      <button type="submit" className="music-btn" onClick={togglePlay}><span className="music-emoji">&#127925;</span></button>
      <Header />
      <img alt="jumping bunny" className="bunny-icon" src={bunnyIcon} />
      <div className="app-wrapper">
        <SendThought
          sendThought={sendThought}
          setSendThought={setSendThought}
          sendName={sendName}
          setSendName={setSendName}
          handleFormSubmit={handleFormSubmit} />
        <ThoughtsList
          onHeartButtonClick={onHeartButtonClick}
          onDeleteButtonClick={onDeleteButtonClick}
          thoughtsList={thoughtsList}
          latestMessage={latestMessage}
          loading={loading} />
      </div>
      <Footer />
    </div>
  );
}