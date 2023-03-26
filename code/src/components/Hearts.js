/* eslint-disable no-underscore-dangle */
import React from 'react';

export const Hearts = ({ thought, fetchThoughts }) => {
  const onHeartCountIncreaseButtonClick = () => {
    const options = {
      method: 'POST'
    }
    console.log('options', options)

    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`, options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
      .finally(() => fetchThoughts())
    console.log('heart count increase')
  }

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      <div className="heartsSection">
        <button className="heartButton" onClick={onHeartCountIncreaseButtonClick} type="button">❤️</button>
        <p className="heartCount">x <span className="heartCountNumber">{thought.hearts}</span></p>
      </div>
    </div>
  )
}