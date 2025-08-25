import * as readline from 'readline-sync';
import { Local } from './Local';
import { SistemaAbrigos } from './SistemaAbrigos';

let controlador = true
const abrigos:SistemaAbrigos = new SistemaAbrigos()
while(controlador) {
    console.log(`===== ABRIGOS TEMPORÁRIOS =====
    1. Cadastrar abrigo
    2. Listar abrigos
    3. Procurar abrigo
    4. Sair`)


    const opcao = Number(readline.question("Escolha uma opcão: "))
    switch(opcao) {
        case 1: 
            abrigos.cadastrarAbrigo()
            break

        case 2:
            abrigos.listarAbrigo()
            break
        
        case 3:
        abrigos.procurarAbrigo()
            break

        case 4: 
            controlador = false 
            console.log(`Saindo...`)
            break

        default:
            console.log(`Opção inválida.`)
            break        
    }
}