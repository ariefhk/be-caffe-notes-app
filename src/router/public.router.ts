import express from "express"
import { HelloController } from "../controller/hello.controller"

export const publicRouter = express.Router()

publicRouter.get("/", HelloController.sayHello)
