import express from "express";
import { inicializarPessoas   , listarPessoas } from "./bancoDeDados";


inicializarPessoas();

const app = express();
const port: number = 3000;

app.use(express.json());

app.get('/', (req, res) => {
     console.log('recebi sua requisição');
     res.send({mensagem: "estou devolvendo a resposta para sua requisição"});
});

app.get('/pessoas', (req, res) => {
    const listaDePessoas = listarPessoas();

    res.json(listaDePessoas);
});

app.listen(port, () => {
    console.log(`Servidor express ouvindo na endereço httpp://localhost:${port}/`);
});