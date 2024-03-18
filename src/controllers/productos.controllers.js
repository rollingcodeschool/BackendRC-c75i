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

export const obtenerProducto = async(req, res) => {
 try {
  //verificar si el producto existe con el id correspondiente
  console.log(req.params.id)
  const productoBuscado = await Producto.findById(req.params.id)
  //si no existe contestar con un status 404
  if(!productoBuscado){
    return res.status(404).json({mensaje: 'El id enviado no corresponde a ningun producto'})
  }
  // si existe el producto enviarlo al frontend, status 200
  res.status(200).json(productoBuscado);
  
 } catch (err) {
  console.error(err);
  res.status(400).json({mensaje:'Error al obtener el producto'})
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

export const editarProducto = async(req, res) => {
  try {
    // todo: validar los datos del body
   //verificar si el producto existe con el id correspondiente
   const productoBuscado = await Producto.findById(req.params.id)
   //si no existe contestar con un status 404
   if(!productoBuscado){
     return res.status(404).json({mensaje: 'El id enviado no corresponde a ningun producto'})
   }
   //modificar el producto y enviar la respuesta 400
   await Producto.findByIdAndUpdate(req.params.id, req.body)
   res.status(200).json({mensaje: 'El producto fue editado correctamente'})
  } catch (err) {
   console.error(err);
   res.status(500).json({mensaje:'Error al editar el producto'})
  }
 };
