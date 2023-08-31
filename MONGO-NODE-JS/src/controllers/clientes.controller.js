import Cliente from '../models/cliente.model.js'

export const getClientes = async (req,res) => {
    try {
        const clientes = await Cliente.find()
        res.json(clientes)
    } catch (error) {
        return res.status(500).json({
            message : "Error hubo problemas de ruta en getclientes"
        })
    }
}

export const getIdClientes = async (req,res) =>{
    try {
        const clientes = await Cliente.findById(req.params.id)
         if (!clientes) return res.status(404).json({
            message : "Cliente no encontrado"
         })
        return res.json(clientes)
    } catch (error) {
        res.status(500).json({
            message : "Error id no encontrado"
        })
    }
}


export const createClientes = async (req,res) =>{
    try {
        const {nombres , apellidos, edad} = req.body
        const newCliente = new Cliente({
            nombres,
            apellidos,
            edad
        })
        await newCliente.save()
        res.json(newCliente)
    } catch (error) {
        return res.status(500).json({
            message : error.message
        })
    }
}

export const updateClientes = async(req,res) =>{
    try {
        const {nombres , apellidos, edad} = req.body
        const updateCliente = await Cliente.findOneAndUpdate(
            {_id : req.params.id},
            {nombres,apellidos,edad},
            {new : true}
        )
        return res.json(updateCliente)
    } catch (error) {
        return res.status(500).json({
            message : error.message
        })
    }
}

export const deteleClientes = async (req,res) =>{
    try {
        const deleteClientes = await Cliente.findByIdAndDelete(req.params.id)
        if(!deleteClientes) return res.status(404).json({
            message : "Cliente no encontrado"
        })
        return res.sendStatus(204)
        //esta es si queremos avisar el con un mesage de eliminado
        // return res.status(204).json({
        //     message : "Cliente elimnado"
        // })
    } catch (error) {
        res.status(500).json({
            message : "Error No se puedo eliminar este cliente"
        })
    }
}





