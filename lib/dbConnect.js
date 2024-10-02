const fs = require("node:fs/promises")

class DataBaza{
    #path;
    constructor (path){
        this.#path = path
    }

    async write(data){
        await fs.writeFile(this.#path,JSON.stringify(data,null,4))

    }
    async read(){
       const res= JSON.parse(await fs.readFile(this.#path))
       return res
    }
}

module.exports= {DataBaza}