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
      .catch((error) => console.log(error)) // catches errors
      .finally(() => fetchThoughts())
    console.log('heart count increase')
  }

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      {/* <p key={thought._id}>{thought.message}</p> */}
      <p>Hearts:
        <span>{thought.hearts}</span>
        <button onClick={onHeartCountIncreaseButtonClick} type="button">Increase heart count</button>
      </p>
    </div>
  )
}

// fetchThoughts={fetchThoughts}