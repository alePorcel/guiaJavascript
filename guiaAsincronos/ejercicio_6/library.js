const rp = require("request-promise");

var options ={
    uri:"https://randomuser.me/api/?format=json",
    json:true
}

function obtenerPersonaFake(){
    return rp(options);
}

module.exports = obtenerPersonaFake;
