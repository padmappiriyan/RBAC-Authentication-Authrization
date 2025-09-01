import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import authRoutes from "./routes/authRoutes.js"

dotenv.config();


const app= express();
dbConnect();

//Built-in Middleware 
app.use(express.json());
app.use("/api/auth",authRoutes);

//Start the Server
const PORT = process.env.PORT || 7002;

app.listen(PORT,()=>{
    console.log(`port is running in ${PORT}`);
})