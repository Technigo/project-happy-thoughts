// import React, {useState, useEffect} from 'react'

// import { HelloWorld } from 'components/HelloWorld'

// export const App = () => {
// 	const [visible, setVisible] = useState(false)

// 	useEffect(() => {
// 		console.log("app mounted");
// 	}, []);

// 	return (
// 		<div>
// 			<button onClick={() => setVisible(prev => !prev)}>Show / Hide</button>
// 			{visible && <HelloWorld />}
// 		</div>
// 	);
// };

import React, {useState, useEffect} from 'react'

import { Detail } from 'components/Detail'
// import { Lecture } from 'components/Lecture'

export const App = () => {
	const [pokemons, setPokemons] = useState([])
	const [selectedPokemon, setSelectedPokemon] = useState('')

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon')
			.then(res => res.json())
			.then(json => setPokemons(json.results))
	}, [])

	return (
		// <Lecture/>
		<div>
			<ul>
				{pokemons.map(pokemon => (
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
	)
};
