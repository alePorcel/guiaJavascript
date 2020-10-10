
const obtenerChiste = require("./library");

// Codigo funcion callback

function callback(chiste){
    chiste = chiste[0];
    console.log("- " + chiste.setup + "\n" + "- "+ chiste.punchline);
}

// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
obtenerChiste(callback);
