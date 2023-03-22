const { logError, ormErrorHandler, errorHandler } = require("../middlewares/error.handler")


const errorHandlerRouter = (app) =>{
    app.use(logError)
    app.use(ormErrorHandler)
    app.use(errorHandler)

    app.use('*', (req,res) =>{
        return res.status(400).send('Page not found')
    })
}

module.exports = errorHandlerRouter