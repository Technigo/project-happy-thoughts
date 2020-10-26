import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Detail } from "./Detail";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((json) => setPokemons(json.results));
  }, []);

  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <button onClick={() => setSelectedPokemon(pokemon)}>
              {pokemon.name}
            </button>
          </li>
        ))}
      </ul>

      {selectedPokemon && (
        <Detail name={selectedPokemon.name} url={selectedPokemon.url} />
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
