// import React from 'react'

// export const LikeButton = (props) => {
//   // const {_id} = props

//   const handleClick = () => {
//     fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`, {
//       method: 'POST',
//       headers: {'content-type': 'application/json'},
//       body: ''
      
//     })
//     .then(() => {props.onLiked(props.id)})

//   }

//   return (
//     <button
//     onClick = {handleClick}>
//     <span role='img'>❤️</span>
//     </button>
//   )
// }