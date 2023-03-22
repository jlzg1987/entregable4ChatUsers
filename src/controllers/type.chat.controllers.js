const TypeChatService = require("../services/type.chat.services");

const getTypeChatWithMensajes = async(req,res,next) => {
    try {
        const {typeChatId} = req.params
        console.log(typeChatId);
        const typeChatWithMensaje = await TypeChatService.typeChatWithmensajes(typeChatId)
        res.json(typeChatWithMensaje);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getTypeChatWithMensajes,
}