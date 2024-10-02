const {Router}= require("express")
const routCars= Router()
const {carsController}= require("./controller")
//VIEW APILAR BUL TOMENDE

routCars.get("/reg",(req,res,next)=>{
    try {
        res.render("reg")        
    } catch (error) {
        next(error)
        
    }
})




//  API LAR TOMENDE 

routCars.get("/",carsController.getData.bind(carsController) )
routCars.post("/post", carsController.setData.bind(carsController))
routCars.delete("/delet/:id", carsController.deletData.bind(carsController))





module.exports={routCars}