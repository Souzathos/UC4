import { reduceEachLeadingCommentRange } from "typescript";
import { PrecoPizza } from "./PrecoPizza"
import { SaborPizza } from "./SaboresPizza"
import { TamanhoPizza } from "./TamanhoPizza"
import * as readline from 'readline-sync';

export class Pizza {
    private sabor:SaborPizza
    private tamanho:TamanhoPizza
    private preco:PrecoPizza

    constructor(sabor:SaborPizza, tamanho:TamanhoPizza){
        
        this.sabor = sabor
        this.tamanho = tamanho
        this.preco = this.calculaPreco()
    }

    descricao():string{
        return `Resumo do pedido: \nSabor: ${this.sabor}, tamanho: ${this.tamanho}, preco: ${this.preco}`
    }

    calculaPreco():PrecoPizza{
        switch(this.tamanho){
            case TamanhoPizza.Pequena:
                return this.preco = PrecoPizza.P
                
            case TamanhoPizza.Media:
                return this.preco = PrecoPizza.M
            
            case TamanhoPizza.Grande:
                return this.preco = PrecoPizza.G
        
            case TamanhoPizza.Familia:
                return this.preco = PrecoPizza.F
            
            case TamanhoPizza.Gigante:
                return this.preco = PrecoPizza.GG
        
        }
    }

    fazerPedido():void {
        let opcao: number = 0

            while(opcao !== 2){
                console.log(`Bem vindo a nossa pizzaria!`)
                console.log(`O que deseja fazer? \n1 - Fazer pedido  \n2 - Sair`)
                opcao = readline.questionInt("Escolha uma opção: ")
                switch(opcao){
                    case 1: 
                        const saborEscolhido = this.mostrarSabor()
                        const tamanhoEscolhido = this.mostrarTamanho()
                        const pedido: Pizza = new Pizza(saborEscolhido, tamanhoEscolhido)
                        console.log(pedido.descricao())
                        break
                    case 2: 
                        console.log("Saindo...")
                        break
                    default:
                        console.log("Opção inválida")
                }
            }

        }



        mostrarSabor(): SaborPizza {
            console.log("Escolha o sabor da sua pizza: ")
          
            Object.values(SaborPizza).forEach((sabor:SaborPizza, index:number) => {
              console.log(`${index + 1}. ${sabor}`)
            })
          
            const escolha = readline.questionInt("Digite o número do sabor: ")
          
            const valores = Object.values(SaborPizza)
            const saborEscolhido = valores[escolha - 1]
          
            return saborEscolhido as SaborPizza
          }

          mostrarTamanho(): TamanhoPizza {
            console.log("Escolha o tamanho da sua pizza:")
          
            Object.values(TamanhoPizza).forEach((tamanho:TamanhoPizza, index:number) => {
              console.log(`${index + 1}. ${tamanho}`)
            })
          
            const escolha = readline.questionInt("Digite o número do tamanho: ")
          
            const valores = Object.values(TamanhoPizza)
            const tamanhoEscolhido = valores[escolha - 1]
          
            return tamanhoEscolhido as TamanhoPizza
          }
          

    
}