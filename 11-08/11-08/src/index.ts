import * as readline from 'readline-sync';
import { getAutomaticTypeDirectiveNames } from 'typescript';

let controlador = true


function soma(num1:number, num2:number):number{
    return num1 + num2
}

function subtracao(num1:number, num2:number):number {
    return num1 - num2
}

function multiplicacao(num1:number, num2:number):number {
    return num1 * num2
}

function divisao(num1:number, num2:number):void {
    if(num2 == 0){
        console.log("❌​ ERRO ❌​ \n Você não pode utilizar 0 para divisão. \n Tente novamente.")
    } else{
        console.log(`Resultado: ${num1 / num2}`)
    }
    
}
while(controlador) {
    console.log("=== MENU PRINCIPAL ===")
    console.log("1 - Somar")
    console.log("2 - Subtrair")
    console.log("3 - Multiplicar")
    console.log("4 - Dividir")
    console.log("5 - Sair")
    
    const opcao = readline.question("Escolha uma opcão: ")

    switch(opcao){
        case "1": 
            const num1Soma = Number(readline.question("Digite o primeiro número: "))
            const num2Soma = Number(readline.question("Digite o segundo número: "))
            console.log(`Resultado: ${soma(num1Soma, num2Soma)}`)
            break

        case "2":
            const num1Sub = Number(readline.question("Digite o primeiro número: "))
            const num2Sub = Number(readline.question("Digite o segundo número: "))
            console.log(`Resultado: ${subtracao(num1Sub, num2Sub)}`)
            break

        case "3":
            const num1Mult = Number(readline.question("Digite o primeiro número: "))
            const num2Mult = Number(readline.question("Digite o segundo número: "))
            console.log(`Resultado: ${multiplicacao(num1Mult, num2Mult)}`)
            break

        case "4":
            const num1Div = Number(readline.question("Digite o primeiro número: "))
            const num2Div = Number(readline.question("Digite o segundo número: "))
            divisao(num1Div, num2Div)
            break

        case "5": 
            console.log("Saindo...")
            controlador = false
            break
    }

}