import readlineSync from "readline-sync";
import { Livro } from "./Livro";
import { Estoque } from "./Estoque";
import { Brinquedo } from "./Brinquedo";
import { Eletronico } from "./Eletronico";
import { Roupa } from "./Roupa";

let controlador = true

const estoqueLivro = new Estoque()
const estoqueEletronico = new Estoque()
const estoqueBrinquedo = new Estoque()
const estoqueRoupa = new Estoque()

function cadastrarItem():void {
    const opcao2 = Number(readlineSync.question("Qual tipo de produto você deseja cadastrar? \n1 - Livro. \n2 - Eletrônico. \n3 - Brinquedo. \n4 - Roupa \n5 - Sair \nDigite sua opção: "))
    switch(opcao2){
        case 1: 
            const titulo = readlineSync.question("Digite o título: ")
            const autor = readlineSync.question("Digite o autor: ")
            const precoLivro = Number(readlineSync.question("Digite o preço: "))

            const livro:Livro = new Livro(titulo, autor, precoLivro)
            estoqueLivro.adicionar(livro)
            break

        case 2: 
            const marca = readlineSync.question("Digite o marca: ")
            const modelo = readlineSync.question("Digite o modelo: ")
            let precoEletronico = Number(readlineSync.question("Digite o preço: "))

            const eletronico = new Eletronico(marca, modelo, precoEletronico)
            estoqueEletronico.adicionar(eletronico)
            break

        case 3: 
            const nome = readlineSync.question("Digite o nome: ")
            const idadeMinima = readlineSync.question("Digite a idade mínima: ")
            const precoBrinquedo = Number(readlineSync.question("Digite o preço: "))

            const briquedo = new Brinquedo(nome, idadeMinima, precoBrinquedo)
            estoqueBrinquedo.adicionar(briquedo)
            break

        case 4: 
            const descricao = readlineSync.question("Digite o descricao: ")
            const tamanho = readlineSync.question("Digite o tamanho: ")
            const precoRoupa = Number(readlineSync.question("Digite o preço: "))

            const roupa = new Roupa(descricao, tamanho, precoRoupa)
            estoqueRoupa.adicionar(roupa)
            break
        case 5: 
            console.log('Saindo...')
            controlador = false
            break
        default: 
            console.log(`Opção inválida.`)
            break
}

}

function deletarItem():void {
    const itemParaRemover = Number(readlineSync.question("De onde você deseja deletar? \n1 - Estoque de livros \n2 - Estoque de eletrônicos \n3 - Estoque de brinquedos \n4 - Estoque de roupa \nDigite sua opção: ")) 
    switch(itemParaRemover){
        case 1:
            console.log(estoqueLivro.listar())
            const indice = Number(readlineSync.question("Digite o índice do item que deseja remover: "))
            estoqueLivro.remover(indice)
            console.log("Item deletado com sucesso!")
            break
        case 2: 
            console.log(estoqueEletronico.listar())
            const indiceEletronico = Number(readlineSync.question("Digite o índice do item que deseja remover: "))
            estoqueEletronico.remover(indiceEletronico)
            console.log("Item deletado com sucesso!")
            break
        case 3: 
            console.log(estoqueBrinquedo.listar())
            const indiceBrinquedo = Number(readlineSync.question("Digite o índice do item que deseja remover: "))
            estoqueBrinquedo.remover(indiceBrinquedo)
            console.log("Item deletado com sucesso!")
            break
        case 4: 
            console.log(estoqueRoupa.listar())
            const indiceRoupa = Number(readlineSync.question("Digite o índice do item que deseja remover: "))
            estoqueRoupa.remover(indiceRoupa)
            console.log("Item deletado com sucesso!")
            break
        default:
            console.log("Opção inválida")    
    }
}
while(controlador) {
    const opcao1 = Number(readlineSync.question("O que deseja fazer? \n1 - Cadastrar produto \n2 - Listar produtos \n3 - Deletar produto \n4 - Sair \nDigite sua opção: "))
        switch(opcao1) {
            case 1: 
                cadastrarItem()
                break
            case 2:
                console.log(estoqueLivro.listar())
                console.log(estoqueEletronico.listar())
                console.log(estoqueBrinquedo.listar())
                console.log(estoqueRoupa.listar())
                break
            case 3:
                deletarItem()
                break

            case 4: 
                console.log('Saindo...')
                controlador = false
                break
            default: 
                console.log(`Opção inválida.`)
                break
            

        }
    }