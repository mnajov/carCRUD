const {Router}= require("express")
const {usersController} = require("./conrtoller")
const routUser= Router()
routUser.get("/", usersController.getUser.bind(usersController) )
routUser.post("/post", usersController.setUser.bind(usersController) )
routUser.delete("/delet/:id", usersController.deletUser.bind(usersController) )

// routUser.get("/", (req,res,next)=>{
//     res.status(200).json({message:"isledddd ddddduser ROUT>>>>"})
// })

module.exports={routUser}