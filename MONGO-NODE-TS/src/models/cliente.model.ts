import { model,Schema } from "mongoose";
import {ICliente} from '../interface/cliente.interface';


const clienteSchema: Schema = new Schema({
    nombres: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

export default model<ICliente>('Clientes', clienteSchema);
