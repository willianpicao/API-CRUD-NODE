const mongoose = require('mongoose')

const connectToDatabase= async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@introtonodejs.hdppo48.mongodb.net/database?retryWrites=true&w=majority`, (error)=>{
        if (error){
            return console.log("Ocorreu erro ao conectar com bd", error);
        }else{
            console.log("Conexao feita com sucesso");
        }
    })
}

module.exports= connectToDatabase