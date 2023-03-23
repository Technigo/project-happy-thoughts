/* eslint-disable max-len */
// /* eslint-disable max-len */
// import React, { useState } from 'react';

// export const LikeButton = (props) => { // props passed from parent component (app)
//   // eslint-disable-next-line max-len
//   const [like, setLike] = useState(false); // 'Like' is the state we are changing, and it's set to false first
// }

// // eslint-disable-next-line max-len
// const onAddNewLikeChange = () => { // this function allows the likes-count to update in the App component
//   setAddNewLike(true)
// }

// const onButtonClick = (event2) => { // This function extends from here down to line...73
//   event2.preventDefault(); // the function is called when the 'like' button is clicked. It sends
//   // a POST request to the endpoint using the API to register the user's 'like' to the database.

//   // eslint-disable-next-line no-underscore-dangle
//   //   const like = thoughtsList.find((newThought) => newThought._id === thoughtId)
//   //   const addNewLike = like.hearts + 1

//   if (!like) { // this ensures the button click only sends a 'like' to the API endpoint if
//     const options = { // the button has not been clicked (ie. the thought has not been liked) already
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: '' // sending with no body
//     }

//     fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/THOUGHT_ID/like', options)
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.error(error))
//       .finally(() => setLike(true), onAddNewLikeChange()); // if the 'like' button is clicked/state,
//   // is true, the like-count will increase in the app
//   }

//   return (
//     <div>
//       <button
//         type="button"
//         className="likeButton"
//         style={{
//           backgroundColor: like ? '#FFADAD' : '',
//           color: like ? 'grey' : ''
//         }}
//         value={event2}
//         onClick={onButtonClick}>
//         <span>❤️</span>
//       </button>
//       <p className="number-of-likes">x {event2.like}</p>
//     </div>
//   )
// }

// function handleLikeClick(id) {
//   const likedThought = thoughtsList.find((thought) => thought._id === id)
//   const updatedLikes = likedThought.hearts + 1

//   fetch(`https://happy-thoughts-api.herokuapp.com/thoughts/${id}/like`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: ''
//   }).then(() => {
//     setThoughtsList(thoughtsList.map((thought) => {
//       if (thought._id === id) {
//         return { ...thought, hearts: updatedLikes }
//       } else {
//         return thought
//       }
//     }))
//   })

//    Use the 'like' variable here
//    console.log('Liked thought:', likedThought.message, 'with', updatedLikes, 'hearts')
//  }
//

// const HandleLike = (thoughtId) => {
//   fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, { method: 'POST' })
//     .then((response) => response.json())
//     .then((data) => {
//       const UpdateLikes = thoughtsList.map((like) => {
//         if (like._id === data._id) {
//           like.hearts += 1
//           return like
//         } else { return like }
//       })
//       setThoughtsList(UpdateLikes)
//     })
// };
