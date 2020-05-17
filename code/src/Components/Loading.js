import React from 'react'
import Lottie from 'lottie-react-web'
import animations from '../animations/loading-heart.json'

export const Loading = () => {
  return (
    <main>
      <Lottie
        options={{
          animationData: animations
        }}
        width="200px"
        height="200px"
        autoPlay />
    </main>
  )
}