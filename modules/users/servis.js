const {ResData}= require("../../lib/resData")
const {DataBaza}= require("../../lib/dbConnect")
const {resolve}=require("node:path")

class UsersServis{
    #DataBaza;
    constructor(DataBaza){
        this.#DataBaza= DataBaza
    }
//  BUL DATABAZADAN BERILGEN PATH DAGI MAGLUMATLARDI AKELEDI 
// PROMIS QAYTARADI
    async getUsers(){
        const data = await this.#DataBaza.read()
        const res = data


        return res

    }
    async setUsers(data){
        await this.#DataBaza.write(data)
        

    }

    /// SEERVIS BOLSA USI ASTINAN BASLAP METODLAR JAZA BERSE BOLADI
}

const db = new DataBaza(resolve("db","users.json"))



const usersServis= new UsersServis(db)


module.exports= {usersServis}

