const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://Gobitha:Sgobitha1998@test.fp6jb.mongodb.net/Play4Rent' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose