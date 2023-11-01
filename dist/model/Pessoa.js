"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(_nome, _cpf, _data_nascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    /**
     *
     * @returns
     */
    getNome() {
        return this.nome;
    }
    /**
     *
     * @param _nome
     */
    setNome(_nome) {
        this.nome = _nome;
    }
    getCPF() {
        return this.cpf;
    }
    setCPF(_cpf) {
        this.cpf = _cpf;
    }
    getData_Nascimento() {
        return this.data_nascimento;
    }
    setData_Nascimento(_data_nascimento) {
        this.data_nascimento = _data_nascimento;
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(_telefone) {
        this.telefone = _telefone;
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(_endereco) {
        this.endereco = _endereco;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(_altura) {
        this.altura = _altura;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
    mostraPessoa() {
        console.log(`Nome: ${this.nome}
        CPF: ${this.cpf}
        Data: ${this.data_nascimento}
        Telefone: ${this.telefone}
        Endereço: ${this.endereco}
        Altura: ${this.altura}
        Peso: ${this.peso}`);
    }
    falar() {
        console.log(`${this.nome} está falando`);
    }
    falarFrase(_frase) {
        console.log(`${this.nome} fala: ${_frase}`);
    }
    comer() {
        console.log(`${this.nome} está comendo`);
    }
    comerPrato(_prato) {
        console.log(`${this.nome} come: ${_prato}`);
    }
    andar() {
        console.log(`${this.nome} está andando`);
    }
    andarRapido(_rapido) {
        console.log(`${this.nome} anda: ${_rapido}`);
    }
    /**
     * CRUD
     */
    cadastroPessoa(pessoa) {
        console.log(`$(bananinha.nome) cadastrado com sucesso`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map