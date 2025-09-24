import { Eletronico } from ".";
import { Loja } from "./Loja";

export class lojaDeEletronico extends Loja<Eletronico> {
    

    listar(): Eletronico[] {
        return this.produtos
    }
}