import { IFormaGeometrica } from "./IFormaGeometrica";


export class Circulo implements IFormaGeometrica{
    raio: number

    constructor(raio:number) {
        this.raio = raio
    }

    calcularArea(): number {
        return 3.14 * this.raio**2
    }
}