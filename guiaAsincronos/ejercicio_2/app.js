
const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido
obtenerChiste().then(chiste => {
    chiste = chiste[0];
    console.log("- " + chiste.setup + "\n" + "- "+ chiste.punchline);
});
