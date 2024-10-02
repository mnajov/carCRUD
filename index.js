const express= require("express")
const cors= require("cors")
const {rout}= require("./modules/routs")
const app= express()
const {config}= require("dotenv")
const {resolve}= require("node:path")

const ejs= require("ejs")

const path= require("node:path")
config()
const PORT =Number(process.env.PORT)


const { servisCars } = require("./modules/cars/servis")

app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())
app.use(express.static(resolve("public")))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');





app.get("/",async (req,res,next)=>{

  const carData =await servisCars.getCars()
  console.log(carData);
  
    res.render('index', {car: carData})
})
//ASOSIY ROUT MODULS ISHIDAGI
app.use("/api",rout)




///  YOQ API JOVOB QAYTARADI
app.use((req,res,next)=>{ 
   return res.status(404).json({message:"bunday api yoq"})

})


// ERROR HANDLER
app.use((err,req,res,next)=>{
    res.status(500).json(err)
})
 

app.listen( PORT, ()=>{
    console.log("http://localhost:"+PORT);
    
})