import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const Loader = () => {
  return (
    <Player
      src="https://assets2.lottiefiles.com/packages/lf20_karvytca.json"
      className="player"
      loop
      autoplay
      speed={1} />
  )
}