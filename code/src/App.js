import React, { useState, useEffect } from 'react'
import { Detail } from './components/Detail'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faHeart, faPaperPlane, faSpinner)

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
          <li key={index}><button onClick={() => setSelectedPokemon(pokemon)}><FontAwesomeIcon icon="heart" />{pokemon.name}</button></li>
        ))}
      </ul>

      <FontAwesomeIcon icon="paper-plane" />
      <FontAwesomeIcon icon="spinner" className="fa-spin" />
      {selectedPokemon && <Detail name={selectedPokemon.name} url={selectedPokemon.url} />}
    </>
  )
}
