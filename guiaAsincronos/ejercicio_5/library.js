const https = require("https");

var url = "https://randomuser.me/api/?format=json";

function obtenerPersonaFake(callback){

    https.get(url, (resp) => {

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

module.exports = obtenerPersonaFake;
