import React from 'react';

const LikeButton = ({ thought }) => {
  const onHeartCountIncreaseButtonClick = () => {
    const options = {
      method: 'POST'
    }
    console.log('options', options)
    // eslint-disable-next-line no-underscore-dangle
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like
        `, options)
      .then((response) => response.json())
      .then((data) => { console.log(data) })
      .catch((error) => console.log(error))
      .finally(() => { console.log('more hearts') })
  }

  return (
    <div className="heart-button"><button type="button" className="heart-emoji" onClick={onHeartCountIncreaseButtonClick}>❤️</button><p>x {thought.hearts}</p></div>
  )
}

export default LikeButton