const Message = require("../models/message.models")
const SalaChat = require("../models/sala.chat.models")
const TypeChat = require("../models/type.chat.models")
const User = require("../models/users.models")

class TypeChatService {

    static async typeChatWithmensajes(typeChatId) {
        try {
            const result = await TypeChat.findByPk(typeChatId, {
                include: [{
                    model:SalaChat,
                    attributes:['id'],
                    include:{
                        model:User,
                        attributes:['username']
                    }
                },{
                    model:Message,
                    attributes:['content'],
                    include:[{
                        model:User,
                        attributes:['username']
                    }]
                }]
            })

            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = TypeChatService