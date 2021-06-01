//Se trae el paquete express
const express = require('express');

//se trae cors
const cors = require('cors');

//Se traen las rutas
const rutas=require('../routes/rutasReservas.js');

//Se trae la conexion a BD
const { conectarBD }=require('../database/conexion');

class ServidorModelo {

    constructor(){
        //Atributo(variable) global para configurar el servidor
        this.app=express();
        this.despertarBaseDatos();
        this.crearMiddlewares();
        this.llamarRutasAPI();
    }

    //Metodos (que acciones hace mi servidor)
    despertarServidor(){
        //Levantamiento del servidor (abrimos el restaurante)
        this.app.listen(process.env.PORT, function() {
            console.log(`Estoy conectado al puerto ${process.env.PORT}`);
          });
    }

    llamarRutasAPI(){
        this.app.use('/',rutas);
    }

    despertarBaseDatos(){
        conectarBD();
    }

    crearMiddlewares(){
        this.app.use(cors());
        this.app.use(express.json());//JSON
        this.app.use(express.urlencoded({extended:true}));//Recibir datos

    }

}

module.exports=ServidorModelo;