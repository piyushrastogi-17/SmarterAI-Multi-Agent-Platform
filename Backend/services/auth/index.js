import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./configs/db.js"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route.js";
dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser()) 

const PORT = process.env.PORT || 6001

app.get("/" , (req,res) => {
    res.send("Hello from Auth-service")
})



app.use("/", authRouter)

app.listen(PORT, ()=> {
    console.log(`Auth-service Started on ${PORT}`)
    connectDB()
})