import express from 'express'
import expressWs from 'express-ws'
import routes from './routes'
import initMiddleware from './middleware'
import logger from './utils/logger'
import config from 'config'

const appBase = express()
const wsInstance = expressWs(appBase)
const { app } = wsInstance
const PORT = config.get<number>('port')

initMiddleware(app)

app.listen(PORT, async () => {
    logger.info(`App is running at http://localhost:${PORT}`)
    routes(app)
})
