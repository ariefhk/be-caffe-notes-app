import { NextFunction, Request, Response } from "express"
import { logger } from "../application/logging"
import { APIError } from "../error/api-error"
import { ResponseHelper } from "../helper/api-response"
import { API_STATUS_CODE } from "../helper/status-code"

export const errorMiddleware = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof APIError) {
    logger.error(`ERROR_STATUS: ${error.status}, API_ERROR: ${error.message}`)
    return res
      .status(error.status)
      .json(ResponseHelper.toJsonError(error.message))
      .end()
  } else if (error instanceof Error) {
    logger.error(`ERROR_STATUS: 500, SERVER_ERROR: ${error.message}`)
    return res
      .status(API_STATUS_CODE.SERVER_ERROR)
      .json(ResponseHelper.toJsonError(error.message))
      .end()
  }
}
