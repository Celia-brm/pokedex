import PropTypes from "prop-types";

function PokemonCard({pokemon}) {
    return <figure>{
        pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="pokemon"/> : <p>???</p>}
        {/* <img src={pokemon.imgSrc} alt="pokemon"/> */}
        <figcaption>{pokemon.name}</figcaption>
    </figure>
};

/* -------------------------------- prototype ------------------------------- */

PokemonCard.prototype= {
    pokemon : PropTypes.shape({
            name: PropTypes.string,
            imgSrc : PropTypes.string,          
   }).isRequired,
}



 export default PokemonCard;