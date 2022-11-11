"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
//const express = require('express')
const app = (0, express_1.default)();
const port = 3000;
(0, dotenv_1.config)();
let lista = ["Comer", "Leer", "Estudiar", "Dormir"];
app.get('/', (req, res) => {
    res.send('Lista de acciones a Realizar: ' + lista);
});
app.post('/:accion', (req, res) => {
    const { accion } = req.params;
    lista.push(`${accion}`);
    res.send(lista);
});
app.listen(Number(process.env.PORT), () => {
    console.log(`Escuchando en el puerto ${port}`);
});
//correr app -> npm run start o solo npm start
//Probar Método POST en el postman para agregar accion a realizar
