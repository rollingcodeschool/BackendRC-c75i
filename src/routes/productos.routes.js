import { Router } from "express";
import { crearProducto, listarProductos } from "../controllers/productos.controllers.js";

const router = Router();

// app.get('/nuevo/producto',(req, res)=>{
//     console.log('aqui obtener la lista de todos los productos');
//     res.send('Aqui enviaremos la lista de productos')
//    })
router.route('/productos').get(listarProductos).post(crearProducto)

export default router