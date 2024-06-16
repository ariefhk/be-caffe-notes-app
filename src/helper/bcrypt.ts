import bcrypt from "bcrypt"

export const createBcrypt = async (
  data: string | Buffer,
  salt: string | number = 10,
) => {
  return bcrypt.hash(data, salt)
}

export const compareBcrypt = async (
  data: string | Buffer,
  encypted: string,
) => {
  return bcrypt.compare(data, encypted)
}
