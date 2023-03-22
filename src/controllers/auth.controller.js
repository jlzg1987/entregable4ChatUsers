const bcrypt = require('bcrypt');
const UserService = require('../services/users.services');

const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await UserService.getUser(email, password)

        if (!user) {
            return next({
                status: 400,
                message: 'Invalid Email or User not exists',
                error: 'User not found'
            })
        }

        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) {
            return next({
                status: 400,
                message: 'The password do not match with the user',
                error: 'Invalid password'
            })
        }

        const { id, email: userEmail, username, firstname, lastname } = user

        res.json({
            id,
            userEmail,
            username,
            firstname,
            lastname
        })

    } catch (error) {
        next(error)
    }
}

module.exports = userLogin