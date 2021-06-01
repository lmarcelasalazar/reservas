//Importo la funcion validationresult de express validator
const { body, validationResult } = require('express-validator');

//importar de express la variable request y response
const { request, response } = require('express');

//creo una funcion para detectar errores
function validarPeticion(peticion=request,respuesta=response, next) {
    
    let errores = validationResult(peticion);
    if (!errores.isEmpty()) {
        
        return (respuesta.status(400).json(errores));

    }
    next();

}

module.exports={validarPeticion}
