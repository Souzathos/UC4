import { Pagamento } from "./Pagamento";

export class Cartao extends Pagamento {
    
    constructor(valor:number){
        super(valor)
    }

    pagar(valor:number):void;

    pagar(valor:number, parcelas:number):void;

    pagar(preco:number, parcelas?:number):void {
        if(parcelas == undefined){
            console.log(`Pagamento a vista!`)
        }
         else {
            const valorMensal:number = preco/parcelas
            console.log(`pagamento com parcelas de ${valorMensal.toFixed(2)} aprovado!`)
        }
    }
}   

//stonks