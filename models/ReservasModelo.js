//Traigo de mongoose el modelo y el schema de datos
const {model, Schema}=require('mongoose');

//CReo el esqueleto de datos que va a tener cada documento (bolsa) de mi coleccion
const ReservaEsqueleto=Schema({

    nombre:{
        type:String,
        required:true
    },
    edad:{
        type:Number,
        required:true,
    },
    identificacion:{
        type:Number,
        required:true
    },
    fecha:{
        type:Date,
        required:true
    },
    habitaciones:{
        type:Number,
        required:true
    }

});

module.exports=model('Reserva',ReservaEsqueleto);