const rp = require("request-promise");

var options ={
    uri:"https://official-joke-api.appspot.com/jokes/programming/random",
    json:true
}


function obtenerChiste(){
    return rp(options);
}

module.exports = obtenerChiste;
