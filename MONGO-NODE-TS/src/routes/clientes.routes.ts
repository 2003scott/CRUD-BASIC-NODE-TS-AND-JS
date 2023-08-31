import { Router } from "express"
import { getClientes,createClientes, getIdClientes,deleteClientes,updateClientes } from "../controllers/cliente.controller"

const router = Router()

router.get('/clientes',getClientes)
router.get('/clientes/:id',getIdClientes)
router.post('/clientes',createClientes)
router.put('/clientes/:id',updateClientes)
router.delete('/clientes/:id',deleteClientes)

export default router