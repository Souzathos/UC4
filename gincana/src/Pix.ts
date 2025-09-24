import { Pagamento } from "./Pagamento"

export class Pix extends Pagamento {
    constructor(valor:number){
        super(valor)
    }

    pagar():number {
        const minNumer:number = 100000
        const maxNumero:number = 500000
        return Math.floor(Math.random() * (maxNumero - minNumer + 1)) + minNumer
    }
}
