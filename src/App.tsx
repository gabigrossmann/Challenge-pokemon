import { useState } from "react";

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);

	const pokemonList = [
		{
			name: "bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		},
		{
			name: "charmander",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
		},
		{
			name: "squirtle",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
		},
		{
			name: "pikachu",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
		},
		{
			name: "mew",
		},
	];

	const handlePrev = () => {
		setPokemonIndex(pokemonIndex - 1);
	};

	const handleNext = () => {
		setPokemonIndex(pokemonIndex + 1);
	};

	const currentPokemon = pokemonList[pokemonIndex];

	return (
		<div>
			<figure>
				{currentPokemon.imgSrc ? (
					<img src={currentPokemon.imgSrc} alt={currentPokemon.name} />
				) : (
					<p>???</p>
				)}
				<figcaption>{currentPokemon.name}</figcaption>
			</figure>

			<button type="button" onClick={handlePrev} disabled={pokemonIndex === 0}>
				Précédent
			</button>
			<button
				type="button"
				onClick={handleNext}
				disabled={pokemonIndex === pokemonList.length - 1}
			>
				Suivant
			</button>
		</div>
	);
}

export default App;
