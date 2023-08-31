import express from "express";
import morgan from "morgan";
import clienteRoutes from './routes/clientes.routes.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use("/api/",clienteRoutes)

export default app