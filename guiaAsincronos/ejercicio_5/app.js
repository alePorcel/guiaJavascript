
const obtenerPersonaFake = require("./library");

// Codigo funcion callback

function funcionCallback(data){
    let persona = data.results[0];
    
    console.log("Género: " + persona.gender);
    console.log("Nombre: " + persona.name.first + " " + persona.name.last);
    console.log("Email: " + persona.email);
    console.log("Usuario: " + persona.login.username);
    console.log("Password: " + persona.login.password);
}

// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(funcionCallback);
