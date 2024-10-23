import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  return (
    <div>
      <h1>Pokémon Card</h1>
      <PokemonCard pokemon={pokemonList[1]} /> {/* Passa "Mew" como prop */}
    </div>
  );
}

export default App;