import { Roupa } from ".";
import { Loja } from "./Loja";

export class LojaDeRoupa extends Loja<Roupa> {
    

    listar(): Roupa[] {
        return this.produtos
    }
}