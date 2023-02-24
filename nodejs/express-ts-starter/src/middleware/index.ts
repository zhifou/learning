// index.ts
import express from 'express'
import responseHeader from './responseHeader'

function initMiddleware(app: express.Application) {
    app.use(express.json())
    app.use(responseHeader)
}

export default initMiddleware
