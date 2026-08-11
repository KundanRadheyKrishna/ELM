import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/db.js";

dotenv.config();

const port = process.env.PORT

const app = express();

connectDB()
.then(() => {
    app.listen(port,()=>{
        console.log(`server is running ${port}`)
    })
    app.on("error",(error)=>{
        console.log("ERROR",error)
        throw error
    })
}).catch((err) => {
    console.log("MONGODB CONNECTION FAILD !!! ",err)
});
