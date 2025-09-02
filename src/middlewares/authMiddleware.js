import jwt from "jsonwebtoken";

const verifyToken = (req,res,next)=>{

const token =req.cookies.access_token;
console.log(token);
if(!token){
     return res.json({
            success:false,
            message:"Unauthorized"
            })
}
try{
 

  const decode=jwt.verify(token,process.env.JWT_SECURE);
  req.user = decode;
  next();
}
catch(error){
    console.log(error);
    res.status(400).json({
        message:"Token is Invalid"
    })
}

}

export default verifyToken;