
const obtenerPokemon = require("./library");

// Codigo funcion callback

function funcionCallback(data){
    let habilidades = data.abilities;
    console.log("Pokemon: " + data.forms[0].name);
    console.log("Habilidades: ");
    habilidades.forEach(habilidad => {
        console.log("- " + habilidad.ability.name);
    });

}

// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido
let pokemon = "pikachu";

obtenerPokemon(pokemon, funcionCallback);
