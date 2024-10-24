import { useState } from "react";
import NavBar from "./components/NavBar"; // Certifique-se de que o caminho está correto

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

      {/* Adicione o componente NavBar aqui */}
      <NavBar
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
        pokemonList={pokemonList}
      />
    </div>
  );
}

export default App;