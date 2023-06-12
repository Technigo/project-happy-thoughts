import React from 'react';
import './Loader.css';
import { Player } from '@lottiefiles/react-lottie-player';

export const Loader = () => {
  return (
    <>
      <p className="loader-text">Loading happy thoughts...</p>
      <Player
        src="https://assets2.lottiefiles.com/packages/lf20_karvytca.json"
        className="player"
        loop
        autoplay
        speed={1} />
    </>
  )
}