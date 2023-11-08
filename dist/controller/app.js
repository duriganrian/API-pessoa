"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bancoDeDados_1 = require("./bancoDeDados");
const cors_1 = __importDefault(require("cors"));
const Pessoa_1 = require("../model/Pessoa");
(0, bancoDeDados_1.inicializarPessoas)();
const app = (0, express_1.default)();
const port = 9999;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    console.log('recebi sua requisição');
    res.send({ mensagem: "estou devolvendo a resposta para sua requisição" });
});
app.get('/pessoas', (req, res) => {
    const listaDePessoas = (0, bancoDeDados_1.listarPessoas)();
    res.json(listaDePessoas);
});
app.listen(port, () => {
    console.log(`Servidor express ouvindo na endereço httpp://localhost:${port}/`);
});
// Rota para cadastrar uma pessoa
app.post('/cadastro', (req, res) => {
    // Recuperando as informações JSON que vieram no corpo (body) da requisição (req) e desestruturando essa informação para cada atributo
    const { nome, cpf, data_nascimento, telefone, endereco, altura, peso } = req.body;
    // Criando um novo objeto do tipo Pessoa com as informações recuperadas da requisição
    const pessoa = new Pessoa_1.Pessoa(nome, cpf, new Date(data_nascimento), telefone, endereco, altura, peso);
    // Apenas imprimindo as informações do objeto no console do servidor
    console.log(pessoa);
    // Chamando a função para persistir (salvar) os dados da pessoa no banco de dados
    (0, bancoDeDados_1.persistirPessoa)(pessoa);
    // Resposta que o servidor irá enviar ao front-end (A resposta será estrutura em um JSON)
    res.json({ mensagem: "Pessoa cadastrada com sucesso" });
});
//# sourceMappingURL=app.js.map