// import react from 'react';

// export QueryThoughts = () => {
//   const [queryThoughts, setQueryThoughts] = useState([]);
//   const [sortField, setSortField] = useState('hearts');
//   const [sortOrder] = useState('desc');
//   const THOUGHTS_QUERY_URL = `https://happythoughts-only.herokuapp.com/thoughts?sortField=hearts&sortOrder=desc`;
//   // Change to /thoughts?sortField=${sortField}&sortOrder=${sortOrder}

//   // Trying one more fetch with the URL that includes query parameters
//   useEffect(() => {
//     fetch(THOUGHTS_QUERY_URL)
//       .then((res) => {

//         return res.json();
//       })
//       .then(() => {
//         setSortField(false)
//         setQueryThoughts(queryThoughts);
//       });

//   }, [queryThoughts]);

//   return (
//     {/* {queryThoughts.map(querythought => {
//           return (
//             <div className="thoughts-box" key={querythought._id}>
//               <p className="thoughts" tabIndex="0">
//                 {querythought.message}
//               </p>
//               <p className="name" tabIndex="0">
//                 Posted by: {querythought.name}
//               </p>
//               <div className="thoughts-footer">
//                 <Likeathought
//                   key={querythought._id}
//                   id={querythought._id}
//                   onThoughtLiked={onThoughtLiked}
//                   hearts={querythought.hearts}
//                 />
//                 <p className="time-stamp" tabIndex="0">
//                   {moment(querythought.createdAt).fromNow()}
//                 </p>
//                 {errorMessage}
//               </div>
//             </div>
//           );
//         })
//         } */}
//   )
// }