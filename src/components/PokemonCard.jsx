function PokemonCard({pokemon}) {
    return <figure>{
        pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="pokemon"/> : <p>???</p>}
        {/* <img src={pokemon.imgSrc} alt="pokemon"/> */}
        <figcaption>{pokemon.name}</figcaption>
    </figure>
};


// function Cart(props) {
//     const { product, calculate } = props;
  
//     return `You bought ${product.quantity} ${product.name} for ${calculate(product)}€`;
//   }


 export default PokemonCard;