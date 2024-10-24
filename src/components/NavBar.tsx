interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

// Definindo o componente como uma função normal com as props tipadas
const NavBar = ({
	pokemonIndex,
	setPokemonIndex,
	pokemonList,
}: NavBarProps) => {
	const handlePrev = () => {
		if (pokemonIndex > 0) {
			setPokemonIndex(pokemonIndex - 1);
		}
	};

	const handleNext = () => {
		if (pokemonIndex < pokemonList.length - 1) {
			setPokemonIndex(pokemonIndex + 1);
		}
	};

	return (
		<div>
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
};

export default NavBar;
