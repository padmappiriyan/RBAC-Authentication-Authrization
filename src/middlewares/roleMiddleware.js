const authorizeRoles = (...allowedRoles) => {
    
    return (req, res, next) => {
        console.log(req.user.role);
        if (!allowedRoles.includes(req.user.role)) {
           
            return res.status(403).json({
                message: "Access is denied"
            });
        }
          next();
    };
   
};

export default authorizeRoles;
