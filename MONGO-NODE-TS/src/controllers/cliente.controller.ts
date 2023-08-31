import { ICliente } from '../interface/cliente.interface';
import Cliente from '../models/cliente.model'
import { Request, Response } from 'express';

export const getClientes = async (req:Request,res:Response)=>{
     try {
        const clientes = await Cliente.find()
        return res.status(200).json(clientes);
     } catch (error:any) {
        return res.status(500).json({
            message : error.message
        });
     }
}

export const getIdClientes = async (req: Request, res: Response) => {
    try {
        const cliente = await Cliente.findById(req.params.id)
        if(!cliente) return res.status(404).json({
            message : "Cliente no encontrado"
        })
        return res.status(200).json(cliente)
    } catch (error:any) {
        return res.status(500).json({
            message : "Id no encontrado"
        })
    }
}

export const createClientes = async (req:Request,res:Response) =>{
    try {
        const {nombres , apellidos, edad} : ICliente = req.body
        const newCliente = new Cliente({
            nombres,
            apellidos,
            edad
        })
        await newCliente.save()
        res.json(newCliente)
    } catch (error:any) {
        return res.status(500).json({
            message : error.message
        })
    }
}

export const updateClientes = async (req: Request, res: Response) => {
    const {nombres , apellidos, edad}: ICliente = req.body
    const updateCliente = await Cliente.findOneAndUpdate(
        {_id : req.params.id},
        {nombres,apellidos,edad},
        {new : true}
    )
    return res.json(updateCliente)
}

export const deleteClientes = async(req:Request,res:Response) =>{
    const deleteCliente = await Cliente.findByIdAndDelete(req.params.id)
    if(!deleteCliente) return res.status(404).json({
        message : "Cliente no encontrado"
    })
    return res.sendStatus(204)

}