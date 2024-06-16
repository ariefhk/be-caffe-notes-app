import { NextFunction, Request, Response } from "express"
import { API_STATUS_CODE } from "../helper/status-code"

export class ErrorController {
  static routeNotFound(req: Request, res: Response, next: NextFunction) {
    try {
      return res
        .status(API_STATUS_CODE.NOT_FOUND)
        .json({ message: "Route Not Found!" })
    } catch (e) {
      next(e)
    }
  }
}
