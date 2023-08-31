import app from './app';
import { PORT } from './config';
import {connectDB} from './database'

app.listen(PORT)
connectDB()
console.log('Servidor corriendo en el puerto ',PORT)