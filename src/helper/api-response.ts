import { logger } from "../application/logging"

export class ResponseHelper {
  static toJson(message: string, data?: any) {
    logger.info(message)
    if (!data) {
      return {
        message,
      }
    }
    return {
      message,
      data,
    }
  }

  static toJsonError(message: string, errors?: any) {
    if (!errors) {
      return {
        message,
      }
    }
    return {
      message,
      errors,
    }
  }
}
