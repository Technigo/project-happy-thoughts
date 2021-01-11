// import React, { useState, useEffect } from "react";

// import RECENT_THOUGHTS from "urls";

// const ThoughtList = () => {
//   const [thoughts, setThoughts] = useState([]);

//   useEffect(() => {
//     fetch(RECENT_THOUGHTS)
//       .then(res => res.json())
//       .then(json => setThoughts(json.message));
//     // .then(json => console.log(json));

//     //the second argument [] prevents the fetch to happen after every state change
//   }, [])

//   return (
//     <div>
//       <ul>
//         {thoughts.map(thought => {
//           <li key={thoughts.name}>{thoughts.message}</li>
//         })}
//       </ul>
//     </div>
//   );
// };

// export default ThoughtList;