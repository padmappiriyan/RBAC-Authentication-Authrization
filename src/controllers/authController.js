import User from "../models/userModel.js"
import bcrypt, { compare } from"bcrypt";
import jwt from 'jsonwebtoken';


export  const register = async(req,res)=>{
    try{
     const {username , password, role} =req.body;
     const hashedPassword= bcrypt.hashSync(password,10);
     const user = await User.create({
        username,
        password:hashedPassword,
        role
     });
     res.status(201).json({
        success:true,
        message:"user account has created successfully"

     })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
        console.log(error);
    }
     
}

export const login = async(req,res)=>{
    try{
    const {username,password}= req.body;
    const user = await User.findOne({username});
    if(!user){
         return res.status(401).json({
            success:false,
            message:"User has not found"
         })
        }
    const isMatch= await compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({
            success:false,
            message:"Invalid credential"
        });
    }
    const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECURE,{
        expiresIn:'1hr'
    });
     res.cookie("access_token", token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

    res.status(200).json({
        success:true,
        message:"user has logedIn successfully",
        token
    })

    }
    catch(error){
        console.log(error);
         res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
    
    
}