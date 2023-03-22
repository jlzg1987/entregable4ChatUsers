const MessageService = require("../services/message.services");


const createMessage = async(req,res,next) => {
    try{
        const newMessage = req.body
        const messege = await MessageService.create(newMessage)
        res.status(201).json(messege);
    }catch(error){
        next(error);
    }
}


const sendMessage = async (req,res,next) =>{
    try {
        const {id} = req.params
        console.log(id);
        const messege = await MessageService.createMessage(id)
        res.status(201).send(messege)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    createMessage,
    sendMessage,
}