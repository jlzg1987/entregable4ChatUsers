const Message = require("../models/mensaje.model");
const User = require("../models/users.model");

class MessageService {

    static async create(newMessage) {
        try {
            const result = await Message.create(newMessage)
            return result
        } catch (error) {
            throw error
        }
    }

    static async createMessage(id){
        try {
            const result = await User.findOrCreate({
                where: {id}
            })
            return result
        } catch (error) {
            throw error
        }
    }


 
}

module.exports = MessageService