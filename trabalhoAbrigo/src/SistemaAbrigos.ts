import * as readline from 'readline-sync';
import { Abrigo } from "./Abrigo";
import { Local } from "./Local";

export class SistemaAbrigos{
    private abrigo:Abrigo[] = []

    // Método para cadastrar abrigos
    cadastrarAbrigo():void{
        const nome:string = readline.question('Nome: ')
        const endereco:string = readline.question('Endereço: ')
        const telefone:string = readline.question('Telefone: ')
        const cidade:string = readline.question('Cidade: ')
        const capacidade:number = Number(readline.question('Capacidade: '))
        const vagasOcupadas:number = Number(readline.question('Vagas Ocupadas:'))
        const novoAbrigo:Abrigo = new Abrigo(nome, endereco, cidade, telefone, capacidade, vagasOcupadas)

        // Adicionando novo abrigo no array de abrigos
        this.abrigo.push(novoAbrigo)
    }
    // Métodos para listar abrigos
    listarAbrigo():void {
        for(let i = 0; i < this.abrigo.length; i ++) {
            console.log(`--------------------
            LISTAGEM DE ABRIGOS:
            --------------------
            CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE |      VAGAS DISPONÍVEIS
            ----------------------------------------------------------------------------------------------------------------------------------------
            ${i+1}    |     ${this.abrigo[i].getNome()}              |            ${this.abrigo[i].getEndereco()}                  |         ${this.abrigo[i].getTelefone()}     |     ${this.abrigo[i].getCapacidade()}  |     ${this.abrigo[i].getCidade()}    |    ${this.abrigo[i].getVagasDisponiveis()}
            `)
            
        }
    }
    
    // Método para procurar abrigo pela cidade
    procurarAbrigo():void {    
        const pergunta:string = readline.question('Qual sua cidade? ')
        for(let i = 0; i < this.abrigo.length; i ++){
            if(pergunta === this.abrigo[i].getCidade()){
                //Verificando se o que foi inserido existe dentro do array pelo metodo "getCidade()"
                console.log(`--------------------
                LISTAGEM DE ABRIGOS:
                --------------------
                CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE |      VAGAS DISPONÍVEIS
                ----------------------------------------------------------------------------------------------------------------------------------------
                  ${i+1}  | ${this.abrigo[i].getNome()}  |        ${this.abrigo[i].getEndereco()}        |  ${this.abrigo[i].getTelefone()}  |    ${this.abrigo[i].getCapacidade()}  | ${this.abrigo[i].getCidade()}  |  ${this.abrigo[i].getVagasDisponiveis()}
                ---------------------------------------------------------------------------------------------------------`)
            }
        }
    }
}
