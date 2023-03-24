// import React from 'react';
// // import { SingleThought } from './components/SingleThought';

// export const ThoughtsList = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
//   return (
//     <form onSubmit={onFormSubmit}>
//       <h1>What&apos;s making you happy right now?</h1>
//       <textarea value={newThought} onChange={onNewThoughtChange} />
//       <button className="submitButton" type="submit"> ❤️ Send happy thought! ❤️ </button>
//     </form>
//   )
// }

// HERE IS THOUGHTS LIST - this is where the mapping of the thoughts is done
// TRY THIS

// import React from 'react';
// import { SingleThought } from './components/SingleThought';

// export const ThoughtsList = ({ thoughtsList }) => {
//   return thoughtsList.map((message) => {
//     // eslint-disable-next-line no-underscore-dangle
//     return (<SingleThought thought={message} />)
//   })
// }