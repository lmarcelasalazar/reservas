//Traigo el metodo express para personalizar mis rutas
const { Router }=require('express');

//Importar(Traer) los controladores
const { buscarReservas }=require('../controllers/controladorReservas.js');
const { agregarReserva }=require('../controllers/controladorReservas.js');
const { editarReserva }=require('../controllers/controladorReservas.js');
const { eliminarReserva }=require('../controllers/controladorReservas.js');

//Importar las validaciones
const {validarPeticion}=require('../validations/validaciones.js');

//Importar el metodo check del express validator
const {check}=require('express-validator');

//Crear la lista de validaciones (arreglo)
let validaciones = Array(
    check('nombre',"campo obligatorio").not().isEmpty(),
    check('edad',"campo obligatorio").not().isEmpty(),
    check('identificacion',"campo obligatorio").not().isEmpty(),
    check('fecha',"campo obligatorio").not().isEmpty(),
    check('habitaciones',"campo obligatorio").not().isEmpty(),
    validarPeticion
);

//Personalizo mis rutas: 
const rutas=Router();

//Listado de rutas
rutas.get('/reservas',buscarReservas);
rutas.post('/reserva/nueva',validaciones,agregarReserva);
rutas.put('/reserva/editar/:id',editarReserva);
rutas.delete('/reserva/eliminar/:id',eliminarReserva);

//Exporto las rutas
module.exports=rutas;