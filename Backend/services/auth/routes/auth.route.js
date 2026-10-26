import express from "express"
import { GoogleAuth, logOut, useCoins} from "../controllers/auth.controller.js"

const authRouter = express.Router()

authRouter.post("/login", GoogleAuth)

authRouter.get("/logout", logOut)

authRouter.post("/use-coins",useCoins);

export default authRouter



//http://localhost:8000/api/auth/login
