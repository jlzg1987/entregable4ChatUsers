const { Router } = require("express");
const { createUser, getAllUser} = require("../controllers/users.controllers");
const { createUserValidator } = require("../validators/user.validators");


const userRouter = Router()

userRouter.post('/api/v1/users', createUserValidator, createUser)

userRouter.get('/api/v1/users', getAllUser)



module.exports = userRouter