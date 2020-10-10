
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake().then(x => {
    let person = x.results[0];
    
    for (const property in person) {
        if(typeof(person[property])  === 'object'){
            let obj = person[property];
            for (const propiedad in obj) {
                console.log(`${propiedad}: ${obj[propiedad]}`);
            }
        }else{
            console.log(`${property}: ${person[property]}`);
        }
    }
});
