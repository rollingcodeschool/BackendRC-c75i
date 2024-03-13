import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50,
        unique:true
    },
    precio:{
        type: Number,
        required:true,
        min: 100,
        max: 10000
    },
    imagen:{
        type: String,
        required: true,
        validate: {
            validator: (dato)=>{
                const pattern = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/
               return pattern.test(dato)
            }
        }
    }
    // agregar a el schema las propiedades faltantes
})