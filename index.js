import express from 'express';
import 'dotenv/config'; //permite procesar variables de entorno
import cors from 'cors';
import morgan from 'morgan';

//1- configurar un puerto
const app = express();
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+app.get('port'))
})
//2- configurar los middlewares
app.use(cors()); //permite conexiones remotas
app.use(morgan('dev')); //nos da informacion extra en la terminal
app.use(express.json()); //permite interpretar los datos en formato json
app.use(express.urlencoded({extended:true})); //ayuda a intepretar los datos del body del request
//3- configurar las rutas