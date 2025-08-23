import * as readline from 'readline-sync';
import { Abrigo } from "./Abrigo";
import { Local } from "./Local";

export class SistemaAbrigos{
    private abrigo:Abrigo[] = []


    cadastrarAbrigo():void{
        const nome:string = readline.question('Nome: ')
        const endereco:string = readline.question('Endereço: ')
        const telefone:string = readline.question('Telefone: ')
        const cidade:string = readline.question('Cidade: ')
        const capacidade:number = Number(readline.question('Capacidade: '))
        const vagasOcupadas:number = Number(readline.question('Vagas Ocupadas:'))
        const novoAbrigo:Abrigo = new Abrigo(nome, endereco, cidade, telefone, capacidade, vagasOcupadas)

        this.abrigo.push(novoAbrigo)
    }

    listarAbrigo():void {
        for(let i = 0; i < this.abrigo.length; i ++) {
            console.log(`--------------------
            LISTAGEM DE ABRIGOS:
            --------------------
            CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE
            ---------------------------------------------------------------------------------------------------------
            ${i}    |     ${this.abrigo[i].getNome()}              |            ${this.abrigo[i].getEndereco()},                   |         ${this.abrigo[i].getTelefone()},      |     ${this.abrigo[i].getCapacidade()}  |     ${this.abrigo[i].getCidade()}
            `)
            
        }
    }
    

    procurarAbrigo():void {
        const pergunta:string = readline.question('Qual sua cidade? ')
        for(let i = 0; i < this.abrigo.length; i ++){
            if(pergunta)
        }
    }
}
