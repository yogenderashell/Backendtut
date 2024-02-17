// require('dotenv').config()
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({path:'./'})

connectDB()


// import mongoose from "mongoose";
// import {DB_NAME} from './constants.js'
// ( async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//     }catch(error){
//         console.error("Error:   ",error);
//         throw err
//     }
// })()