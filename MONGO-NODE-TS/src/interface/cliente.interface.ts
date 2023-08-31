import {Document} from 'mongoose';

export interface ICliente extends Document{
    nombres : string;
    apellidos : string;
    edad : number;
}