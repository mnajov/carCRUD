const {DataBaza}= require("../../lib/dbConnect")
const {resolve}= require("node:path")


class ServisCars{
    #dataBaza
    constructor(dataBaza){
        this.#dataBaza=dataBaza

    }

    async getCars(){
        const resData = await this.#dataBaza.read()
        return resData
    }
    async setCars(data){

        await this.#dataBaza.write(data)
        

    }

}
const db = new DataBaza(resolve("db", "cars.json"))
const servisCars= new ServisCars(db)

module.exports= {servisCars}