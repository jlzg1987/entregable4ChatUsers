const { Router } = require("express");
const { getTypeChatWithMensajes } = require("../controllers/type.chat.controllers");


const typeChatRouter = Router()

typeChatRouter.get('/api/v1/typeChat/:typeChatId/message', getTypeChatWithMensajes)

module.exports = typeChatRouter