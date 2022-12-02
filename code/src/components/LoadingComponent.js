import React from 'react';

const LoadingComponent = () => {
  return (
    <article className="message-container animation-container" aria-label="Loading">
      <lottie-player
        src="https://assets4.lottiefiles.com/packages/lf20_khnalzic.json"
        background="transparent"
        speed="0.6"
        loop
        autoplay />

    </article>
  )
}

export default LoadingComponent;
