const UserService = require("../services/users.services")

const createUser = async (req,res,next) => {
    try {
        const newUser = req.body
        const result = await UserService.create(newUser)
        res.status(201).send(result)
    } catch (error) {
        next(error)
    }
}
const getAllUser = async (req,res,next) => {
    try {
        const users = await UserService.getAll()
        res.status(200).send(users)
    } catch (error) {
        next(error)
    }
}



module.exports = {
    createUser,
    getAllUser,
}