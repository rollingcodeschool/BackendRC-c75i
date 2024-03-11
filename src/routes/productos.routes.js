import { Router } from "express";
import { listarProductos } from "../controllers/productos.controllers.js";

const router = Router();

// app.get('/nuevo/producto',(req, res)=>{
//     console.log('aqui obtener la lista de todos los productos');
//     res.send('Aqui enviaremos la lista de productos')
//    })
router.route('/nuevo/producto').get(listarProductos)

export default router