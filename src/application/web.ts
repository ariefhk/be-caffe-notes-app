import cors from "cors"
import express from "express"
import { ErrorController } from "../controller/error.controller"
import { errorMiddleware } from "../middleware/error.middleware"
import { privateRouter } from "../router/private.router"
import { publicRouter } from "../router/public.router"

export const web = express()
web.use(cors())
web.use(express.urlencoded({ extended: true }))
web.use(express.json())
web.use(publicRouter)
web.use(privateRouter)
web.get("*", ErrorController.routeNotFound)
web.use(errorMiddleware)
