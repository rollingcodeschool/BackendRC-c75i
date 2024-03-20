import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionProducto = [
    check("nombreProducto")
      .notEmpty()
      .withMessage("El nombre del producto es un dato obligatorio")
      .isLength({min: 4, max: 50})
      .withMessage('El nombre del producto debe tener entre 4 y 50 caracteres'),
    check("precio")
      .notEmpty()
      .withMessage('El precio es un dato obligatorio')
      .isNumeric()
      .withMessage('El precio debe ser un número')
      .custom((value)=>{
          if(value >=100 && value <=10000){
              return true;
          }else{
              throw new Error('El precio debe estar entre $100 y $10000')
          }
      }),
      //al final agregar el llamado de resultadoValidacion
      (req, res, next)=>resultadoValidacion(req, res, next)
  ]

  export default validacionProducto