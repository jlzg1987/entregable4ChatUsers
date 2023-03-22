const { check, param } = require('express-validator')
const validateResult = require('../utils/validate')

const createUserValidator = [
    check('username', 'Error con el campo de usuario')
        .exists().withMessage('El username debe existir')
        .notEmpty().withMessage('El username no debe estar vacio')
        .isString()
        .isLength({ min: 5, max: 25}).withMessage('El username debe tener entre 6 y 30 caracteres'),

    check('email', 'Error con el campo del email')
        .exists().withMessage('No se encontro la propiedad email')
        .notEmpty().withMessage('No se encontro el valor email')
        .isEmail()
        .isString()
        .isLength({ min: 6, max: 50 }).withMessage('El email debe tener entre 7 y 50 caracteres'),

    check('password', 'Error con el campo de password')
        .exists().withMessage('No se encontro la propiedad password')
        .notEmpty().withMessage('No se encontro el valor password')
        .isString()
        .isLength({ min: 6 }).withMessage('El password debe tener minimo 7 caracteres'),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const editUserValidator = [

    param('id').isInt().withMessage('Id debe ser un numero entero'),

    check('username', 'Error con el campo de username')
        .isString()
        .exists().withMessage('No ha definido la propiedad username ')
        .notEmpty().withMessage('El compo username no debe estar vacio'),

    check('firstname', 'Error con el campo de firstname')
        .exists().withMessage('No ha definido la propiedad firstname')
        .isString()
        .notEmpty().withMessage('El compo firstname no debe estar vacio'),

    check('lastname', 'Error con el campo de lastname')
        .exists().withMessage('No ha definido la propiedad lastname')
        .isString()
        .notEmpty().withMessage('El compo lastname no debe estar vacio'),

        (req, res, next) =>{
            validateResult(req, res, next)
        }
]


module.exports = { createUserValidator, editUserValidator }