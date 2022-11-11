import  express, { NextFunction, Request, Response, Router } from "express";
import { config } from 'dotenv';
//const express = require('express')
const app = express()
const port = 3000

config();

let lista: string[]=["Comer","Leer","Estudiar","Dormir"];

app.get('/', (req:Request, res:Response) => {
    res.send('Lista de acciones a Realizar: ' + lista)
  })

  app.post('/:accion', (req: Request, res: Response) => {
	const { accion } = req.params;
	lista.push(`${accion}`);
	res.send(lista);
});



app.listen(Number(process.env.PORT), () => {
  console.log(`Escuchando en el puerto ${port}`)
})

//correr app -> npm run start o solo npm start
//Probar Método POST en el postman para agregar accion a realizar