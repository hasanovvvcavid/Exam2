import express from "express";
import "dotenv/config"
import cors from "cors"
import "./src/db/dbConnection.js"
import productRouter from "./src/Routers/productRouter.js";


const app = express()

const port = process.env.PORT || 3001

app.use(express.json())

app.use(cors())

app.use("/products", productRouter)

app.listen(port, ()=>{
    console.log(`Server is running http://localhost:${port} `);
})