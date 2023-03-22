const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const db = require("./utils/database");
const initModels = require('./models/init.models')
const userRouter = require('./routers/users.routes')
const authRouter = require('./routers/auth.routers')
const salaChatRouter = require('./routers/sala.chat.routers')
const messageRouter = require('./routers/message.routers')
const typeChatRouter = require('./routers/type.chat.routers')
const errorHandlerRouter = require('./routers/error.handle.routers')


const app = express();

const PORT=8000;
initModels()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

app.get('/', (req, res) => {
    res.status(200).json({ message: "Bienvenido al server" });
  });


app.use(userRouter)
app.use(authRouter)
app.use(salaChatRouter)
app.use(messageRouter)
app.use(typeChatRouter)

errorHandlerRouter(app)

  app.listen(PORT, () => {
	console.log('Servidor corriendo en el puerto 8000');
});