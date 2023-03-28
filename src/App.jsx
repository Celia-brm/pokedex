import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard"

function App() {
  
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

// const pkm = pokemonList[1]; 
return <PokemonCard pokemon={pokemonList[0]}/>;


// return (
//   <div>
//     <PokemonCard />
//   </div>
// );

}
export default App;
