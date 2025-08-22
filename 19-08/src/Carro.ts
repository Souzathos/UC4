import { NumericLiteral } from "typescript";
import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
    
    constructor(velocidade:number){
        super(velocidade)
    }

    acelerar(velocidade:number): void {
        console.log(`Nova velocidade: ${this.velocidade = velocidade}`)
        
    }
}