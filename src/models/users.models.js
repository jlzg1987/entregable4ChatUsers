const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const bcrypt = require("bcrypt")

const User = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    hooks: {
        beforeCreate: async (user) => {
            try {
                const salt = await bcrypt.genSalt(10)
                const passwordHash = await bcrypt.hash(user.password, salt)
                user.password = passwordHash
            } catch (error) {
                throw error
            }

        }
    }
})

module.exports = User