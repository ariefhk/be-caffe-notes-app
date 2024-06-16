import { NextFunction, Request, Response } from "express"
import { ResponseHelper } from "../helper/api-response"
import { API_STATUS_CODE } from "../helper/status-code"

export class HelloController {
  static sayHello(_req: Request, res: Response, next: NextFunction) {
    try {
      res
        .status(API_STATUS_CODE.OK)
        .json(ResponseHelper.toJson("Hello from API!"))
    } catch (e) {
      next(e)
    }
  }
}
