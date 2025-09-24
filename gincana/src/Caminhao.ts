import { Carga } from "./Carga";
import { Veiculo } from "./Veiculo";

export class Caminhao extends Veiculo {
    constructor(capacidade:number){
        super(capacidade)
    }

    transportar<T>(carga: Carga<T>): void {
        if(carga.peso < 5000){
            console.log(`Carga aceita`)
        } else {
            console.log(`Carga acima do peso!`)
        }
    }
}