import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
       
    },
    role:{
        type:String,
        enum:["admin","user","manager"]
    }
},{
    timestamps:true
})

const user= mongoose.model("users",userSchema);

export default user;