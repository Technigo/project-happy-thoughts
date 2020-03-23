// import React, { useState, useEffect} from "react";
// import {Detail} from "./Detail"

// export const Feed = () => {
//   const [thoughts, setThoughts] = useState([])
//   const [selected, setSelected] = useState ()

//   useEffect (() => {
// fetch('https://technigo-thoughts.herokuapp.com/')
// .then(res => res.json())
// .then(json => setThoughts(json))
//   }, []);
  
//   return (
//     <div>
//       <ul>
//         {thoughts.map(thought => (
//             <li key={thought.message}>
//            <button onClick={() => setSelected(thought)}>
//              {thought.message}
//            </button> </li>
//         ))}
//         </ul>
//         {selected && <Detail />}
//     </div>
//   );

  
// };