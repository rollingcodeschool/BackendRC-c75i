import Producto from "../database/models/producto.js";

export const listarProductos = async(req, res) => {
 try {
  //pedir a la bd la lista de todos los productos
  const productos = await Producto.find()
  //responder al frontend con el array de productos
  res.status(200).json(productos)
 } catch (err) {
  console.error(err);
  res.status(400).json({mensaje:'Error al buscar los productos'})
 }
};

export const crearProducto = async(req, res)=>{
  try {
    //todo: validar los datos del body
    //crear un producto basado en el Modelo Producto
    const productoNuevo = new Producto(req.body);
    //pedir a la BD crear el producto
    await productoNuevo.save();
    //enviar una respuesta cuando puedo crear efectivamente el producto 201
    res.status(201).json({mensaje: 'El producto fue creado correctamente'})
  } catch (error) {
    //enviar una respuesta de error
    console.error(error);
    res.status(500).json({
      mensaje: 'Error al crear el producto'
    })
  }  
}
