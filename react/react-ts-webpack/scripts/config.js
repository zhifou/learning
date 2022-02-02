const SERVER_PORT = 9527
const SERVER_HOST = '127.0.0.1'
const PROJECT_NAME = "cli"
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
    isDev,
    PROJECT_NAME,
    SERVER_PORT,
    SERVER_HOST
}
