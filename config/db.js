const mongoose = require('mongoose');
require('dotenv').config({path: '.env'});

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB,{
    })
    console.log("Connected with MongoDB")
    } catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB