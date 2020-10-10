
const obtenerPokemon = require("./library");
const listar_Habilidades = (data) => {
    let habilidades = data.abilities;
    console.log("Pokemon: " + data.forms[0].name);
    console.log("Habilidades: ");
    habilidades.forEach(habilidad => {
        console.log("- " + habilidad.ability.name);
    });
}

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
let pokemon = "pikachu";

obtenerPokemon(pokemon).then(data => {
    listar_Habilidades(data);
}).catch(err => {
    console.log("Hubo un error");
});
