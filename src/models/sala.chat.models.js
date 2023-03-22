const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const SalaChat = db.define("sala_chats", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idtype_chat:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: true,
    updatedAt:false
})

module.exports = SalaChat;