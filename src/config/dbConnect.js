import mongoose from "mongoose"

 const dbConnect= async()=>{
    try{
          const connect=mongoose.connect(process.env.CONNECTION_STRING);
          console.log(`DataBae connected: `);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
       
}

export default dbConnect;