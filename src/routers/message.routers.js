const { Router } = require("express");
const { createMessage, sendMessage } = require("../controllers/messge.controllers");


const messageRouter = Router()

mensajesRouter.post('/api/v1/message', createMessage)

mensajesRouter.post('/api/v1/users/:userId/message', sendMessage)

module.exports = messageRouter