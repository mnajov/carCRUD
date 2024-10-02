const {Router}=require("express")
const {routUser}= require("./users/routs")
const {routCars}= require("./cars/routs")
const rout= Router()




rout.use("/user",routUser)
rout.use("/car", routCars)



module.exports={rout}