import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const Loader = () => {
  return (
    <Player
      src="https://assets6.lottiefiles.com/packages/lf20_fL8JRzh50a.json"
      className="player"
      loop
      autoplay
      style={{ width: '100vh', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
  )
}