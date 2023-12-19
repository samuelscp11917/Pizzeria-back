//Importar lo que se va a usar
import express from "express"
import dotenv from "dotenv"
import { connectDatabase } from "./config/db.js"
import routerProduct from "./routes/product.routes.js"

//LLamar las funciones
dotenv.config()

const app = express()
app.use(express.json()) 
//Para acceder a las variables d eentorno
const PORT = process.env.PORT
connectDatabase()
app.use("/api", routerProduct)
app.listen(PORT,() => {
    console.log("Me estoy ejecutando en:" + PORT)
})