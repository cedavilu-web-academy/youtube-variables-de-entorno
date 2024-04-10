import express from "express";
import path from 'path';
import mainRoutes from './src/routes/mainRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const {PORT} = process.env;


const app = express();

//Setear la ubicación de nuestros recursos estáticos
app.use(express.static(path.resolve(process.cwd() + '/public')));

//Setear que tipo de motor de plantilla estamos utilizando
app.set('view engine', 'ejs');
app.set('views', path.resolve(process.cwd() + '/src/views'));


app.use(mainRoutes);

app.listen(PORT, ()=> console.log(`Servidor escuchando en http://localhost:${PORT}`));

