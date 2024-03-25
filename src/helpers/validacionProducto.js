import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionProducto = [
  check("nombreProducto")
    .notEmpty()
    .withMessage("El nombre del producto es un dato obligatorio")
    .isLength({ min: 4, max: 50 })
    .withMessage("El nombre del producto debe tener entre 4 y 50 caracteres"),
  check("precio")
    .notEmpty()
    .withMessage("El precio es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un número")
    .custom((value) => {
      if (value >= 100 && value <= 10000) {
        return true;
      } else {
        throw new Error("El precio debe estar entre $100 y $10000");
      }
    }),
  check("imagen")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .matches(/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/)
    .withMessage(
      "La imagen debe ser una url valida y terminar con alguna de las siguientes extensiones (jpg|jpeg|gif|png)"
    ),
  check("categoria")
    .notEmpty()
    .withMessage("La categoria es un dato obligatorio")
    .isIn(["Infusiones", "Batidos", "Dulce", "Salado"])
    .withMessage(
      "La categoria debe ser una de las siguientes opciones ('Infusiones', 'Batidos','Dulce', 'Salado')"
    ),
  check("descripcion_breve")
    .notEmpty()
    .withMessage("La descripcion breve es un dato obligatorio")
    .isLength({ min: 10, max: 50 })
    .withMessage("La descripcion breve debe contener entre 10 y 50 caracteres"),
  check("descripcion_amplia")
    .notEmpty()
    .withMessage("La descripcion amplia es un dato obligatorio")
    .isLength({ min: 30, max: 300 })
    .withMessage(
      "La descripcion amplia debe contener entre 30 y 300 caracteres"
    ),
  //al final agregar el llamado de resultadoValidacion
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionProducto;
