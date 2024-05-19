import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO); //connects to the MONGO key in .env
        console.log("Connected to the Mongo Database!")
      } catch (error) {
        throw error;
      }
};

mongoose.connection.on("disconnected", ()=> {
    console.log("Oh no! MongoDB got DISCONNECTED")
})

mongoose.connection.on("connected", ()=> {
    console.log("MongoDB CONNECTED")
})



app.listen(8008, ()=> {
    connect()
    console.log("Backend CONNECTED")

})