import express from"express";
import verifyToken from "../middlewares/authMiddleware.js";
import authorizeRoles from "../middlewares/roleMiddleware.js";
const router= express.Router();

//only Admin can access routes
router.get("/Admin",verifyToken,authorizeRoles("Admin"),(req,res)=>{
    res.json({
        message:"Welcome Admin"
    })
});



//Both Manager and Admin can Access the routes
router.get("/Manager",verifyToken,authorizeRoles("Manager","Admin"),(req,res)=>{
    res.json({
        message:"Welcome Manager"
    })
})


//All can Access this routes
router.get("/User",verifyToken,authorizeRoles("User","Manager","Admin"),(req,res)=>{
    res.json({
        message:"Welcome User"
    })
})

export default router;