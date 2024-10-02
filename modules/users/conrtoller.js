const { ResData } = require("../../lib/resData");
const {usersServis}= require("./servis")

class UsersController{
    #usersServis;
    constructor(usersServis){
        this.#usersServis= usersServis
    }

   async getUser(req,res,next){

    try {
        const resUsers= await this.#usersServis.getUsers();
        res.status(200).json(resUsers)
  
     } catch (error) {
         next(error)
        }
    }
// SETUSER BUL USERLERDI QOSIW USHIN ISLETEMIZ
   async setUser(req,res,next){
   try {
    const body = req.body
    const UserData= await this.#usersServis.getUsers();
    UserData.push(body)
    console.log(UserData);
    const resdata= await this.#usersServis.setUsers(UserData); 
    res.status(201).json(new ResData("created user", 201, body))

    
   } catch (error) {
    next(error)
    
   }

   }

   async deletUser(req,res,next){
    try {
        let id = req.params.id
        
        id = Number(id)
        if(!isNaN(id)){
            const data = await this.#usersServis.getUsers()
          
            const findIn= data.findIndex((el)=>el.id==id)
 
 
            if(findIn===-1){
                
                
                throw id
            }else{
                
                const deletData= data.splice(findIn,1)
                console.log(deletData); 
                await this.#usersServis.setUsers(data)
                res.status(200).json(new ResData("deleted", 200, deletData))
            }
        }else{
            
            
            throw id
        }
    
        
    } catch (error) {
        next(error)
    }

   }
    
   
   async updateUser(req,res,next){
    try {
        const id = Number(id)
        const body = req.body
        if ((!body.name&&!body.age)||isNaN(id)) {
            throw id
            
        }
        



        
    } catch (error) {
        next(error)
        
    }
   }
}



const usersController= new UsersController(usersServis)

module.exports= {usersController}


