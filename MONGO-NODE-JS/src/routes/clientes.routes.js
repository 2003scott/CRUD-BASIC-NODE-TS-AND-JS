import { Router } from "express";
import {getClientes, createClientes, getIdClientes, deteleClientes, updateClientes} from '../controllers/clientes.controller.js'

const router = Router()

router.get("/clientes",getClientes)
router.get("/clientes/:id",getIdClientes)
router.post("/clientes",createClientes)
router.put("/clientes/:id",updateClientes)
router.delete("/clientes/:id",deteleClientes)

export default router