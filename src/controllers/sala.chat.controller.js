const SalaChatService = require("../services/sala.chat.services");

const craeteSalaChat = async(req, res, next) => {
    try {
        const salaChat = req.body
        const chat =  await SalaChatService.create(salaChat)
        res.status(201).json(chat);
    } catch (error) {
        next(error);
    }
}




module.exports = {
    craeteSalaChat,
}