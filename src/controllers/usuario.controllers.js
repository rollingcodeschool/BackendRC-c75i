import Usuario from "../database/models/usuario.js";
import bcrypt from 'bcrypt'

export const login = async (req, res) => {
  try {
   
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrió un error durante el inicio de sesión",
    });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const { email } = req.body;
    let usuario = await Usuario.findOne({ email }); 
    //si existe un usuario con el email enviado
    if (usuario) {
      return res.status(400).json({
        mensaje: "ya existe un usuario con el correo enviado",
      });
    }
    //aqui creo el usuario en la BD
    usuario = new Usuario(req.body);
    //encriptar el password
    //hashear la contraseña
    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(usuario.password, salt)
    await usuario.save();
  
    res.status(201).json({
      mensaje: "usuario creado",
      email: usuario.email,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "El usuario no pudo ser creado",
    });
  }
};

export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      mensaje: "Error al buscar los usuarios",
    });
  }
};
