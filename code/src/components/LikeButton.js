// import React, { useEffect, useState } from 'react';

// const LikeButton = ({ thought }) => {
//   const [likes, setLikes] = useState(0);

//   useEffect(() => {
//     fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like')
//       .then((res) => res.json())
//       .then((data) => setLikes(data));
//   }, []);

//   const onLikeButtonClick = (event) => {
//     event.preventDefault();
//     const options = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     };

//     fetch(
//       'https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like',
//       options
//     )
//       .then((res) => res.json())
//       .then((data) => setLikes(data));
//   };

//   return (
//     <button type='button' onClick={(event) => onLikeButtonClick(event)}>
//       &hearts; {thought.hearts}
//     </button>
//   );
// };

// export default LikeButton;
