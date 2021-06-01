//Importo el modelo del servidor
const ServidorModelo=require('./models/ServidorModelo.js');

//Se trae el paquete de enviroment
require('dotenv').config();

//Instancio (Saco una fotocopia de mi clase servidormodelo)
let servidor=new ServidorModelo();

//Levanto el servidor
servidor.despertarServidor();
 
