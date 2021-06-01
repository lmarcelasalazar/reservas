const mongoose = require('mongoose');

async function conectarBD() {
    
    try{
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log("exito conectandome a BD");
    }
    catch(error){
        console.log("error: "+error);
    }

}

module.exports={conectarBD};