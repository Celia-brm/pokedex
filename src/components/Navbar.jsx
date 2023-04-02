
function Navbar({setPokemonIndex,pokemonList}){
  
  // const pokemonButton = pokemonList.map(pokemon => ( 
  // <button onClick={pokemon.name}>{pokemon.name}</button>
  // ))
        
  return(
        <div>
           {
            pokemonList.map((pokemon, index) => ( 
              <button key={pokemon.name} onClick={() => setPokemonIndex(index)}>{pokemon.name}</button>
              ))
           }
        </div>
     )
}
  
export default Navbar;




