const { idG } = require("../../lib/idG")
const { ResData } = require("../../lib/resData")
const {servisCars}= require("./servis")



class CarsController{
    #servisCars
    constructor(servisCars){
        this.#servisCars= servisCars

    }
    async getData(req,res,next){
       try {
        const data = await this.#servisCars.getCars()
        const myres= new ResData("get all cars", 200, data)
       
        res.status(200).json(myres)
        
       } catch (error) {

        
        
        next(error)
        
       }
    }
    async setData(req,res,next){
        try {
            const body = req.body
            if(body.modul&&body.year){
                

                const data = await this.#servisCars.getCars()
                
                const id = idG(data)
                const newData= {id:id, modul:body.modul,year: body.year}
                
                data.push(newData)
                
                
                await this.#servisCars.setCars(data)
               const regData=  new ResData("data created", 201, newData)
               res.redirect("/")
                
            }

        } catch (error) {
            next(error)
        }

    }
    async deletData(req,res,next){
        try {
            const id = Number(req.params.id)
           if(!isNaN(id)){
            const data= await this.#servisCars.getCars()
           const idFindIn= data.findIndex((el)=> el.id==id)
            if(idFindIn==-1){
                res.status(404).json(new ResData(" id not found", 404))
            }
            const newData= data.filter((el)=> el.id!=id)
            await this.#servisCars.setCars(newData)
            res.status(200).json(new ResData("sucsess deleted", 201))

           }else {
            throw error
           }

            
        } catch (error) {
            next(error)
        }
    }


}

const carsController= new CarsController(servisCars)




module.exports= {carsController}
