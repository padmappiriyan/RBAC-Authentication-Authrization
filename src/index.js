import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app= express();

//Built-in Middleware 
app.use(express.json());