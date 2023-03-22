const { Router } = require("express");
const userLogin = require("../controllers/auth.controllers");



const authRouter = Router()

authRouter.post('/api/v1/auth/login', userLogin)

module.exports = authRouter