import Producto from "../database/models/producto.js";

export const listarProductos = (req, res) => {
  console.log("aqui obtener la lista de todos los productos");
  res.send("Aqui enviaremos la lista de productos");
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
