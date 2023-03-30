import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard"
import Navbar from './components/Navbar'
// import React from 'react';
import { useEffect } from "react";


const pokemonList = [
 
{
  name: "bulbasaur",
  imgSrc:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  typeColor : "fire",
  },

  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    typeColor : "water",
    },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      typeColor : "fighting",
    },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    typeColor : "electric",
    },
  {
    name: "mew",
    typeColor:"normal",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  useEffect(
    () => {
     alert("hello pokemon trainer :)");
     },
    []
  );

  return (
      <div>
        
        <Navbar pokemonIndex = {pokemonIndex} setPokemonIndex = {setPokemonIndex} pokemonList={pokemonList}/>        
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      </div>
    )
}

  export default App;
  





  
  // const pokemonList = [
  //   {
  //     name: "bulbasaur",
  //     imgSrc:
  //       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  //   },
  //   {
  //     name: "mew",
  //   },
  // ];

  // const pkm = pokemonList[1]; 

  // return (
  //   <div>
  //     <PokemonCard />
  //   </div>
  // );


