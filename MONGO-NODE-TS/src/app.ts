import express from "express"; 
import morgan from 'morgan';
import ClientesRouter from './routes/clientes.routes'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

// Rutas
app.use('/api/',ClientesRouter)


export default app