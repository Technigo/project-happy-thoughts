import React, { useState, useEffect } from 'react'
import { Detail } from './components/Detail'

export const App = () => {

  const [pokemons, setPokemons] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState()

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => res.json())
      .then(json => setPokemons(json.results))
  }, [])

  return (
    <>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}><button onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button></li>
        ))}
      </ul>

      {selectedPokemon && <Detail name={selectedPokemon.name} url={selectedPokemon.url} />}
    </>
  )
}
