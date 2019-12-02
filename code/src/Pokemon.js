// import React, { useState, useEffect } from "react";

// export const App = () => {
//   const [pokemons, setPokemons] = useState([]);
//   const [selectedPokemon, setSelectedPokemon] = useState();

//   useEffect(() => {
//     fetch("https://pokeapi.co/api/v2/pokemon")
//       .then(res => res.json())
//       .then(json => setPokemons(json.results));
//   }, []);

//   return (
//     <div>
//       <ul>
//         {pokemons.map(pokemon => {
//           return (
//             <li key={pokemon.name}>
//               <button onClick={() => setSelectedPokemon(pokemon)}>
//                 {pokemon.name}
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//       {selectedPokemon && (
//         <HeartClick name={selectedPokemon.name} url={selectedPokemon.url} />
//       )}
//     </div>
//   );
// };

// import React, { useState, useEffect } from "react";

// export const HeartClick = props => {
//   const [details, setDetails] = useState();

//   useEffect(() => {
//     fetch(props.url)
//       .then(res => res.json())
//       .then(json => {
//         console.log(json);
//         setDetails(json);
//       });
//   }, [props]);
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       {details && <img src={details.sprites.front_default} alt="pokemon" />}
//     </div>
//   );
// };
