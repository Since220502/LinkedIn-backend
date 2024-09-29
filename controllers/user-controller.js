const { userService } = require("../services")


exports.createUser = (req,res,next) => {
    try {
       const register =  userService.userRegister(req)  
       
       res.status(200).send(register)
    } catch (error) {
        console.log("Creat User: ", error)
    }
}