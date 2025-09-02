import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import cookieParser from 'cookie-parser';

dotenv.config();


const app= express();
dbConnect();

//Built-in Middleware 
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);


//Start the Server
const PORT = process.env.PORT || 7002;

app.listen(PORT,()=>{
    console.log(`port is running in ${PORT}`);
})