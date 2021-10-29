// import React, { useEffect, useState } from 'react'
// import moment from 'moment';

// import { API_URL } from '../API/url';

// export const Comments = () => {
//     const [thoughts, setThoughts] = useState([]);
    
    
//       useEffect (() => {
//         fetch (API_URL)
//         .then((res) => res.json ())
//         .then ((data) => setThoughts(data));
//       }, []);


// return (
//     <div>
//       {thoughts.map((thought) => (
//       <div key={thought._id}> 
//       <p>{thought.message}</p> 
//       <button> &hearts; {thought.hearts}</button>
//       <p>
//         Created at: {moment(thought.createdAt).fromNow()}
//         </p>
//       </div>
//       ))}
//     </div>
//   );
// };

// export default HappyComments;