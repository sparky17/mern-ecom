const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const connectDB = async ()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log('\x1b[32m%s\x1b[0m',`Mongo db is connect at ${process.env.MONGO_URI}`)
       }catch(error){
            console.error(`Error ${error}`)
       }
}
module.exports=connectDB;