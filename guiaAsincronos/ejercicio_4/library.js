const rp = require("request-promise");

function obtenerPokemon(nombrePokemon){

    var options ={
        uri: "https://pokeapi.co/api/v2/pokemon/" + nombrePokemon,
        json:true
    }

    return rp(options);

}

module.exports = obtenerPokemon;
