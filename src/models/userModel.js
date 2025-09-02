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
        enum:["Admin","User","Manager"]
    }
},{
    timestamps:true
})

const user= mongoose.model("users",userSchema);

export default user;