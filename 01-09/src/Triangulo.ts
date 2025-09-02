import { Forma } from "./Forma";

export class Triangulo extends Forma {
    calcularArea(base: number, altura: number): number {
        return (base * altura) / 2
    }
}