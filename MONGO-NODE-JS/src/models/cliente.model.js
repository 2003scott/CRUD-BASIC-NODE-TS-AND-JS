import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    nombres : {
        type : String,
        require : true
    },
    apellidos : {
        type : String,
        require : true
    },
    edad : {
        type : Number,
        require : true
    },
},{
    timestamps : true,
})

export default mongoose.model('Clientes',clienteSchema)






