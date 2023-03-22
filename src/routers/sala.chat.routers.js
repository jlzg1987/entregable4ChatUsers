const { Router } = require("express");
const { craeteSalaChat } = require("../controllers/sala.chat.controller");

const salaChatRouter = Router()

salaChatRouter.post('/api/v1/salachat', craeteSalaChat)

module.exports = salaChatRouter