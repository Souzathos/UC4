import { Carga } from "./Carga"

export abstract class Veiculo {
    capacidade:number

    constructor(capacidade:number){
        this.capacidade = capacidade
    }

    abstract transportar<T>(carga:Carga<T>):void
}