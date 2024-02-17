// require('dotenv').config()
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({path:'./'})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed!!!:",err)
})


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