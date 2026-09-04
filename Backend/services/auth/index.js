import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./configs/db.js"
dotenv.config()

const app = express()

const PORT = process.env.PORT || 6001

app.get("/" , (req,res) => {
    res.send("Hello from Auth-service")
})

app.listen(PORT, ()=> {
    console.log(`Auth-service Started on ${PORT}`)
    connectDB()
})