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
const NavBar = ({ setPokemonIndex, pokemonList }: NavBarProps) => {
    const handleButtonClick = (index: number) => {
        setPokemonIndex(index); // Função passada como prop
        if (pokemonList[index].name.toLowerCase() === 'pikachu') { // Verifica se o Pokémon selecionado é Pikachu
            alert('pika pikachu !!!'); // Alerta ao selecionar Pikachu
        } 
    }; 

    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <button
                    key={pokemon.name} // Assumindo que cada `name` é único
                    type="button"
                    onClick={() => handleButtonClick(index)} // Passando `index` como número
                >
                    {pokemon.name}
                </button>
            ))}
        </div>
    );
};

export default NavBar;