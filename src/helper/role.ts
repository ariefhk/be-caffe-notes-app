import { APIError } from "../error/api-error"
import { API_STATUS_CODE } from "./status-code"

// Define the available roles as a TypeScript enum for better type safety
export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

// Define role groups
export const ROLE = {
  IS_ADMIN: [Role.ADMIN],
  IS_ALL_ROLE: [Role.ADMIN, Role.USER],
}

export const checkAllowedRole = (allowedRoles: Array<Role>, userRole: Role) => {
  if (!userRole) {
    throw new APIError(API_STATUS_CODE.FORBIDDEN, "You dont insert the role!")
  }

  if (!allowedRoles) {
    throw new APIError(
      API_STATUS_CODE.FORBIDDEN,
      "You dont insert allowedRoles to lookup!",
    )
  }

  const isAllowed = allowedRoles.includes(userRole)

  if (!isAllowed) {
    throw new APIError(
      API_STATUS_CODE.FORBIDDEN,
      "You dont have access to this!",
    )
  }

  return true
}
