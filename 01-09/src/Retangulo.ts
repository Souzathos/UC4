import { Forma } from "./Forma";

export class Retangulo extends Forma {
    calcularArea(base:number, altura:number): number {
        return base * altura
    }
}