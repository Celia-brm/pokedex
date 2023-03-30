
function Navbar({pokemonIndex, setPokemonIndex,pokemonList}){

    
  const incrimClick = () => {
    setPokemonIndex(pokemonIndex + 1)
  }
  const decrimClick = () => {
    setPokemonIndex(pokemonIndex - 1)
  }

    return(
        <div>
            {
            pokemonIndex > 0 ? <button onClick={decrimClick}>précédent</button> : ""
            }
            {
            pokemonIndex < pokemonList.length - 1 ? <button onClick={incrimClick}>suivant</button> : ""
            }
        </div>
     )
    
}

    

export default Navbar;