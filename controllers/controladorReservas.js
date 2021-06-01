//Importar de express las variables request y response
const { request, response } = require('express');

//Importar el modelo de datos del API
const ReservasModelo=require('../models/ReservasModelo.js');


//Se crean funciones para cada uno de los servicios que prestara el API
//(El menu del restaurante)

async function buscarReservas(peticion=request,respuesta=response) {

    let datosConsultados=await ReservasModelo.find();

    respuesta.json({
        estado: true,
        mensaje:datosConsultados
      });
}

async function agregarReserva(peticion=request,respuesta=response) {

    let datosReserva=peticion.body;

    let reserva=new ReservasModelo(datosReserva);
    await reserva.save();

    respuesta.json({
        estado: true,
        mensaje: 'Reserva agregada con exito',
        datos:datosReserva
      });
}

async function editarReserva(peticion=request,respuesta=response) {

    let id=peticion.params.id;
    let datosReserva=peticion.body;
    await ReservasModelo.findByIdAndUpdate(id,datosReserva);

    respuesta.json({
        estado: true,
        mensaje: 'Reserva actualizada con exito!'
      });
}

async function eliminarReserva(peticion=request,respuesta=response) {
    let id=peticion.params.id;
    await ReservasModelo.findByIdAndDelete(id);

    respuesta.json({
        estado: true,
        mensaje: 'Reserva eliminada con exito'
      });
}

//Exporto todas las funciones hacia el archivo de rutas
module.exports={
    buscarReservas,
    agregarReserva,
    editarReserva,
    eliminarReserva
}