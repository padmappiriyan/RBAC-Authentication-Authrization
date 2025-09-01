import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app= express();

//Built-in Middleware 
app.use(express.json());

//Start the Server
const PORT = process.env.PORT || 7002;

app.listen(PORT,()=>{
    console.log(`port is running in ${PORT}`);
})