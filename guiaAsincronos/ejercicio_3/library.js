const https = require("https");

var url = "https://pokeapi.co/api/v2/pokemon/";

function obtenerPokemon(nombrePokemon, callback){

    let urlPokemon = url + nombrePokemon;

    https.get(urlPokemon, (resp) => {

        let data = "";

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            callback(JSON.parse(data));
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });;

}

module.exports = obtenerPokemon;
