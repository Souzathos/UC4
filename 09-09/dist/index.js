"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Livro_1 = require("./Livro");
const Estoque_1 = require("./Estoque");
const Brinquedo_1 = require("./Brinquedo");
const Eletronico_1 = require("./Eletronico");
const Roupa_1 = require("./Roupa");
let controlador = true;
const estoqueLivro = new Estoque_1.Estoque();
const estoqueEletronico = new Estoque_1.Estoque();
const estoqueBrinquedo = new Estoque_1.Estoque();
const estoqueRoupa = new Estoque_1.Estoque();
function cadastrarItem() {
    const opcao2 = Number(readline_sync_1.default.question("Qual tipo de produto você deseja cadastrar? \n1 - Livro. \n2 - Eletrônico. \n3 - Brinquedo. \n4 - Roupa \n5 - Sair \nDigite sua opção: "));
    switch (opcao2) {
        case 1:
            const titulo = readline_sync_1.default.question("Digite o título: ");
            const autor = readline_sync_1.default.question("Digite o autor: ");
            const precoLivro = Number(readline_sync_1.default.question("Digite o preço: "));
            const livro = new Livro_1.Livro(titulo, autor, precoLivro);
            estoqueLivro.adicionar(livro);
            break;
        case 2:
            const marca = readline_sync_1.default.question("Digite o marca: ");
            const modelo = readline_sync_1.default.question("Digite o modelo: ");
            let precoEletronico = Number(readline_sync_1.default.question("Digite o preço: "));
            const eletronico = new Eletronico_1.Eletronico(marca, modelo, precoEletronico);
            estoqueEletronico.adicionar(eletronico);
            break;
        case 3:
            const nome = readline_sync_1.default.question("Digite o nome: ");
            const idadeMinima = readline_sync_1.default.question("Digite a idade mínima: ");
            const precoBrinquedo = Number(readline_sync_1.default.question("Digite o preço: "));
            const briquedo = new Brinquedo_1.Brinquedo(nome, idadeMinima, precoBrinquedo);
            estoqueBrinquedo.adicionar(briquedo);
            break;
        case 4:
            const descricao = readline_sync_1.default.question("Digite o descricao: ");
            const tamanho = readline_sync_1.default.question("Digite o tamanho: ");
            const precoRoupa = Number(readline_sync_1.default.question("Digite o preço: "));
            const roupa = new Roupa_1.Roupa(descricao, tamanho, precoRoupa);
            estoqueRoupa.adicionar(roupa);
            break;
        case 5:
            console.log('Saindo...');
            controlador = false;
            break;
        default:
            console.log(`Opção inválida.`);
            break;
    }
}
function deletarItem() {
    const itemParaRemover = Number(readline_sync_1.default.question("De onde você deseja deletar? \n1 - Estoque de livros \n2 - Estoque de eletrônicos \n3 - Estoque de brinquedos \n4 - Estoque de roupa \nDigite sua opção: "));
    switch (itemParaRemover) {
        case 1:
            console.log(estoqueLivro.listar());
            const indice = Number(readline_sync_1.default.question("Digite o índice do item que deseja remover: "));
            estoqueLivro.remover(indice);
            console.log("Item deletado com sucesso!");
            break;
        case 2:
            console.log(estoqueEletronico.listar());
            const indiceEletronico = Number(readline_sync_1.default.question("Digite o índice do item que deseja remover: "));
            estoqueEletronico.remover(indiceEletronico);
            console.log("Item deletado com sucesso!");
            break;
        case 3:
            console.log(estoqueBrinquedo.listar());
            const indiceBrinquedo = Number(readline_sync_1.default.question("Digite o índice do item que deseja remover: "));
            estoqueBrinquedo.remover(indiceBrinquedo);
            console.log("Item deletado com sucesso!");
            break;
        case 4:
            console.log(estoqueRoupa.listar());
            const indiceRoupa = Number(readline_sync_1.default.question("Digite o índice do item que deseja remover: "));
            estoqueRoupa.remover(indiceRoupa);
            console.log("Item deletado com sucesso!");
            break;
        default:
            console.log("Opção inválida");
    }
}
while (controlador) {
    const opcao1 = Number(readline_sync_1.default.question("O que deseja fazer? \n1 - Cadastrar produto \n2 - Listar produtos \n3 - Deletar produto \n4 - Sair \nDigite sua opção: "));
    switch (opcao1) {
        case 1:
            cadastrarItem();
            break;
        case 2:
            console.log(estoqueLivro.listar());
            console.log(estoqueEletronico.listar());
            console.log(estoqueBrinquedo.listar());
            console.log(estoqueRoupa.listar());
            break;
        case 3:
            deletarItem();
            break;
        case 4:
            console.log('Saindo...');
            controlador = false;
            break;
        default:
            console.log(`Opção inválida.`);
            break;
    }
}
