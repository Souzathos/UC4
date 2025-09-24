import { Pagamento } from "./Pagamento";

export class Boleto extends Pagamento {
    
    constructor(valor:number){
        super(valor)
    }

    pagar():void{
        console.log(`Você tem 15 dias uteis para pagar o boleto`)
    }
}