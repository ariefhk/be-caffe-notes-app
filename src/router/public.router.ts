import express from "express"
import { HelloController } from "../controller/hello.controller"
import { rateLimiterMiddleware } from "../middleware/rate-limiter.middeware"

export const publicRouter = express.Router()

publicRouter.get("/", rateLimiterMiddleware, HelloController.sayHello)
