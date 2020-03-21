// import React, { useState, useEffect } from 'react'

// export const Thought = props => {
//   const { thoughts, setThoughts } = props;
//   useEffect(() => {
//     fetch('https://technigo-thoughts.herokuapp.com/')
//       .then(res => res.json())
//       .then(json => setThoughts(json))
//   }, [])
//   return (
//     <div>
//       <Thought
//         {thoughts.map(json =>
//           <li key={json._id}>{json.message}</li>)}
//         {thoughts} />
//     </div>
//   )
// }

