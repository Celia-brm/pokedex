import PropTypes from "prop-types";
import TypeColor from "./TypeColor.jsx";


function PokemonCard({pokemon})  {
    return (
    <>    
        <figure style={{background: TypeColor[pokemon.typeColor]}}>
        {pokemon.imgSrc ? <img className="imgPok" src={pokemon.imgSrc} alt="pokemon"/> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
        </figure>
     </>
    )
};

/* -------------------------------- prototype ------------------------------- */

PokemonCard.prototype= {
    pokemon : PropTypes.shape({
            name: PropTypes.string,
            imgSrc : PropTypes.string,  
                
   }).isRequired,
}



 export default PokemonCard;

  {/* <img src={pokemon.imgSrc} alt="pokemon"/> */}