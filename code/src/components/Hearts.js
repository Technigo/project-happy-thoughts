/* eslint-disable no-underscore-dangle */
import React from 'react';

export const Hearts = ({ thought, fetchThoughts }) => {
  // thoughtInput, setThoughtInput also added when commented out code used
  const onHeartCountIncreaseButtonClick = () => {
    const options = {
      method: 'PATCH'
    }
    console.log('options', options)

    // fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`, options)

    fetch(`https://fiona-klacar-project-happy-thoughts-api.onrender.com/thoughts/${thought._id}/like`, options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
      .finally(() => fetchThoughts())
    console.log('heart count increase')
  }

  // ANOTHER WAY OF DOING IT:
  //   fetch(`https://fiona-klacar-project-happy-thoughts-api.onrender.com/thoughts/${thought._id}/like`, options)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       const updatedThoughts = thoughtInput.map((like) => {
  //         if (like._id === data.response._id) {
  //           like.hearts += 1;
  //         }
  //         return like;
  //       });
  //       setThoughtInput(updatedThoughts); // Update the state with the updated array
  //       fetchThoughts();
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() => console.log('heart count increase'));
  // };

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