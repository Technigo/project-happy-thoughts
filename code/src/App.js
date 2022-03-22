import React, { useState, useEffect } from 'react'


export const App = () => {
  const [recentThoughts, setRecentThoughts] = useState([])

  useEffect (() => {
  fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
  .then(res => res.json())
  .then(json => setRecentThoughts(json.results) )  


  }, [])

  return ( 
    <div>
        <ul>
            {recentThoughts.map(thoughts => (
            <li key={thoughts._id}>{thoughts._id}
            <div class="card">{thoughts.message}</div></li>
          ))}
        </ul>
    </div>
  )
  }

  export default App;




  // import Detail from 'Components/Detail'
// import RecentThoughts from 'Components/RecentThoughts'
// const [selectedPokemon, setSelectedPokemon] = useState();

  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon')
  //   .then(res => res.json())
  //   .then(json => setPokemons(json.results))
  // }, [])

// return (

//   <div>
//     <ul>
//       {pokemons.map(pokemon => (
//         <li key={pokemon.name}>
//           <button onClick={()=> setSelectedPokemon(pokemon)}>
//             {pokemon.name}</button></li>
//       ))}
      
//     </ul>

//     {selectedPokemon && 
//     <Detail name={selectedPokemon.name} url={selectedPokemon.url}/>}
//   </div>

// )
// }


