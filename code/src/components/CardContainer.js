import React from 'react'

import { LikeButton } from './LikeButton'

export const CardContainer = () => {
  return (
    <div className="card-container">
      <p className="thought-text" />
      <div className="container-bottom-card">
        <LikeButton />
      </div>
    </div>
  )
}