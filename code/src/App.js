import React, { useState, useRef } from 'react';
import { SendThoughtForm } from './components/SendThoughtForm';
import { ThoughtsList } from './components/ThoughtsList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import backgroundMusic from './background-music.mp3';
import './index.css';
import bunnyIcon from './bunny_icon.gif';

const audio = new Audio(backgroundMusic);
audio.loop = true;

export const App = () => {
  const [sendThought, setSendThought] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(audio);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }

  return (
    <div>
      <button type="submit" className="music-btn" onClick={togglePlay}><span className="music-emoji">&#127925;</span></button>
      <Header />
      <img alt="jumping bunny" className="bunny-icon" src={bunnyIcon} />
      <div className="app-wrapper">
        <SendThoughtForm sendThought={sendThought} setSendThought={setSendThought} />
        <ThoughtsList />
      </div>
      <Footer />
    </div>
  );
}