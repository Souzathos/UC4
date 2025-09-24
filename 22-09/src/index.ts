import { preProcessFile } from "typescript"
import { DiaDaSemana } from "./DiaDaSemana"
import { Pizza } from "./Pizza"
import { SaborPizza } from "./SaboresPizza"
import { TamanhoPizza } from "./TamanhoPizza"
import { PrecoPizza } from "./PrecoPizza"

let dia:DiaDaSemana = DiaDaSemana.Segunda

if(dia === DiaDaSemana.Segunda){
    console.log(`Hoje é dia de UC4`)
} else if(dia === DiaDaSemana.Quarta){
    console.log(`Hoje é dia de inglês`)
} else {
    console.log(`Hoje é dia de PI`)
}

const pedido1:Pizza = new Pizza(SaborPizza.Baiana, TamanhoPizza.Pequena)
console.log(pedido1.descricao())
pedido1.fazerPedido()
