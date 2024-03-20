import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers.js";
import { check } from "express-validator";

const router = Router();

// app.get('/nuevo/producto',(req, res)=>{
//     console.log('aqui obtener la lista de todos los productos');
//     res.send('Aqui enviaremos la lista de productos')
//    })
router
  .route("/productos")
  .get(listarProductos)
  .post(
    [
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
        })
    ],
    crearProducto
  );
router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put(editarProducto)
  .delete(borrarProducto);

export default router;
