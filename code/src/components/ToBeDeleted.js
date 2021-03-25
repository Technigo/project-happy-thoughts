// import React, { useEffect, useState } from "react"
// import { API_URL_LIKES } from "reusable/url"


// export const onHeartLikes = () => {
//   const [heartLike, setHeartLike] = useState (0)
  
//   useEffect(() => {
//     fetch(API_URL_LIKES)
//     .then(res => res.json())
//     .then(json => {
//       setHeartLike(json);
//     });
//   }, []); // can I delete all after comma , ? it should always be called. 



//   return (
//     <div>
//       <button onClick={() => setHeartLike(heartLike + 1)}>
//       </button>
//     </div>

//   )

// }


// // text.hearts = `&#10084;&#65039;${heartLike}` // instead what can I write?