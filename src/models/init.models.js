const Message = require("./message.models")
const SalaChat = require("./sala.chat.models")
const TypeChat = require("./type.chat.models")
const User = require("./users.models")


const initModels = () => {
    User.hasMany(SalaChat,{foreignKey:'id_user'})
    SalaChat.belongsTo(User,{foreignKey:'id_user'})

    User.hasMany(Message,{foreignKey:'id_user'})
    Mensajes.belongsTo(User,{foreignKey:'id_user'})

    TypeChat.hasMany(SalaChat,{foreignKey:'idtype_chat'})
    SalaChat.belongsTo(TypeChat,{foreignKey:'idtype_chat'})

    TypeChat.hasMany(Message,{foreignKey:'idtype_chat'})
    Mensajes.belongsTo(TypeChat,{foreignKey:'idtype_chat'})
    
}

module.exports = initModels