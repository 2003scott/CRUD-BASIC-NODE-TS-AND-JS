import app from './app.js'
import {PORT} from './config.js'
import {connectDB} from './db.js'

app.listen(PORT)
connectDB()
console.log('Servidor corriendo en el puerto ',PORT)