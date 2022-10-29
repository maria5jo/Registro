import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from './config/db.js'

dotenv.config(); //para trabajar con las variables de entorno


const PORT =process.env.PORT || 4000;

const app = express();
//para trabajar con document JSON
app.use(express.json());
conectarDB();

app.use('/',(req,res)=>{
    res.send("Hola mundo ExpressJS")
});
app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
});
