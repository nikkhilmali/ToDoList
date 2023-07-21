import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;



const Connection = ()=>{

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@todolist.pewdc95.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI,{useNewUrlParser: true});

    mongoose.connection.on('connected',()=>{
        console.log('Database Succesfull Connected');
    });

    mongoose.connection.on('disconnected',()=>{
        console.log('Database Disconnected');
    });

    mongoose.connection.on('error',(err)=>{
        console.log('Error while connecting the Database',err.message);
    });
}

export default Connection;