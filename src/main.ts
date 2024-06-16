import { logger } from "./application/logging"
import { web } from "./application/web"

const PORT = process.env.PORT ?? 4000

web.listen(PORT, () => {
  logger.info("Listening on port: " + PORT)
})
