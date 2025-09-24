import { Carga } from "./Carga";
import { Veiculo } from "./Veiculo";

export class Navio extends Veiculo {

    transportar<T>(carga: Carga<T>): void {
        
        if(carga.peso < 10000){
            console.log(`Carga aceita`)
        } else {
            console.log(`Carga acima do peso!`)
        }
    }

}